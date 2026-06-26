interface ChapterOneProps {
  onClose: () => void;
}

export default function ChapterOne({ onClose }: ChapterOneProps) {
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-8 py-24">
      <span className="mb-2 font-sans text-xs uppercase tracking-[0.25em] text-gold-muted">
        Part One
      </span>

      <h1 className="mb-10 font-display text-6xl font-light leading-none text-ink sm:text-7xl">
        <span className="float-left mr-4 mt-1 font-display text-8xl leading-[0.7] sm:text-9xl">
          T
        </span>
        he air hung heavy with the scent of damp earth and forgotten things.
      </h1>

      <div className="space-y-5 font-sans text-base leading-relaxed text-ink-brown/85 sm:text-lg">
        <p>
          The old garden had not been entered in seventeen years. Its iron gate,
          rusted to a shade of dried blood, had become part of the ivy that
          swallowed the stone wall whole. Children whispered that it was
          haunted; adults simply looked away when they passed it.
        </p>
        <p>
          But she remembered. She remembered the way the morning light had
          slanted through the willow branches, casting lace patterns on the
          mossy path. She remembered the smell of jasmine and the sound of
          bees drunk on nectar. She remembered everything.
        </p>
        <p>
          And now, standing at the threshold with the key cool and heavy in her
          palm, she wondered if some doors, once closed, were meant to stay
          that way.
        </p>
      </div>

      <div className="mt-12 border-t border-paper-aged/50 pt-8 text-center">
        <button
          onClick={onClose}
          className="group inline-flex items-center gap-2 font-display text-base tracking-wide text-ink-brown/60 transition-colors hover:text-gold-muted"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            &larr;
          </span>
          Close the Book
        </button>
      </div>
    </div>
  );
}
