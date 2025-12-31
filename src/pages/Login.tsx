import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate a brief delay for UX
    setTimeout(() => {
      const success = login(username, password);
      if (success) {
        navigate("/");
      } else {
        setError("Invalid username or password");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">💌</div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-10 animate-float" style={{ animationDelay: "1s" }}>✨</div>
        <div className="absolute top-1/3 right-1/4 text-4xl opacity-10 animate-float" style={{ animationDelay: "0.5s" }}>💕</div>
      </div>

      {/* Login card */}
      <div className="w-full max-w-md relative">
        <div className="bg-card border border-border rounded-2xl shadow-paper p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">💌</span>
            </div>
            <h1 className="font-display text-2xl md:text-3xl text-foreground mb-2">
              You Have Mail!
            </h1>
            <p className="text-muted-foreground font-ui text-sm">
              Sign in to read your special message
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-ui font-medium text-foreground mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-ui focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Enter your username"
                required
                autoComplete="username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-ui font-medium text-foreground mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-ui focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Enter your password"
                required
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="text-center text-sm text-destructive font-ui bg-destructive/10 py-2 px-4 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-ui font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Hint */}
          <p className="text-center text-muted-foreground/60 text-xs font-ui mt-6">
            This is a private letter 💫
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
