export const metadata = {
  title: 'Disclaimer - NextCdS',
  description: 'Limitazioni di responsabilità di NextCdS',
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 prose prose-zinc dark:prose-invert">
      <h1 className="text-textPrimary dark:text-white">Disclaimer</h1>
      
      <p className="text-textSecondary dark:text-zinc-400 leading-relaxed">
        NextCdS non si assume alcuna responsabilità per eventuali errori di battitura, 
        trascrizione o per un’errata applicazione della legge che potrebbe derivare dall’uso di questa applicazione.
      </p>
      
      <p className="text-textSecondary dark:text-zinc-400 leading-relaxed">
        Inoltre, non garantiamo la completezza o l’aggiornamento costante dei contenuti. 
        Per ogni verifica ufficiale e definitiva, fa sempre fede il testo del Codice della Strada reperibile su{' '}
        <a
          href="https://www.normattiva.it"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-accent transition-colors"
        >
          Normattiva
        </a>{' '}
        o sulla{' '}
        <a
          href="https://www.gazzettaufficiale.it"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-accent transition-colors"
        >
          Gazzetta Ufficiale
        </a>.
      </p>
      
      <p className="text-textSecondary dark:text-zinc-400 leading-relaxed">
        L’uso di NextCdS avviene sotto la responsabilità esclusiva dell’utente.
      </p>
    </main>
  );
}
