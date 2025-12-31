import { Mail } from "lucide-react";

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
            {isRead ? "No unread messages" : "1 unread message"}
          </p>
        </div>

        {/* Email item */}
        {!isRead && (
          <button
            onClick={onEmailClick}
            className="w-full text-left bg-card border border-border rounded-xl p-5 hover:shadow-paper transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">💌</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-ui font-semibold text-foreground">
                    Someone Special
                  </span>
                  <span className="w-2 h-2 rounded-full bg-unread-dot animate-unread-pulse" />
                </div>
                <h3 className="font-ui font-medium text-foreground mb-1 truncate">
                  A Letter Just For You ✨
                </h3>
                <p className="text-sm text-muted-foreground font-ui line-clamp-2">
                  Click to open this special message that was written just for you...
                </p>
              </div>

              {/* Time */}
              <div className="text-xs text-muted-foreground font-ui flex-shrink-0">
                Just now
              </div>
            </div>
          </button>
        )}

        {/* Empty state when read */}
        {isRead && (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <Mail className="w-10 h-10 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground font-ui">
              All caught up! 💫
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailPreview;
