import { X } from "lucide-react";

interface LetterProps {
  onClose: () => void;
}

const Letter = ({ onClose }: LetterProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-backdrop"
      style={{ backgroundColor: "hsl(30 20% 20% / 0.7)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg animate-paper-unfold"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Paper */}
        <div className="bg-paper rounded-lg shadow-envelope p-8 md:p-12 relative overflow-hidden">
          {/* Paper texture lines */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="h-px bg-paper-lines/40"
                style={{ marginTop: i === 0 ? "4rem" : "1.75rem" }}
              />
            ))}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>

          {/* Letter content */}
          <div className="relative z-10">
            {/* Date */}
            <p className="text-right text-sm text-muted-foreground font-letter italic mb-8">
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>

            {/* Greeting */}
            <p className="font-letter text-xl md:text-2xl text-foreground mb-6">
              Dear You,
            </p>

            {/* Message body - This is where you customize your message! */}
            <div className="font-letter text-lg md:text-xl text-foreground leading-relaxed space-y-4">
              <p>
                I wanted to take a moment to write you something special, 
                something that comes straight from my heart.
              </p>
              <p>
                You mean so much to me, and I hope this little surprise 
                brings a smile to your face. 💕
              </p>
              <p>
                Thank you for being you — for every moment we've shared, 
                for every laugh, and for all the memories we've made together.
              </p>
              <p>
                Here's to many more beautiful moments ahead!
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 font-letter text-xl md:text-2xl text-foreground">
              <p className="mb-2">With love,</p>
              <p className="italic text-primary">Someone who cares about you ✨</p>
            </div>

            {/* Decorative heart */}
            <div className="absolute -bottom-2 -right-2 text-4xl opacity-20">
              💌
            </div>
          </div>
        </div>

        {/* Hint */}
        <p className="text-center text-primary-foreground/60 text-sm font-ui mt-4">
          Click outside to close
        </p>
      </div>
    </div>
  );
};

export default Letter;
