import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

export function HeroForm() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">Solicitar Cotización</h3>
        <p className="text-sm text-gray-400">Complete el formulario y nos contactaremos con usted.</p>
      </div>
      <form className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input placeholder="Nombre" className="border-white/10 bg-white/5 text-white placeholder:text-gray-500" />
          <Input placeholder="Empresa" className="border-white/10 bg-white/5 text-white placeholder:text-gray-500" />
        </div>
        <Input
          type="email"
          placeholder="Correo electrónico"
          className="border-white/10 bg-white/5 text-white placeholder:text-gray-500"
        />
        <Textarea
          placeholder="Describe tu proyecto"
          className="min-h-[100px] border-white/10 bg-white/5 text-white placeholder:text-gray-500"
        />
        <Button className="w-full gap-2 bg-yellow-400 text-gray-900 hover:bg-yellow-500">
          Enviar Solicitud
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}

