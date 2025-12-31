import { Mail, Inbox, Send, Star, Trash2 } from "lucide-react";

interface EmailSidebarProps {
  onEmailClick: () => void;
  hasUnread: boolean;
}

const EmailSidebar = ({ onEmailClick, hasUnread }: EmailSidebarProps) => {
  return (
    <aside className="w-72 bg-sidebar-bg border-r border-border shadow-sidebar h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="font-ui font-semibold text-foreground">Mailbox</h1>
            <p className="text-xs text-muted-foreground">Special Delivery</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          <li>
            <button
              onClick={onEmailClick}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group relative"
            >
              <Inbox className="w-5 h-5 text-primary" />
              <span className="font-ui font-medium text-foreground">Inbox</span>
              {hasUnread && (
                <span className="ml-auto flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-unread-dot animate-unread-pulse" />
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    1
                  </span>
                </span>
              )}
            </button>
          </li>
          <li>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted/50 transition-colors cursor-default opacity-50">
              <Star className="w-5 h-5" />
              <span className="font-ui">Starred</span>
            </button>
          </li>
          <li>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted/50 transition-colors cursor-default opacity-50">
              <Send className="w-5 h-5" />
              <span className="font-ui">Sent</span>
            </button>
          </li>
          <li>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted/50 transition-colors cursor-default opacity-50">
              <Trash2 className="w-5 h-5" />
              <span className="font-ui">Trash</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <p className="text-xs text-center text-muted-foreground font-ui">
          ✨ You have a special message
        </p>
      </div>
    </aside>
  );
};

export default EmailSidebar;
