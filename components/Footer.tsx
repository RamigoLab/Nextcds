export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600 mt-auto">
      <div className="max-w-screen-xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900">NextCdS</h3>
          <p>
            Tutto il Codice della Strada, in tasca e senza sbatti.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Link Utili</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.normattiva.it/"
                className="hover:text-indigo-600 transition-colors duration-300"
                target="_blank" rel="noopener noreferrer"
              >
                Normattiva
              </a>
            </li>
            <li>
              <a
                href="https://eur-lex.europa.eu/homepage.html?locale=it"
                className="hover:text-indigo-600 transition-colors duration-300"
                target="_blank" rel="noopener noreferrer"
              >
                Normative UE
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/legal/privacy-policy"
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/legal/terms-of-use"
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                Termini d'uso
              </a>
            </li>
            <li>
              <a
                href="/legal/disclaimer"
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                Disclaimer
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-gray-900">Contatti</h4>
          <address className="not-italic space-y-1">
            <p>info@nextcds.it</p>
            <p>+39 123 456 7890</p>
          </address>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-5 text-center text-gray-400 text-sm select-none">
        <p>© {new Date().getFullYear()} NextCdS. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}
