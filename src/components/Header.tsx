import { LogOut, RotateCcw } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const { user, logout, resetAll } = useAuth();

  const handleReset = () => {
    if (confirm("This will reset everything and log out all users. Continue?")) {
      resetAll();
    }
  };

  return (
    <header className="h-14 border-b border-border bg-card flex items-center justify-between px-4">
      <div className="font-ui text-sm text-muted-foreground">
        Signed in as <span className="font-medium text-foreground">{user?.username}</span>
      </div>
      
      <div className="flex items-center gap-2">
        {user?.isAdmin && (
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-ui text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
            title="Reset all data"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        )}
        
        <button
          onClick={logout}
          className="flex items-center gap-2 px-3 py-1.5 text-sm font-ui text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
