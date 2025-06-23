export const metadata = {
  title: "Termini d'uso - NextCdS",
  description: 'Termini e condizioni di utilizzo di NextCdS',
};

export default function TermsOfUsePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 prose prose-zinc dark:prose-invert">
      <h1 className="text-textPrimary dark:text-white">Termini d'uso</h1>

      <p className="text-textSecondary dark:text-zinc-400 leading-relaxed">
        L’uso di NextCdS implica l’accettazione dei seguenti termini e condizioni.
      </p>

      <h2 className="text-textPrimary dark:text-white">1. Servizio</h2>
      <p className="text-textSecondary dark:text-zinc-400 leading-relaxed">
        NextCdS offre strumenti per consultare il Codice della Strada e relativi aggiornamenti.
      </p>

      <h2 className="text-textPrimary dark:text-white">2. Responsabilità</h2>
      <p className="text-textSecondary dark:text-zinc-400 leading-relaxed">
        Non siamo responsabili di eventuali danni derivanti dall’uso delle informazioni fornite.
      </p>

      <h2 className="text-textPrimary dark:text-white">3. Proprietà intellettuale</h2>
      <p className="text-textSecondary dark:text-zinc-400 leading-relaxed">
        I contenuti di NextCdS sono protetti da diritti di proprietà intellettuale.
      </p>

      <h2 className="text-textPrimary dark:text-white">4. Modifiche</h2>
      <p className="text-textSecondary dark:text-zinc-400 leading-relaxed">
        Ci riserviamo il diritto di modificare i termini senza preavviso.
      </p>

      <h2 className="text-textPrimary dark:text-white">5. Legge applicabile</h2>
      <p className="text-textSecondary dark:text-zinc-400 leading-relaxed">
        I rapporti sono regolati dalla legge italiana.
      </p>
    </main>
  );
}
