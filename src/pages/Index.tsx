import { useState } from "react";
import EmailSidebar from "@/components/EmailSidebar";
import EmailPreview from "@/components/EmailPreview";
import Envelope from "@/components/Envelope";
import Letter from "@/components/Letter";

type ViewState = "inbox" | "envelope" | "letter";

const Index = () => {
  const [viewState, setViewState] = useState<ViewState>("inbox");
  const [isRead, setIsRead] = useState(false);

  const handleEmailClick = () => {
    if (!isRead) {
      setViewState("envelope");
    }
  };

  const handleEnvelopeOpen = () => {
    setViewState("letter");
    setIsRead(true);
  };

  const handleClose = () => {
    setViewState("inbox");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <EmailSidebar onEmailClick={handleEmailClick} hasUnread={!isRead} />

      {/* Main content */}
      <EmailPreview onEmailClick={handleEmailClick} isRead={isRead} />

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
