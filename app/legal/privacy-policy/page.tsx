export const metadata = {
  title: 'Privacy Policy - NextCdS',
  description: 'Informativa sulla privacy di NextCdS',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 prose prose-zinc dark:prose-invert">
      <h1 className="text-textPrimary dark:text-white">Privacy Policy</h1>

      <p className="text-textSecondary dark:text-zinc-400 leading-relaxed">
        La presente informativa descrive come NextCdS raccoglie, utilizza e protegge i dati personali degli utenti.
      </p>

      <h2 className="text-textPrimary dark:text-white">1. Raccolta dei dati</h2>
      <p className="text-textSecondary dark:text-zinc-400 leading-relaxed">
        Raccogliamo solo i dati necessari per il funzionamento dell’app e il miglioramento del servizio.
      </p>

      <h2 className="text-textPrimary dark:text-white">2. Uso dei dati</h2>
      <p className="text-textSecondary dark:text-zinc-400 leading-relaxed">
        I dati sono utilizzati esclusivamente per fornire il servizio e non saranno ceduti a terzi senza consenso.
      </p>

      <h2 className="text-textPrimary dark:text-white">3. Sicurezza</h2>
      <p className="text-textSecondary dark:text-zinc-400 leading-relaxed">
        Adottiamo misure tecniche e organizzative per proteggere i dati da accessi non autorizzati.
      </p>

      <h2 className="text-textPrimary dark:text-white">4. Diritti degli utenti</h2>
      <p className="text-textSecondary dark:text-zinc-400 leading-relaxed">
        Gli utenti possono richiedere l’accesso, la rettifica o la cancellazione dei propri dati in qualsiasi momento.
      </p>

      <h2 className="text-textPrimary dark:text-white">5. Contatti</h2>
      <p className="text-textSecondary dark:text-zinc-400 leading-relaxed">
        Per qualsiasi domanda sulla privacy, scrivere a{' '}
        <a
          href="mailto:info@nextcds.it"
          className="text-primary underline hover:text-accent transition-colors"
        >
          info@nextcds.it
        </a>.
      </p>
    </main>
  );
}
