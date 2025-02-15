import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight } from "lucide-react"

export function QuoteForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2 bg-white text-primary hover:text-white hover:bg-primary">
          Solicitar Cotización
          <ArrowRight className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#001a43] border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Solicitar Cotización</DialogTitle>
        </DialogHeader>
        <form className="space-y-4 mt-4">
          <Input placeholder="Nombre" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
          <Input placeholder="Empresa" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
          <Input
            type="email"
            placeholder="Correo electrónico"
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
          <Textarea
            placeholder="Describe tu proyecto"
            className="min-h-[100px] bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
          <Button type="submit" className="w-full gap-2 bg-yellow-400 text-gray-900 hover:bg-yellow-500">
            Enviar Solicitud
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

