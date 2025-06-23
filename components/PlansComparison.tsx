import Link from 'next/link';

export default function PlansComparison() {
  return (
    <section
      className="w-full max-w-6xl mx-auto py-24 px-6 sm:px-10 md:px-16 text-center"
      aria-label="Confronto piani di abbonamento"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold mb-16 text-textPrimary dark:text-white">
        Piani a confronto
      </h2>

      <p className="mb-12 text-textSecondary dark:text-textMuted max-w-xl mx-auto">
        Scegli il piano che fa per te, con accessi differenziati e funzionalità adatte alle tue esigenze.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Free Plan */}
        <div
          tabIndex={-1}
          className="rounded-xl border border-border dark:border-zinc-700 bg-white dark:bg-zinc-900 p-10 transition-shadow duration-300 hover:shadow-lg hover:border-primary focus-within:ring-2 focus-within:ring-primary"
        >
          <h3 className="text-2xl font-semibold mb-8 text-textPrimary dark:text-white">Gratis</h3>
          <ul className="space-y-6 text-textSecondary dark:text-textMuted text-lg text-left max-w-xs mx-auto">
            <li className="flex items-center gap-4">
              <span
                className="text-green-500 select-none"
                aria-hidden="true"
                role="img"
                aria-label="Incluso"
              >
                ✓
              </span>
              <span>1 ricerca al giorno</span>
            </li>
            <li className="flex items-center gap-4">
              <span
                className="text-green-500 select-none"
                aria-hidden="true"
                role="img"
                aria-label="Incluso"
              >
                ✓
              </span>
              <span>Accesso base al CdS</span>
            </li>
            <li className="flex items-center gap-4 line-through opacity-50">
              <span
                className="text-red-500 select-none"
                aria-hidden="true"
                role="img"
                aria-label="Non incluso"
              >
                ✗
              </span>
              <span>Accesso illimitato</span>
            </li>
          </ul>

          <Link
            href="/auth/register"
            className="mt-10 inline-block px-8 py-3 rounded-lg bg-textPrimary text-white font-semibold hover:bg-primary transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            aria-label="Registrati al piano gratuito"
          >
            Registrati Gratis
          </Link>
        </div>

        {/* Premium Plan */}
        <div
          tabIndex={-1}
          className="relative rounded-xl border-2 border-primary bg-white dark:bg-zinc-900 p-10 transition-shadow duration-300 hover:shadow-xl focus-within:ring-2 focus-within:ring-accent"
        >
          <div
            className="absolute top-0 right-0 bg-primary text-white px-5 py-1 rounded-bl-lg font-semibold tracking-wide select-none"
            aria-hidden="true"
          >
            POPOLARE
          </div>

          <h3 className="text-2xl font-semibold mb-8 text-textPrimary dark:text-white">Premium</h3>
          <ul className="space-y-6 text-textSecondary dark:text-textMuted text-lg text-left max-w-xs mx-auto">
            <li className="flex items-center gap-4">
              <span
                className="text-green-500 select-none"
                aria-hidden="true"
                role="img"
                aria-label="Incluso"
              >
                ✓
              </span>
              <span>Ricerca illimitata</span>
            </li>
            <li className="flex items-center gap-4">
              <span
                className="text-green-500 select-none"
                aria-hidden="true"
                role="img"
                aria-label="Incluso"
              >
                ✓
              </span>
              <span>Accesso completo al CdS</span>
            </li>
            <li className="flex items-center gap-4">
              <span
                className="text-green-500 select-none"
                aria-hidden="true"
                role="img"
                aria-label="Incluso"
              >
                ✓
              </span>
              <span>Aggiornamenti in tempo reale</span>
            </li>
          </ul>

          <Link
            href="/auth/register?plan=premium"
            className="mt-10 inline-block w-full px-8 py-3 rounded-lg bg-primary text-white font-bold hover:bg-accent transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            aria-label="Prova il piano premium"
          >
            Prova Premium
          </Link>
        </div>
      </div>
    </section>
  );
}
