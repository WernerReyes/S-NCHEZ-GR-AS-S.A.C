import {
  Building2,
  CheckCircle,
  Clock,
  HardHat,
  PhoneCall,
  Truck,
} from "lucide-react";
import { SiteHeader } from "./components/site-header";
import { QuoteForm } from "./components/quote-form";
import { Button } from "./components/ui/button";
import { HeroSection, StatsSection } from "./sections";

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <HeroSection />
        <div className="absolute  left-0 right-0 h-4 bg-yellow-400 shadow-lg">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-400 rotate-45 translate-y-1/2 shadow-lg"></div>
        </div>

        {/* <StatsSection /> */}

        {/* Services Section */}
        <section className="bg-gray-100 py-24">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              Nuestros Servicios
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Truck, title: "Transporte de Carga" },
                { icon: Building2, title: "Alquiler de Grúas" },
                { icon: HardHat, title: "Proyectos Industriales" },
                { icon: Clock, title: "Servicios 24/7" },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-yellow-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative z-10 text-center transition-all group-hover:text-white">
                    <service.icon className="mx-auto mb-4 h-12 w-12 text-secondary transition-colors group-hover:text-white" />
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 transition-colors group-hover:text-white/90">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#001a43] py-16">
          <div className="container">
            <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-white/5 p-8 backdrop-blur-sm md:flex-row">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-white">
                  ¿Necesitas ayuda con tu proyecto?
                </h2>
                <p className="text-gray-300">
                  Nuestro equipo está listo para asistirte 24/7
                </p>
              </div>
              <div className="flex items-center gap-4">
                <PhoneCall className="h-8 w-8 text-secondary" />
                <div>
                  <p className="text-sm text-gray-300">Llámanos al</p>
                  <a
                    href="tel:922928739"
                    className="text-2xl font-bold text-white hover:text-secondary"
                  >
                    922 928 739
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
