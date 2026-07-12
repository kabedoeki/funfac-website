import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./EntryDialog.css";

const STORAGE_KEY = "funfac:entry-dialog-seen";

function hasSeenEntryDialog() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markEntryDialogSeen() {
  try {
    localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // localStorage unavailable (private browsing, disabled storage) - dialog reappears next visit
  }
}

export default function EntryDialog() {
  const [isOpen, setIsOpen] = useState(() => !hasSeenEntryDialog());
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function close() {
    markEntryDialogSeen();
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return createPortal(
    <div className="entry-dialog-overlay" onClick={close}>
      <div
        className="entry-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="entry-dialog-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="entry-dialog__watermark" aria-hidden="true">
          <svg width="220" height="220" viewBox="0 0 220 220">
            <circle
              cx="110"
              cy="110"
              r="86"
              fill="none"
              stroke="currentColor"
              strokeWidth="7"
            />
            <text
              x="110"
              y="128"
              textAnchor="middle"
              fontFamily="JetBrains Mono"
              fontWeight="800"
              fontSize="46"
              fill="currentColor"
            >
              FUN
            </text>
          </svg>
        </div>

        <button
          type="button"
          className="entry-dialog__close"
          aria-label="Close"
          ref={closeButtonRef}
          onClick={close}
        >
          ✕
        </button>

        <div className="entry-dialog__body">
          <h2 id="entry-dialog-title" className="entry-dialog__title">
            Read before continuing
          </h2>

          <p className="entry-dialog__line">
            <span className="entry-dialog__bullet" aria-hidden="true">
              ▸
            </span>
            <span>
              While we won't be posting explicit NSFW content here, this blog
              will have themes unsuitable for younger audiences.{" "}
              <strong className="entry-dialog__emphasis">Minors DNI.</strong>
            </span>
          </p>

          <p className="entry-dialog__line">
            <span className="entry-dialog__bullet" aria-hidden="true">
              ▸
            </span>
            <span>
              <strong className="entry-dialog__emphasis">
                Be Respectful of the boundaries
              </strong>{" "}
              that has been set.
            </span>
          </p>

          <p className="entry-dialog__line">
            <span className="entry-dialog__bullet" aria-hidden="true">
              ▸
            </span>
            <span>
              Please{" "}
              <strong className="entry-dialog__emphasis">
                do not ask or make a character
              </strong>{" "}
              be a part of this world. This project is explicitly exclusive to
              friends.
            </span>
          </p>

          <div className="entry-dialog__callout">
            <p className="entry-dialog__callout-lead">
              Most importantly,{" "}
              <strong>
                PLEASE REMEMBER THAT THIS IS FICTION. NONE OF THE CREATORS OF
                THIS PROJECT CONDONE NOR ENCOURAGE BEHAVIORS AND ACTIONS OF THE
                CHARACTERS.
              </strong>
            </p>
            <p className="entry-dialog__callout-emphasis">
              <u>YOUR HYPERFIXATION IS NOT OUR RESPONSIBILITY.</u>
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
