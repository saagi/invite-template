import Hero from '@/components/Hero';
import WelcomeMessage from '@/components/WelcomeMessage';
import Countdown from '@/components/Countdown';
import WeddingDay from '@/components/WeddingDay';
import EventDetails from '@/components/EventDetails';
import RsvpForm from '@/components/RsvpForm';
import Envelope from '@/components/Envelope';
import Navigation from '@/components/Navigation';

export default function Home() {
  const brideName = 'Sathvika';
  const groomName = 'Tejoraj';
  const weddingDate = '2026-08-30T11:07:00';
  const city = 'Ramagundam';
  const venue = 'Srinivasa S.S Gardens, Medipally';

  return (
    <Envelope brideName={brideName} groomName={groomName}>
      <Navigation />
      <main className="min-h-screen">
      <Hero
        brideName={brideName}
        groomName={groomName}
        weddingDate={weddingDate}
        city={city}
        venue={venue}
      />

      <WelcomeMessage />

      {/* Countdown Section */}
      <section className="py-24 px-4 bg-cream-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-sage-800 mb-6">
            Until the wedding day
          </h2>
          <div className="w-20 h-px bg-sage-300 mx-auto" />
        </div>
        <Countdown targetDate={weddingDate} />
      </section>

      <WeddingDay />
      <EventDetails />
      <RsvpForm />

      {/* Footer */}
      <footer className="bg-sage-800 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-cream-200 text-lg mb-4 font-serif">
            We await you at our wedding!
          </p>
          <p className="text-cream-50 font-display text-4xl md:text-5xl mb-8">
            {groomName} & {brideName}
          </p>
          <div className="w-16 h-px bg-sage-500 mx-auto mb-6" />
          <p className="text-sage-400 text-sm font-sans">
            Made with love - 2026
          </p>
        </div>
      </footer>
    </main>
    </Envelope>
  );
}
