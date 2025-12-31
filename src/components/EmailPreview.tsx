interface EmailPreviewProps {
  onEmailClick: () => void;
  isRead: boolean;
}

const EmailPreview = ({ onEmailClick, isRead }: EmailPreviewProps) => {
  return (
    <div className="flex-1 bg-background p-6">
      <div className="max-w-2xl mx-auto">
        {/* Email list header */}
        <div className="mb-6">
          <h2 className="font-ui font-semibold text-xl text-foreground mb-1">Inbox</h2>
          <p className="text-sm text-muted-foreground font-ui">
            {isRead ? "All messages read" : "1 unread message"}
          </p>
        </div>

        {/* Email item */}
        <button
          onClick={onEmailClick}
          className={`w-full text-left border border-border rounded-xl p-5 hover:shadow-paper transition-all duration-300 group cursor-pointer ${
            isRead ? "bg-muted/50" : "bg-card"
          }`}
        >
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
              isRead ? "bg-muted" : "bg-gradient-to-br from-primary/30 to-accent/30"
            }`}>
              <span className="text-lg">{isRead ? "📬" : "💌"}</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`font-ui ${isRead ? "font-normal text-muted-foreground" : "font-semibold text-foreground"}`}>
                  Someone Special
                </span>
                {!isRead && (
                  <span className="w-2 h-2 rounded-full bg-unread-dot animate-unread-pulse" />
                )}
              </div>
              <h3 className={`font-ui mb-1 truncate ${isRead ? "font-normal text-muted-foreground" : "font-medium text-foreground"}`}>
                A Letter Just For You ✨
              </h3>
              <p className="text-sm text-muted-foreground font-ui line-clamp-2">
                {isRead ? "You've read this special message" : "Click to open this special message that was written just for you..."}
              </p>
            </div>

            {/* Time */}
            <div className="text-xs text-muted-foreground font-ui flex-shrink-0">
              {isRead ? "Read" : "Just now"}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default EmailPreview;
