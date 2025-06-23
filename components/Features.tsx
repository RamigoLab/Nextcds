export default function Features() {
  const features = [
    {
      title: 'Ricerca per Articolo',
      description: "Cerca un articolo specifico inserendo direttamente il suo numero per trovare subito ciò che ti interessa.",
    },
    {
      title: 'Ricerca Testuale',
      description: "Effettua ricerche libere all'interno del testo del Codice della Strada per trovare argomenti e riferimenti.",
    },
    {
      title: 'Aggiornamenti in Tempo Reale',
      description: 'Ricevi notifiche sulle modifiche al Codice della Strada immediatamente.',
    },
    {
      title: 'Account Personalizzati',
      description: 'Accesso differenziato con piani Free e Premium per le tue esigenze.',
    },
    {
      title: 'Salvataggio Contravvenzioni Frequenti',
      description: 'Tieni traccia e salva le contravvenzioni consultate più spesso per un accesso rapido.',
    },
  ];

  return (
    <section
      id="features"
      className="w-full max-w-6xl mx-auto py-24 px-6 sm:px-10 md:px-16"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-16">
        Funzionalità principali
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description }) => (
          <div
            key={title}
            className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8
              shadow-md transition
              hover:shadow-lg hover:border-indigo-500 hover:bg-indigo-50
              cursor-default focus:outline-none focus:ring-4 focus:ring-indigo-300"
            tabIndex={0} // per focus accessibile
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-600 transition-colors">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
