import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white" htmlFor="nombre">
            Nombre:
          </label>
          <Input
            id="nombre"
            placeholder="Nombre"
            className="border-[#FFD700] bg-white/20 text-white placeholder:text-gray-400"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white" htmlFor="apellido">
            Apellido:
          </label>
          <Input
            id="apellido"
            placeholder="Apellidos"
            className="border-[#FFD700] bg-white/20 text-white placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-white" htmlFor="empresa">
          Empresa:
        </label>
        <Input
          id="empresa"
          placeholder="Empresa"
          className="border-[#FFD700] bg-white/20 text-white placeholder:text-gray-400"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white" htmlFor="celular">
            Celular:
          </label>
          <Input
            id="celular"
            type="tel"
            placeholder="Celular"
            className="border-[#FFD700] bg-white/20 text-white placeholder:text-gray-400"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white" htmlFor="email">
            Correo Electrónico:
          </label>
          <Input
            id="email"
            type="email"
            placeholder="email"
            className="border-[#FFD700] bg-white/20 text-white placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-white" htmlFor="fecha">
          Fecha de Alquiler:
        </label>
        <Input id="fecha" type="date" className="border-[#FFD700] bg-white/20 text-white placeholder:text-gray-400" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-white" htmlFor="mensaje">
          Mensaje:
        </label>
        <Textarea
          id="mensaje"
          placeholder="Mensaje"
          className="min-h-[100px] border-[#FFD700] bg-white/20 text-white placeholder:text-gray-400"
        />
      </div>
      <Button className="bg-[#FFD700] text-[#000033] hover:bg-[#FFD700]/90">Cotizar</Button>
    </form>
  )
}

