import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  username: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isMailRead: boolean;
  setMailRead: (read: boolean) => void;
  resetAll: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const VALID_USERS = [
  { username: "Rei", password: "iamspiderman2002", isAdmin: false },
  { username: "argEe", password: "iamspiderman2002", isAdmin: true },
];

const STORAGE_KEYS = {
  user: "gift-letter-user",
  mailRead: "gift-letter-mail-read",
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isMailRead, setIsMailRead] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load saved state on mount
  useEffect(() => {
    const savedUser = localStorage.getItem(STORAGE_KEYS.user);
    const savedMailRead = localStorage.getItem(STORAGE_KEYS.mailRead);

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem(STORAGE_KEYS.user);
      }
    }

    if (savedMailRead) {
      setIsMailRead(savedMailRead === "true");
    }

    setIsLoading(false);
  }, []);

  const login = (username: string, password: string): boolean => {
    const validUser = VALID_USERS.find(
      (u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password
    );

    if (validUser) {
      const userData = { username: validUser.username, isAdmin: validUser.isAdmin };
      setUser(userData);
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEYS.user);
  };

  const setMailRead = (read: boolean) => {
    setIsMailRead(read);
    localStorage.setItem(STORAGE_KEYS.mailRead, String(read));
  };

  const resetAll = () => {
    // Clear all saved data
    localStorage.removeItem(STORAGE_KEYS.user);
    localStorage.removeItem(STORAGE_KEYS.mailRead);
    setUser(null);
    setIsMailRead(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground font-ui">Loading...</div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isMailRead, setMailRead, resetAll }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
