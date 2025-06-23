export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-label="Hero section con titolo, descrizione e call to action"
    >
      {/* Overlay con opacità e blur ammorbidito */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center text-white">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-lg">
          Tutto il Codice della Strada.
        </h1>
        <p className="text-lg sm:text-2xl text-zinc-200 mb-12 max-w-xl mx-auto drop-shadow-md">
          In tasca, sempre con te. Senza complicazioni.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {/* CTA: Inizia Gratis */}
          <a
            href="/auth"
            className="inline-flex px-12 py-4 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:from-purple-700 hover:to-blue-700 transition-transform duration-300 ease-in-out hover:scale-105 items-center gap-3 drop-shadow-md"
            aria-label="Inizia gratis"
          >
            Inizia gratis
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M5 5v14" />
            </svg>
          </a>

          {/* CTA: Scopri di più */}
          <a
            href="#features"
            className="inline-flex px-12 py-4 rounded-3xl border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-700 transition-colors duration-300 ease-in-out items-center gap-3 shadow-md hover:shadow-lg"
            aria-label="Scopri di più"
          >
            Scopri di più
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
