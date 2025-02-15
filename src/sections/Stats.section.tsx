import { Button } from '@/components/ui/button'
import { ChevronRight, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'

export const StatsSection = () => {
  return (
    <section className="relative py-24 bg-[#001a43] md:px-20 mx-auto w-full p-6 sm:px-10 xl:px-30 relative my-auto">
    {/* Distinctive Yellow Divider */}
    <div className="absolute top-0 left-0 right-0 h-4 bg-yellow-400 shadow-lg">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-400 rotate-45 translate-y-1/2 shadow-lg"></div>
    </div>

    <div className="container pt-16">
      {/* Info Cards */}
      <div className="grid gap-6 md:grid-cols-3 mb-16">
        {/* Cotizaciones Card */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
          <div className="flex flex-col items-center text-center">
            <Phone className="h-8 w-8 text-yellow-400 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-white">Cotizaciones</h3>
            <a href="tel:+51997551674" className="text-gray-300 hover:text-yellow-400 transition-colors">
              +51 997 551 674
            </a>
            <p className="mt-2 text-sm text-gray-400">Te atenderemos inmediatamente</p>
          </div>
        </div>

        {/* Dirección Card */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
          <div className="flex flex-col items-center text-center">
            <MapPin className="h-8 w-8 text-yellow-400 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-white">Nuestra dirección</h3>
            <p className="text-sm text-gray-300 mb-4">
              Av. Las Torres Sub Lt 7-C S/N Zona Norte de la Baja de Lima, Lurigancho - Huachipa
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#001a43]"
            >
              Ver mapa
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Correos Card */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
          <div className="flex flex-col items-center text-center">
            <Mail className="h-8 w-8 text-yellow-400 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-white">Correos</h3>
            <a
              href="mailto:doris.s@tgruasanchez.com"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              doris.s@tgruasanchez.com
            </a>
            <a
              href="mailto:administracion@tgruasanchez.com"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              administracion@tgruasanchez.com
            </a>
          </div>
        </div>
      </div>

      {/* Stats Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Atención a Nivel Nacional</h2>
        <div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full" />
      </div>

      {/* Stats and Images */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="relative group">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6mP6RyQfo73OJuehvuntjiJ7wT6Cpn.png"
              alt="Professional truck services"
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#001a43] to-transparent flex items-end p-8">
            <div className="text-white">
              <span className="text-5xl font-bold text-yellow-400">+40</span>
              <h3 className="text-2xl font-semibold mt-2">profesionales</h3>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6mP6RyQfo73OJuehvuntjiJ7wT6Cpn.png"
              alt="Client services"
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#001a43] to-transparent flex items-end p-8">
            <div className="text-white">
              <span className="text-5xl font-bold text-yellow-400">+400</span>
              <h3 className="text-2xl font-semibold mt-2">Clientes</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Image Gallery */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-6">Nuestros Servicios en Acción</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6mP6RyQfo73OJuehvuntjiJ7wT6Cpn.png"
              alt={`Service image ${index}`}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001a43] via-[#001a43]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
              <Button variant="link" className="text-yellow-400 p-0 h-auto font-semibold">
                Ver más <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
