import {
  Handshake,
  Leaf,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  Repeat,
  ShieldCheck,
  Users,
  UsersRound,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { Textarea } from "./components/textarea";

export const App2 = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolledFromTop, setScrolledFromTop] = useState(false);

  const images = [
    {
      src: "https://www.tgruasanchez.com/images/gallery/1.jpg",
      description: "Construcción",
    },
    {
      src: "https://www.tgruasanchez.com/images/gallery/2.jpg",
      description: "Energía",
    },
    {
      src: "https://www.tgruasanchez.com/images/gallery/3.jpg",
      description: "Minería",
    },
    {
      src: "https://www.tgruasanchez.com/images/gallery/4.jpg",
      description: "Gaseoducto",
    },
    // "https://www.tgruasanchez.com/images/gallery/9.jpg",
    // "https://www.tgruasanchez.com/images/gallery/10.jpg",
    // "https://www.tgruasanchez.com/images/gallery/9.jpg",
    // "https://www.tgruasanchez.com/images/gallery/9.jpg",
    // "https://www.tgruasanchez.com/images/gallery/9.jpg",
    // "https://www.tgruasanchez.com/images/gallery/9.jpg",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolledFromTop(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header
        className={`top-0 left-0 z-50 w-full ${
          scrolledFromTop
            ? "fixed z-50 dark:bg-dark bg-opacity-80 shadow-sm backdrop-blur-sm bg-primary"
            : "absolute"
        }`}
      >
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between -mx-4">
            <div className="max-w-full px-4 w-60">
              <a href="javascript:void(0)" className="block w-full py-5">
                <img
                  src="https://www.tgruasanchez.com/images/logo.png"
                  alt="logo"
                  className="w-full dark:hidden"
                />
                <img
                  src="src/assets/images/logo/logo-white.svg"
                  alt="logo"
                  className="hidden w-full dark:block"
                />
              </a>
            </div>
            <div className="flex items-center justify-between w-full px-4">
              <div>
                <button
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${
                    navbarOpen ? "navbarTogglerActive" : ""
                  }`}
                  id="navbarToggler"
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                </button>
                <nav
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow transition-all lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none dark:bg-dark-2 lg:dark:bg-transparent ${
                    !navbarOpen ? "hidden" : ""
                  }`}
                  id="navbarCollapse"
                >
                  <ul className="block lg:flex">
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="flex py-2 text-base font-medium text-dark text-white hover:text-secondary lg:ml-12 lg:inline-flex"
                      >
                        Inicio
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="flex py-2 text-base font-medium text-dark text-white hover:text-secondary lg:ml-12 lg:inline-flex"
                      >
                        Empresa
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="flex py-2 text-base font-medium text-dark text-white hover:text-secondary lg:ml-12 lg:inline-flex"
                      >
                        Proyectos
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="flex py-2 text-base font-medium text-dark text-white hover:text-secondary lg:ml-12 lg:inline-flex"
                      >
                        Alquiler
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="flex py-2 text-base font-medium text-dark text-white hover:text-secondary lg:ml-12 lg:inline-flex"
                      >
                        Contacto
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="justify-end hidden pr-16 sm:flex lg:pr-0">
                <Button
                  size="lg"
                  variant="outline"
                  className="hidden border-0 bg-white text-[#001a43] hover:bg-white/90 md:flex"
                >
                  <PhoneCall className="mr-2 h-4 w-4" />
                  922 928 739
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://www.tgruasanchez.com/imagenDeFormulario.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary/30" />
        </div>

        {/* Content */}
        <div className="relative pt-10">
          <div className="container pt-20 pb-32">
            <div className="grid md:grid-cols-3 gap-12 items-center justify-between">
              {/* Left Column - Text */}
              <div className="space-y-8 w-full col-span-2">
                <div className="inline-block">
                  <span className="text-secondary font-bold text-lg border-l-4 border-tertiary pl-2">
                    Contamos con muchos años de experiencias en el mercado
                    nacional.
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Transportes{" "}
                  <span className="z-10 block -rotate-1 bg-white text-primary transform px-2">
                    SÁNCHEZ GRÚAS S.A.C
                  </span>
                </h1>
              </div>

              {/* Right Column - Form with Animated Arrow */}
              <div className="relative w-full max-w-md ml-auto p-4">
                {/* Flecha animada apuntando al formulario */}
                <CurvedArrow />
                <form className="bg-white shadow-lg rounded px-6 py-4 space-y-4">
                  <Input placeholder="Nombre" className="w-full" />
                  <Input placeholder="Apellidos" className="w-full" />
                  <Input placeholder="Empresa" className="w-full" />
                  <Input type="tel" placeholder="Celular" className="w-full" />
                  <Input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="w-full"
                  />
                  <Input
                    type="date"
                    placeholder="Fecha de Alquiler"
                    className="w-full"
                  />
                  <Textarea
                    placeholder="Mensaje"
                    className="w-full min-h-[80px]"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Cotizar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className=" dark:bg-dark flex flex-col min-h-screen">
        <div className="container mt-20  mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="block mb-2 text-lg font-semibold text-tertiary">
                  Información de Contacto
                </span>
                <h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                  ¿Necesitas ayuda con tu proyecto?
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Nuestro equipo de expertos está listo para ayudarte con tus
                  necesidades de transporte y elevación.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4 sm:w-4/5 md:w-1/2 lg:w-1/3">
              <div className="group relative mb-8 rounded-xl border border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 p-10 text-center md:px-8 lg:py-9 lg:px-6 xl:py-[45px] xl:px-[43px] hover:shadow-lg transition-shadow">
                <div className="relative z-10 inline-flex items-center mx-auto mb-10 h-11">
                  <span className="bg-tertiary absolute -right-3 top-0 z-[-1] h-[34px] w-[34px] rounded-full opacity-10" />
                  <MapPin className="text-tertiary" size={48} />
                </div>
                <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-bold">
                  Address
                </h4>
                <p className="text-body-color dark:text-dark-6">
                  Av. Las Torres Sub Lt 7-C S/N Zona Norte de la Baja de Lima,
                  Lurigancho - Huachipa
                </p>
                <span className="bg-primary absolute -bottom-2 left-0 right-0 z-[-1] mx-auto h-12 w-3/4 opacity-0 blur-[12px] transition group-hover:opacity-[14%]" />
              </div>
            </div>
            <div className="w-full px-4 sm:w-4/5 md:w-1/2 lg:w-1/3">
              <div className="group relative mb-8 rounded-xl border border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 p-10 text-center md:px-8 lg:py-9 lg:px-6 xl:py-[45px] xl:px-[43px] hover:shadow-lg transition-shadow">
                <div className="relative z-10 inline-flex items-center mx-auto mb-10 h-11">
                  <span className="bg-tertiary absolute -right-3 top-0 z-[-1] h-[34px] w-[34px] rounded-full opacity-10" />
                  <Mail className="text-tertiary" size={48} />
                </div>
                <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-bold">
                  Email
                </h4>
                <p className="text-body-color dark:text-dark-6">
                  doris.s@tgruasanchez.com
                  <br />
                  administracion@tgruasanchez.com
                </p>
                <span className="bg-primary absolute -bottom-2 left-0 right-0 z-[-1] mx-auto h-12 w-3/4 opacity-0 blur-[12px] transition group-hover:opacity-[14%]" />
              </div>
            </div>
            <div className="w-full px-4 sm:w-4/5 md:w-1/2 lg:w-1/3">
              <div className="group relative mb-8 rounded-xl border border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 p-10 text-center md:px-8 lg:py-9 lg:px-6 xl:py-[45px] xl:px-[43px] hover:shadow-lg transition-shadow">
                <div className="relative z-10 inline-flex items-center mx-auto mb-10 h-11">
                  <span className="bg-tertiary absolute -right-3 top-0 z-[-1] h-[34px] w-[34px] rounded-full opacity-10" />
                  <Phone className="text-tertiary" size={48} />
                </div>
                <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-bold">
                  Phone
                </h4>
                <p className="text-body-color dark:text-dark-6">
                  +51 907 551 674
                </p>
                <span className="bg-tertiary absolute -bottom-2 left-0 right-0 z-[-1] mx-auto h-12 w-3/4 opacity-0 blur-[12px] transition group-hover:opacity-[14%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative w-full bg-primary py-20">
          <div className="container text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Atención a Nivel Nacional
            </h2>
            <p className="max-w-2xl mx-auto text-lg mb-16 text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold">2500+</div>
                <div className="text-xl text-white/80">Clients</div>
              </div>

              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold">150+</div>
                <div className="text-xl text-white/80">Employees</div>
              </div>
            </div>
          </div>
          <span className="absolute bottom-0 right-0 rotate-180 transform translate-y-1/2">
            <svg
              width="644"
              height="489"
              viewBox="0 0 644 489"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="196"
                cy="41"
                r="448"
                fill="white"
                fillOpacity="0.04"
              ></circle>
            </svg>
          </span>
          <span className="absolute top-0">
            <svg
              width="659"
              height="562"
              viewBox="0 0 659 562"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="211"
                cy="114"
                r="448"
                fill="white"
                fillOpacity="0.04"
              ></circle>
            </svg>
          </span>
          <span className="absolute  right-0 top-0">
            <svg
              width="50"
              height="79"
              viewBox="0 0 50 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="47.7119"
                cy="76.9617"
                r="1.74121"
                transform="rotate(180 47.7119 76.9617)"
                fill="white"
              ></circle>
              <circle
                cx="47.7119"
                cy="61.6385"
                r="1.74121"
                transform="rotate(180 47.7119 61.6385)"
                fill="white"
              ></circle>
              <circle
                cx="47.7119"
                cy="46.3163"
                r="1.74121"
                transform="rotate(180 47.7119 46.3163)"
                fill="white"
              ></circle>
              <circle
                cx="47.7119"
                cy="16.7159"
                r="1.74121"
                transform="rotate(180 47.7119 16.7159)"
                fill="white"
              ></circle>
              <circle
                cx="47.7119"
                cy="31.3421"
                r="1.74121"
                transform="rotate(180 47.7119 31.3421)"
                fill="white"
              ></circle>
              <circle
                cx="47.7119"
                cy="1.74122"
                r="1.74121"
                transform="rotate(180 47.7119 1.74122)"
                fill="white"
              ></circle>
              <circle
                cx="32.3916"
                cy="76.9617"
                r="1.74121"
                transform="rotate(180 32.3916 76.9617)"
                fill="white"
              ></circle>
              <circle
                cx="32.3877"
                cy="61.6384"
                r="1.74121"
                transform="rotate(180 32.3877 61.6384)"
                fill="white"
              ></circle>
              <circle
                cx="32.3916"
                cy="46.3162"
                r="1.74121"
                transform="rotate(180 32.3916 46.3162)"
                fill="white"
              ></circle>
              <circle
                cx="32.3916"
                cy="16.7161"
                r="1.74121"
                transform="rotate(180 32.3916 16.7161)"
                fill="white"
              ></circle>
              <circle
                cx="32.3877"
                cy="31.342"
                r="1.74121"
                transform="rotate(180 32.3877 31.342)"
                fill="white"
              ></circle>
              <circle
                cx="32.3916"
                cy="1.74145"
                r="1.74121"
                transform="rotate(180 32.3916 1.74145)"
                fill="white"
              ></circle>
              <circle
                cx="17.0674"
                cy="76.9617"
                r="1.74121"
                transform="rotate(180 17.0674 76.9617)"
                fill="white"
              ></circle>
              <circle
                cx="17.0674"
                cy="61.6384"
                r="1.74121"
                transform="rotate(180 17.0674 61.6384)"
                fill="white"
              ></circle>
              <circle
                cx="17.0674"
                cy="46.3162"
                r="1.74121"
                transform="rotate(180 17.0674 46.3162)"
                fill="white"
              ></circle>
              <circle
                cx="17.0674"
                cy="16.7161"
                r="1.74121"
                transform="rotate(180 17.0674 16.7161)"
                fill="white"
              ></circle>
              <circle
                cx="17.0674"
                cy="31.342"
                r="1.74121"
                transform="rotate(180 17.0674 31.342)"
                fill="white"
              ></circle>
              <circle
                cx="17.0674"
                cy="1.74145"
                r="1.74121"
                transform="rotate(180 17.0674 1.74145)"
                fill="white"
              ></circle>
              <circle
                cx="1.74316"
                cy="76.9617"
                r="1.74121"
                transform="rotate(180 1.74316 76.9617)"
                fill="white"
              ></circle>
              <circle
                cx="1.74316"
                cy="61.6384"
                r="1.74121"
                transform="rotate(180 1.74316 61.6384)"
                fill="white"
              ></circle>
              <circle
                cx="1.74316"
                cy="46.3162"
                r="1.74121"
                transform="rotate(180 1.74316 46.3162)"
                fill="white"
              ></circle>
              <circle
                cx="1.74316"
                cy="16.7161"
                r="1.74121"
                transform="rotate(180 1.74316 16.7161)"
                fill="white"
              ></circle>
              <circle
                cx="1.74316"
                cy="31.342"
                r="1.74121"
                transform="rotate(180 1.74316 31.342)"
                fill="white"
              ></circle>
              <circle
                cx="1.74316"
                cy="1.74145"
                r="1.74121"
                transform="rotate(180 1.74316 1.74145)"
                fill="white"
              ></circle>
            </svg>
          </span>
        </div>
      </section>

      {/* Our company section */}
      <section className="overflow-hidden bg-tg-bg dark:bg-dark-2 pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="block mb-2 text-lg font-semibold text-tertiary">
                  Nuestra Empresa
                </span>
                <h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                  Conoce más sobre nosotros
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Brindamos nuestros servicios a diversos sectores como:
                  Construcción, energía, minería, gaseoducto, entre otros.
                  Nuestros equipo de personal calificado y comprometido a
                  realizar un servicio eficiente y seguro. Nuestra experiencia y
                  reconocida trayectoria es respalda por importantes empresas
                  locales y nacionales como son:
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 mx-auto">
            <div className="relative slider max-w-6xl w-full mx-auto overflow-hidden">
              <div className="relative slide-track gap-x-10 flex items-center mb-10">
                {/* Duplicar las imágenes para el efecto infinito */}
                {images.map((image, index) => (
                  <div key={index} className="slide px-10">
                    <div className="bg-white rounded-lg w-48 shadow-lg overflow-hidden">
                      <img
                        src={image.src}
                        alt=""
                        className="w-48 h-48 object-cover"
                      />
                      <div className="p-4">
                        <p className="text-center text-gray-700 font-medium">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {images.map((image, index) => (
                  <div key={index + images.length} className="slide px-10">
                    <div className="bg-white rounded-lg w-48 shadow-lg overflow-hidden">
                      <img
                        src={image.src}
                        alt=""
                        className="w-48 h-48 object-cover"
                      />
                      <div className="p-4">
                        <p className="text-center text-gray-700 font-medium">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {images.map((image, index) => (
                  <div
                    key={index + images.length + images.length}
                    className="slide px-10"
                  >
                    <div className="bg-white rounded-lg w-48 shadow-lg overflow-hidden">
                      <img
                        src={image.src}
                        alt=""
                        className="w-48 h-48 object-cover"
                      />
                      <div className="p-4">
                        <p className="text-center text-gray-700 font-medium">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <VideoSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Testimonials Section */}
    </div>
  );
};

import { motion } from "framer-motion";
import { Link } from "react-scroll";

const CurvedArrow = () => {
  return (
    <motion.div>
      <svg
        width="279"
        height="200"
        viewBox="0 0 479 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -left-80 translate-y-1/3 rotate-180"
      >
        <motion.path
          d="M476 3C429.825 70.5617 304.326 191.759 157.296 151.748C56.9109 124.432 133.639 64.2411 241.388 96.499C349.136 128.757 244.498 285.151 6 274M6 274L38.0167 253.779M6 274L55.4719 297.055"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="2000"
          strokeDashoffset="2000"
          initial={{ strokeDashoffset: 2000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            repeat: Infinity,
            repeatDelay: 2,
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.div>
  );
};

const VideoSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const handleVideoOpen = () => {
    setVideoOpen(true);
  };

  const handleVideoClose = () => {
    setVideoOpen(false);
  };

  return (
    <section className="relative z-10 overflow-hidden bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[550px] pt-[80px] pb-12">
              <span className="block mb-3 text-base font-semibold text-white uppercase tracking-widest">
                Mira nuestro video
              </span>
              <h2 className="mb-8 text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight md:text-[50px] md:leading-tight">
                Acerca de Nosotros
              </h2>
              <p className="leading-relaxed text-white mb-8">
                Transportes Sánchez Grúas S.A.C es una compañía de servicios de
                grúas que ofrece soluciones de grúas para la industria de
                construcción y otros motores del Perú.
              </p>
              <p className="leading-relaxed text-white mb-8">
                Nuestro staff está constituido por profesionales altamente
                experimentados en ofrecer los mejores servicios relacionados con
                las maniobras de camiones tipo grúa.
              </p>
              <p className="leading-relaxed text-white mb-12">
                Nuestra flota de camiones - grúas hidráulicas HIAB se mantiene
                siempre bajo estricto control para ofrecer alta confiabilidad y
                así, poder proporcionar oportunamente equipos y servicios.
              </p>

              <div className="flex max-md:flex-row flex-col gap-4">
                {/* Tarjeta de Visión */}
                <div className="w-full px-4">
                  <div
                    className="dark:shadow-none relative mb-10 overflow-hidden rounded-[10px] bg-primary border shadow-sm shadow-white dark:bg-dark-2 p-8 sm:p-10 md:py-10 md:px-6 lg:p-10 
        transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-opacity-90"
                  >
                    <div className="flex items-center">
                      <div className="w-full">
                        <h5 className="mb-1 text-lg font-semibold text-secondary dark:text-white">
                          Visión
                        </h5>
                      </div>
                    </div>
                    <p className="text-base text-slate-50 dark:text-dark-6">
                      “Ser los socios confiables de nuestros clientes B2B cuando
                      se trata de soluciones altamente productivas de maniobras
                      con grúas.”
                    </p>
                    <div>
                      <span className="absolute top-0 right-0 opacity-70 transition-all duration-300 hover:scale-110">
                        <svg
                          width={104}
                          height={102}
                          viewBox="0 0 104 102"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.6"
                            d="M28.707 23.8032C31.0493 22.4301 33.9507 22.4301 36.293 23.8032L56.4389 35.6133C58.7351 36.9594 60.1458 39.4218 60.1458 42.0835V65.9165C60.1458 68.5782 58.7351 71.0406 56.4388 72.3867L36.293 84.1968C33.9507 85.5699 31.0493 85.5699 28.707 84.1968L8.56115 72.3867C6.26492 71.0406 4.85417 68.5782 4.85417 65.9165V42.0835C4.85417 39.4218 6.26492 36.9594 8.56115 35.6133L28.707 23.8032Z"
                            stroke="#3758F9"
                          />
                          <path
                            opacity="0.6"
                            d="M105.25 12.7424C107.571 11.4027 110.429 11.4027 112.75 12.7424L144.587 31.1236C146.908 32.4634 148.337 34.9393 148.337 37.6188V74.3812C148.337 77.0607 146.908 79.5366 144.587 80.8764L112.75 99.2576C110.429 100.597 107.571 100.597 105.25 99.2576L73.4128 80.8764C71.0923 79.5366 69.6628 77.0607 69.6628 74.3812V37.6188C69.6628 34.9393 71.0923 32.4634 73.4128 31.1236L105.25 12.7424Z"
                            stroke="#13C296"
                          />
                          <path
                            opacity="0.6"
                            d="M59.25 -23.2576C61.5705 -24.5973 64.4295 -24.5973 66.75 -23.2576L82.1327 -14.3764C84.4532 -13.0366 85.8827 -10.5607 85.8827 -7.8812V9.8812C85.8827 12.5607 84.4532 15.0366 82.1327 16.3764L66.75 25.2576C64.4295 26.5973 61.5705 26.5973 59.25 25.2576L43.8673 16.3764C41.5468 15.0366 40.1173 12.5607 40.1173 9.8812V-7.8812C40.1173 -10.5607 41.5468 -13.0366 43.8673 -14.3764L59.25 -23.2576Z"
                            stroke="#F98B69"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tarjeta de Misión */}
                <div className="w-full px-4">
                  <div className="dark:shadow-none relative mb-10 overflow-hidden rounded-[10px] bg-primary border shadow-sm shadow-white dark:bg-dark-2 p-8 sm:p-10 md:py-10 md:px-6 lg:p-10  transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-opacity-90">
                    <div className="flex items-center">
                      <div className="w-full">
                        <h5 className="mb-1 text-lg font-semibold text-secondary dark:text-white">
                          Misión
                        </h5>
                      </div>
                    </div>
                    <p className="text-base text-slate-50 dark:text-dark-6">
                      “ Servimos a nuestros clientes con equipos y servicios de
                      alto valor. Ofrecemos costos operativos competitivos.
                      Somos un equipo enfocado en el cliente que crea lazos
                      duraderos. Valoramos el bienestar de nuestros
                      colaboradores y empoderamos a nuestra gente a tomar
                      decisiones correctas.”
                    </p>
                    <div>
                      <span className="absolute top-0 right-0">
                        <svg
                          width={104}
                          height={102}
                          viewBox="0 0 104 102"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.6"
                            d="M28.707 23.8032C31.0493 22.4301 33.9507 22.4301 36.293 23.8032L56.4389 35.6133C58.7351 36.9594 60.1458 39.4218 60.1458 42.0835V65.9165C60.1458 68.5782 58.7351 71.0406 56.4388 72.3867L36.293 84.1968C33.9507 85.5699 31.0493 85.5699 28.707 84.1968L8.56115 72.3867C6.26492 71.0406 4.85417 68.5782 4.85417 65.9165V42.0835C4.85417 39.4218 6.26492 36.9594 8.56115 35.6133L28.707 23.8032Z"
                            stroke="#3758F9"
                          />
                          <path
                            opacity="0.6"
                            d="M105.25 12.7424C107.571 11.4027 110.429 11.4027 112.75 12.7424L144.587 31.1236C146.908 32.4634 148.337 34.9393 148.337 37.6188V74.3812C148.337 77.0607 146.908 79.5366 144.587 80.8764L112.75 99.2576C110.429 100.597 107.571 100.597 105.25 99.2576L73.4128 80.8764C71.0923 79.5366 69.6628 77.0607 69.6628 74.3812V37.6188C69.6628 34.9393 71.0923 32.4634 73.4128 31.1236L105.25 12.7424Z"
                            stroke="#13C296"
                          />
                          <path
                            opacity="0.6"
                            d="M59.25 -23.2576C61.5705 -24.5973 64.4295 -24.5973 66.75 -23.2576L82.1327 -14.3764C84.4532 -13.0366 85.8827 -10.5607 85.8827 -7.8812V9.8812C85.8827 12.5607 84.4532 15.0366 82.1327 16.3764L66.75 25.2576C64.4295 26.5973 61.5705 26.5973 59.25 25.2576L43.8673 16.3764C41.5468 15.0366 40.1173 12.5607 40.1173 9.8812V-7.8812C40.1173 -10.5607 41.5468 -13.0366 43.8673 -14.3764L59.25 -23.2576Z"
                            stroke="#F98B69"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="top-0 right-0 z-10 w-full h-full lg:absolute lg:w-1/2">
          <div className="flex items-center justify-center w-full h-full">
            <img
              src="https://www.tgruasanchez.com/images/background/promo-video.jpg"
              alt="image"
              className="top-0 left-0 z-[-1] h-full w-full object-cover object-center lg:absolute"
            />
            <button
              onClick={handleVideoOpen}
              className="absolute z-40 flex h-20 w-20 items-center justify-center rounded-full bg-primary md:h-[100px] md:w-[100px]"
            >
              <span className="absolute top-0 right-0 z-[-1] h-full w-full animate-ping rounded-full bg-primary bg-opacity-20 delay-300 duration-1000"></span>
              <svg
                width="23"
                height="27"
                viewBox="0 0 23 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 12.634C23.1667 13.0189 23.1667 13.9811 22.5 14.366L2.25 26.0574C1.58333 26.4423 0.750001 25.9611 0.750001 25.1913L0.750002 1.80866C0.750002 1.03886 1.58334 0.557731 2.25 0.942631L22.5 12.634Z"
                  fill="white"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <span className="absolute left-0 top-0 z-[-1]">
          <svg
            width="644"
            height="489"
            viewBox="0 0 644 489"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="196"
              cy="41"
              r="448"
              fill="white"
              fillOpacity="0.04"
            ></circle>
          </svg>
        </span>
        <span className="absolute left-0 top-0 z-[-1]">
          <svg
            width="659"
            height="562"
            viewBox="0 0 659 562"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="211"
              cy="114"
              r="448"
              fill="white"
              fillOpacity="0.04"
            ></circle>
          </svg>
        </span>
        <span className="absolute right-3 top-3 z-[-1] lg:right-1/2 lg:mr-3">
          <svg
            width="50"
            height="79"
            viewBox="0 0 50 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="47.7119"
              cy="76.9617"
              r="1.74121"
              transform="rotate(180 47.7119 76.9617)"
              fill="white"
            ></circle>
            <circle
              cx="47.7119"
              cy="61.6385"
              r="1.74121"
              transform="rotate(180 47.7119 61.6385)"
              fill="white"
            ></circle>
            <circle
              cx="47.7119"
              cy="46.3163"
              r="1.74121"
              transform="rotate(180 47.7119 46.3163)"
              fill="white"
            ></circle>
            <circle
              cx="47.7119"
              cy="16.7159"
              r="1.74121"
              transform="rotate(180 47.7119 16.7159)"
              fill="white"
            ></circle>
            <circle
              cx="47.7119"
              cy="31.3421"
              r="1.74121"
              transform="rotate(180 47.7119 31.3421)"
              fill="white"
            ></circle>
            <circle
              cx="47.7119"
              cy="1.74122"
              r="1.74121"
              transform="rotate(180 47.7119 1.74122)"
              fill="white"
            ></circle>
            <circle
              cx="32.3916"
              cy="76.9617"
              r="1.74121"
              transform="rotate(180 32.3916 76.9617)"
              fill="white"
            ></circle>
            <circle
              cx="32.3877"
              cy="61.6384"
              r="1.74121"
              transform="rotate(180 32.3877 61.6384)"
              fill="white"
            ></circle>
            <circle
              cx="32.3916"
              cy="46.3162"
              r="1.74121"
              transform="rotate(180 32.3916 46.3162)"
              fill="white"
            ></circle>
            <circle
              cx="32.3916"
              cy="16.7161"
              r="1.74121"
              transform="rotate(180 32.3916 16.7161)"
              fill="white"
            ></circle>
            <circle
              cx="32.3877"
              cy="31.342"
              r="1.74121"
              transform="rotate(180 32.3877 31.342)"
              fill="white"
            ></circle>
            <circle
              cx="32.3916"
              cy="1.74145"
              r="1.74121"
              transform="rotate(180 32.3916 1.74145)"
              fill="white"
            ></circle>
            <circle
              cx="17.0674"
              cy="76.9617"
              r="1.74121"
              transform="rotate(180 17.0674 76.9617)"
              fill="white"
            ></circle>
            <circle
              cx="17.0674"
              cy="61.6384"
              r="1.74121"
              transform="rotate(180 17.0674 61.6384)"
              fill="white"
            ></circle>
            <circle
              cx="17.0674"
              cy="46.3162"
              r="1.74121"
              transform="rotate(180 17.0674 46.3162)"
              fill="white"
            ></circle>
            <circle
              cx="17.0674"
              cy="16.7161"
              r="1.74121"
              transform="rotate(180 17.0674 16.7161)"
              fill="white"
            ></circle>
            <circle
              cx="17.0674"
              cy="31.342"
              r="1.74121"
              transform="rotate(180 17.0674 31.342)"
              fill="white"
            ></circle>
            <circle
              cx="17.0674"
              cy="1.74145"
              r="1.74121"
              transform="rotate(180 17.0674 1.74145)"
              fill="white"
            ></circle>
            <circle
              cx="1.74316"
              cy="76.9617"
              r="1.74121"
              transform="rotate(180 1.74316 76.9617)"
              fill="white"
            ></circle>
            <circle
              cx="1.74316"
              cy="61.6384"
              r="1.74121"
              transform="rotate(180 1.74316 61.6384)"
              fill="white"
            ></circle>
            <circle
              cx="1.74316"
              cy="46.3162"
              r="1.74121"
              transform="rotate(180 1.74316 46.3162)"
              fill="white"
            ></circle>
            <circle
              cx="1.74316"
              cy="16.7161"
              r="1.74121"
              transform="rotate(180 1.74316 16.7161)"
              fill="white"
            ></circle>
            <circle
              cx="1.74316"
              cy="31.342"
              r="1.74121"
              transform="rotate(180 1.74316 31.342)"
              fill="white"
            ></circle>
            <circle
              cx="1.74316"
              cy="1.74145"
              r="1.74121"
              transform="rotate(180 1.74316 1.74145)"
              fill="white"
            ></circle>
          </svg>
        </span>
      </div>

      {videoOpen && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-70">
          <div className="mx-auto w-full max-w-[550px] bg-white">
            <iframe
              className="h-[320px] w-full"
              src="https://www.youtube.com/embed/9a6WyPw6ohw?autoplay=1&mute=1&si=GxKCWn_aWdLzs9M5"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <button
            onClick={handleVideoClose}
            className="absolute top-0 right-0 flex items-center justify-center w-20 h-20 cursor-pointer text-body-color hover:bg-black"
          >
            <svg viewBox="0 0 16 15" className="w-8 h-8 fill-current">
              <path d="M3.37258 1.27L8.23258 6.13L13.0726 1.29C13.1574 1.19972 13.2596 1.12749 13.373 1.07766C13.4864 1.02783 13.6087 1.00141 13.7326 1C13.9978 1 14.2522 1.10536 14.4397 1.29289C14.6272 1.48043 14.7326 1.73478 14.7326 2C14.7349 2.1226 14.7122 2.24439 14.6657 2.35788C14.6193 2.47138 14.5502 2.57419 14.4626 2.66L9.57258 7.5L14.4626 12.39C14.6274 12.5512 14.724 12.7696 14.7326 13C14.7326 13.2652 14.6272 13.5196 14.4397 13.7071C14.2522 13.8946 13.9978 14 13.7326 14C13.6051 14.0053 13.478 13.984 13.3592 13.9375C13.2404 13.8911 13.1326 13.8204 13.0426 13.73L8.23258 8.87L3.38258 13.72C3.29809 13.8073 3.19715 13.8769 3.08559 13.925C2.97402 13.9731 2.85405 13.9986 2.73258 14C2.46737 14 2.21301 13.8946 2.02548 13.7071C1.83794 13.5196 1.73258 13.2652 1.73258 13C1.73025 12.8774 1.753 12.7556 1.79943 12.6421C1.84586 12.5286 1.91499 12.4258 2.00258 12.34L6.89258 7.5L2.00258 2.61C1.83777 2.44876 1.74112 2.23041 1.73258 2C1.73258 1.73478 1.83794 1.48043 2.02548 1.29289C2.21301 1.10536 2.46737 1 2.73258 1C2.97258 1.003 3.20258 1.1 3.37258 1.27Z"></path>
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

function FeaturesSection() {
  const features = [
    {
      icon: Repeat,
      title: "Adaptabilidad",
      description:
        "Continuamente buscamos mejorar el negocio y nosotros mismos para ser los mejores.",
    },
    {
      icon: Users,
      title: "Orientado al cliente",
      description:
        "Nos enfocamos en ayudar a nuestros clientes alcanzar sus objetivos.",
    },
    {
      icon: Leaf,
      title: "Sustentabilidad",
      description:
        "Nuestras acciones social-ambientalmente responsables de hoy son pensadas en el mundo que queremos mañana",
    },
    {
      icon: ShieldCheck,
      title: "Integridad",
      description:
        "Compromiso para hacer lo correcto. ¨ Digo lo que pienso y hago lo que digo¨",
    },
    {
      icon: Handshake,
      title: "Colaboradores comprometidos",
      description:
        "Reconocemos que la colaboración entre nuestra gente es un factor clave para nuestro éxito.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block mb-3 text-base font-semibold text-tertiary tracking-widest">
            Nuestros Valores
          </span>
          <h2 className="mb-8 text-4xl font-bold leading-tight text-primary sm:text-5xl sm:leading-tight md:text-[50px] md:leading-tight">
            ¿Por qué elegirnos?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="p-3 bg-tertiary/5 rounded-full">
                  <feature.icon className="w-6 h-6 text-tertiary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectsSection = () => {
  const projects = [
    {
      title: "Construcción",
      image: "https://www.tgruasanchez.com/images/team/tren-electrico.jpg",
    },
    {
      title: "Minero",
      image: "https://www.tgruasanchez.com/images/team/mina.jpg",
    },
    {
      title: "Eléctrico",
      image: "https://www.tgruasanchez.com/images/team/postes.jpg",
    },
  ];
  return (
    <section className="overflow-hidden bg-tg-bg dark:bg-dark-2 pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="block mb-2 text-lg font-semibold text-tertiary">
                Nuestros Proyectos
              </span>
              <h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                Proyectos
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                En Transportes Sánchez Grúas S.A.C. nos especializamos en
                alquiler de camiones grúas, siendo uno de las empresas más
                reconocidas a nivel nacional. A continuación, lo invitamos a ver
                la galería de nuestros recientes proyectos.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4 ">
            <div className="relative grid p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10  flex-wrap rounded-[10px] bg-white dark:bg-dark shadow-team">
            {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl bg-white dark:bg-dark shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-t-xl group-hover:opacity-75 transition"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-lg font-semibold text-dark dark:text-white border-t-2 border-tertiary pt-4">
                  {project.title}
                </h4>
                <Link
                  to="/proyectos"
                  className="inline-block mt-4 bg-tertiary text-white font-medium py-2 px-5 rounded-md shadow-md transition-all hover:bg-transparent hover:text-tertiary hover:border hover:border-tertiary"
                >
                  Ver Proyecto
                </Link>
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
