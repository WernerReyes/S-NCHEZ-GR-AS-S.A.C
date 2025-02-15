import { QuoteForm } from '@/components/quote-form'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-40">
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute -bottom-1/4 right-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
    </div>

    <div className="md:px-20 mx-auto w-full p-6 sm:px-10 xl:px-30 relative my-auto">
      <div className="md:flex pb-24 md:justify-center md:items-center w-full">
        {/* Left Column - Content */}
        <div className="flex flex-col z-10 flex-1 space-y-8 m-auto">
          <div className="space-y-6">
            <div className="flex flex-row max-sm:flex-col items-center gap-4">
              <img
                src="https://www.tgruasanchez.com/imagenDeFormulario.jpeg"
                alt="Sánchez Logo"
                className="h-16 w-16 rounded-full border-2 border-secondary"
              />
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300 backdrop-blur-sm">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-secondary" />
                Líder en servicios de grúas y transporte
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
              Soluciones de{" "}
              <span className="text-secondary">Transporte</span> y
              Elevación
            </h1>
            <p className="max-w-[600px] text-gray-400 md:text-lg 3xl:text-xl">
              Ofrecemos servicios especializados de grúas y transporte
              para proyectos industriales y mineros, con un compromiso
              inquebrantable con la seguridad y la eficiencia.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Certificación ISO 9001",
              "24/7 Soporte",
              "Cobertura Nacional",
              "Equipo Moderno",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm 3xl:text-lg text-gray-300"
              >
                <CheckCircle className="h-4 w-4 text-secondary" />
                {feature}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <QuoteForm />
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/10 bg-white text-[#001a43] hover:bg-white/90 md:w-auto"
            >
              Nuestros Servicios
            </Button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="animate-float max-w-screen-sm drop-shadow-secondary hidden md:flex justify-center flex-1 xl:mt-0 w-full">
          <div className="relative ml-[20%]">
            <img
              src="https://www.tgruasanchez.com/imagenDeFormulario.jpeg"
              alt="themeptation"
              className="relative z-10 object-cover transform rotate-6 h-[25rem] xl:w-[30rem] shadow-2xl xl:h-[30rem]"
            />
            <div className="absolute -top-10 -left-24 h-[25rem] w-full xl:w-[30rem] bg-secondary xl:h-[30rem] transform -rotate-6"></div>
          </div>
        </div>
      </div>

      {/* <div className="absolute  left-0 right-0 h-4 bg-yellow-400 shadow-lg">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-400 rotate-45 translate-y-1/2 shadow-lg"></div>
      </div> */}

    </div>


    
  </section>
  )
}
