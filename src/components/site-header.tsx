import { Button } from "@/components/ui/button";
import { Clock, Mail, Menu, PhoneCall } from "lucide-react";
import { Link } from "react-scroll";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-200",
        isScrolled ? "bg-[#001a43]" : "bg-transparent"
      )}
    >
      {/* Top Contact Bar */}
      <div className="w-full mx-auto border-b border-white/10 py-4">
        <div className="w-full mx-auto sm:max-w-[calc(100%-5rem)]">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-white/90">
            <div className="flex items-center justify-center max-md:w-full gap-2">
              <Mail className="h-4 w-4 text-yellow-400" />
              <div className="flex">
                <a
                  href="mailto:administracion@tgruasanchez.com"
                  className="hover:text-yellow-400 me"
                >
                  administracion@tgruasanchez.com
                </a>
                <span className="inline mx-2">|</span>
                <a
                  href="mailto:doris.s@tgruasanchez.com"
                  className="hover:text-yellow-400"
                >
                  doris.s@tgruasanchez.com
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center max-md:w-full  gap-2">
              <Clock className="h-4 w-4 text-yellow-400" />
              <div className="flex flex-col items-end">
                <span>Lunes a Sábado 8:00 am a 7:00 pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto sm:max-w-[calc(100%-5rem)] mt-2">
        <div className="flex h-16 items-center justify-between">
          <img
            src="https://www.tgruasanchez.com/images/logo.png"
            alt="SÁNCHEZ"
            className="h-12 ml-3 sm:ml-0"
          />

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {["Servicios", "Proyectos", "Sobre Nosotros", "Contacto"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="text-sm text-gray-300 cursor-pointer 3xl:text-lg transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="hidden border-0 bg-white text-[#001a43] hover:bg-white/90 md:flex"
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              922 928 739
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#001a43]">
                <nav className="mt-12">
                  <ul className="grid gap-4">
                    {[
                      "Servicios",
                      "Proyectos",
                      "Sobre Nosotros",
                      "Contacto",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          to={`/${item.toLowerCase()}`}
                          className="text-lg text-gray-300 transition-colors hover:text-white"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
