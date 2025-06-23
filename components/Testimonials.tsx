export default function Testimonials() {
  const reviews = [
    {
      name: "Luca R.",
      text: "App super utile, mi ha aiutato tantissimo a capire meglio le regole stradali.",
    },
    {
      name: "Giulia M.",
      text: "Interfaccia semplice e veloce, ottima anche la versione free!",
    },
    {
      name: "Marco F.",
      text: "Aggiornamenti sempre puntuali, mi sento sempre informato.",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto py-24 px-6 sm:px-10 md:px-16 text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-16 text-textPrimary dark:text-white">
        Cosa dicono i nostri utenti
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {reviews.map(({ name, text }, idx) => (
          <figure
            key={idx}
            tabIndex={0}
            className="relative bg-zinc-100 dark:bg-zinc-900 p-8 rounded-2xl shadow-md text-zinc-900 dark:text-zinc-200
              hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out
              focus:outline-none focus:ring-4 focus:ring-primary"
            aria-label={`Testimonianza di ${name}`}
          >
            <span
              className="absolute -top-8 left-6 text-[7rem] font-serif text-primary opacity-30 select-none pointer-events-none"
              aria-hidden="true"
            >
              “
            </span>
            <blockquote>
              <p className="mb-6 italic leading-relaxed text-lg">{text}</p>
            </blockquote>
            <figcaption className="text-right font-semibold text-textPrimary dark:text-white">
              — {name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
