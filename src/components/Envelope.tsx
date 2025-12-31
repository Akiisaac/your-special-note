import { useState } from "react";

interface EnvelopeProps {
  onClose: () => void;
  onOpen: () => void;
}

const Envelope = ({ onClose, onOpen }: EnvelopeProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleReadClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-backdrop"
      style={{ backgroundColor: "hsl(30 20% 20% / 0.6)" }}
      onClick={onClose}
    >
      <div
        className="relative animate-envelope-appear"
        onClick={(e) => e.stopPropagation()}
        style={{ perspective: "1000px" }}
      >
        {/* Envelope body */}
        <div
          className={`relative w-80 h-56 md:w-96 md:h-64 ${isOpening ? "animate-letter-rise" : ""}`}
        >
          {/* Back of envelope */}
          <div className="absolute inset-0 bg-envelope rounded-lg shadow-envelope" />

          {/* Inner fold (visible area) */}
          <div className="absolute inset-2 bg-envelope-inner rounded-md" />

          {/* Triangle flap */}
          <div
            className={`absolute top-0 left-0 right-0 h-1/2 origin-top ${
              isOpening ? "animate-envelope-open" : ""
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front of flap */}
            <svg
              viewBox="0 0 100 50"
              className="absolute w-full h-full"
              preserveAspectRatio="none"
              style={{ backfaceVisibility: "hidden" }}
            >
              <polygon
                points="0,0 50,50 100,0"
                className="fill-envelope"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />
            </svg>
            {/* Back of flap */}
            <svg
              viewBox="0 0 100 50"
              className="absolute w-full h-full"
              preserveAspectRatio="none"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateX(180deg)",
              }}
            >
              <polygon
                points="0,0 50,50 100,0"
                className="fill-envelope-inner"
              />
            </svg>
          </div>

          {/* Seal / Read Me button */}
          {!isOpening && (
            <button
              onClick={handleReadClick}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-seal hover:bg-seal-hover transition-colors animate-seal-pulse flex items-center justify-center shadow-lg group"
            >
              <div className="text-center">
                <span className="block text-xs md:text-sm font-letter font-semibold text-primary-foreground uppercase tracking-wider">
                  Read
                </span>
                <span className="block text-xs md:text-sm font-letter font-semibold text-primary-foreground uppercase tracking-wider">
                  Me
                </span>
              </div>
              {/* Wax seal effect */}
              <div className="absolute inset-1 rounded-full border-2 border-primary-foreground/30" />
            </button>
          )}

          {/* Decorative elements */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="h-px bg-border/50" />
            <div className="h-px bg-border/30 mt-2" />
            <div className="h-px bg-border/20 mt-2 w-2/3" />
          </div>
        </div>

        {/* Click outside hint */}
        <p className="text-center text-primary-foreground/60 text-sm font-ui mt-6">
          Click outside to close
        </p>
      </div>
    </div>
  );
};

export default Envelope;
