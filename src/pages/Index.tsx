import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import EmailSidebar from "@/components/EmailSidebar";
import EmailPreview from "@/components/EmailPreview";
import Envelope from "@/components/Envelope";
import Letter from "@/components/Letter";
import Header from "@/components/Header";

type ViewState = "inbox" | "envelope" | "letter";

const Index = () => {
  const { user, isMailRead, setMailRead } = useAuth();
  const [viewState, setViewState] = useState<ViewState>("inbox");

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleEmailClick = () => {
    if (!isMailRead) {
      setViewState("envelope");
    } else {
      // If already read, go straight to letter
      setViewState("letter");
    }
  };

  const handleEnvelopeOpen = () => {
    setViewState("letter");
    setMailRead(true);
  };

  const handleClose = () => {
    setViewState("inbox");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with logout */}
      <Header />

      {/* Main content */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <EmailSidebar onEmailClick={handleEmailClick} hasUnread={!isMailRead} />

        {/* Main content */}
        <EmailPreview onEmailClick={handleEmailClick} isRead={isMailRead} />
      </div>

      {/* Envelope overlay */}
      {viewState === "envelope" && (
        <Envelope onClose={handleClose} onOpen={handleEnvelopeOpen} />
      )}

      {/* Letter overlay */}
      {viewState === "letter" && <Letter onClose={handleClose} />}
    </div>
  );
};

export default Index;
