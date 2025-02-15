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
      <section className=" dark:bg-dark flex flex-col ">
        {/* <div className="container mt-20  mx-auto">
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
        </div> */}

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

      {/* Experience Section */}
      <ExperienceSection />

      {/* Rental Section */}
      <RentalSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
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

function ExperienceSection() {
  const proyects = [
    {
      name: "Proyecto 01",

      image: "https://www.tgruasanchez.com/images/gallery/proyecto-1.jpg",
    },
    {
      name: "Proyecto 02",

      image: "https://www.tgruasanchez.com/images/gallery/proyecto-2.jpg",
    },
    {
      name: "Proyecto 03",

      image: "https://www.tgruasanchez.com/images/gallery/proyecto-3.jpg",
    },
    {
      name: "Proyecto 04",

      image: "https://www.tgruasanchez.com/images/gallery/proyecto-4.jpg",
    },
    {
      name: "Proyecto 05",

      image: "https://www.tgruasanchez.com/images/gallery/proyecto-5.jpg",
    },
    {
      name: "Proyecto 06",

      image: "https://www.tgruasanchez.com/images/gallery/proyecto-6.jpg",
    },
    {
      name: "Proyecto 07",

      image: "https://www.tgruasanchez.com/images/gallery/proyecto-7.jpg",
    },
    {
      name: "Proyecto 08",

      image: "https://www.tgruasanchez.com/images/gallery/proyecto-8.jpg",
    },
  ];
  return (
    <section className="container py-12 bg-white text-center">
      <div className="mx-auto mb-[60px] max-w-[510px] text-center">
        <span className="block mb-2 text-lg font-semibold text-tertiary">
          Nuestra experiencia
        </span>
        <h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
          Nuestra Experiencia
        </h2>
        <p className="text-base text-body-color dark:text-dark-6">
          En Transportes Sánchez Grúas S.A.C. nos especializamos en alquiler de
          camiones grúas, siendo uno de las empresas más reconocidas a nivel
          nacional. A continuación, lo invitamos a ver la galería de nuestros
          recientes proyectos.
        </p>
      </div>
      <div className="container p-8 flex h-full gap-x-10">
        {/* Sección de productos */}
        <div className="grid grid-cols-3  h-full gap-6">
          {proyects.map((member, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden group shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/50 via-transparent to-transparent">
                <div className="opacity-0 group-hover:opacity-100 bg-white rounded-lg px-4 py-3 text-center transition-opacity duration-300 shadow-md">
                  <h4 className="font-bold text-gray-900">{member.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="min-w-96">
          {/* Sección promocional */}
          {/* <div className=" bg-primary flex flex-col items-center justify-center p-6 rounded-lg h-full">
            <div>
              <h3 className="font-semibold text-lg text-secondary">Reconocimiento</h3>
              <p className="text-slate-50 mb-6">
              Reconocimiento como proveedor en el proyecto de la construcción de las redes de acero.
              </p>
            </div>
            <img
              src="https://www.tgruasanchez.com/images/gallery/diploma-gas-calidda.jpg"
              alt="Samsung Notebook 9"
              className=" object-cover rounded-lg"
            />
          </div> */}
          <ArticleCard />
        </div>
      </div>
    </section>
  );
}

function ArticleCard() {
  return (
    <motion.div
      className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
      animate={{
        y: [0, 180, 0], // Movimiento arriba y abajo
      }}
      transition={{
        duration: 8, // Duración de cada ciclo
        repeat: Infinity, // Animación infinita
        ease: "easeInOut",
      }}
    >
      {/* Imagen */}
      <img
        src="https://www.tgruasanchez.com/images/gallery/diploma-gas-calidda.jpg"
        alt="Medical Equipment"
        className="w-full h-60 object-cover"
      />

      {/* Contenido */}
      <div className="bg-primary p-6 text-white">
        <h4 className="text-lg font-bold text-secondary mb-2">
          Reconocimiento
        </h4>
        <p className="text-sm mb-4">
          Reconocimiento como proveedor en el proyecto de la construcción de las
          redes de acero.
        </p>
      </div>
    </motion.div>
  );
}

function RentalSection() {
  const [selected, setSelected] = useState(1);

  const features = [
    {
      id: 1,
      title: "Alquiler de Camión Grúa",
      content: (
        <>
          Nuestra empresa cuenta con Grúas articuladas. Nuestros equipos cuentan
          con Rigger capacitado para realizar maniobras especiales, seguros,
          certificaciones y mantenimiento preventivo con especialistas en
          hidráulica, mecánica y electrónica, quienes contribuyen con la
          operatividad de nuestros equipos.
          <br />
          <br />
          <strong>Capacidad:</strong> Grúa Hiab de 06 a 12 toneladas. Camiones
          de doble eje y simples de marcas{" "}
          <strong>Hino, Mercedes Benz e International</strong>.
        </>
      ),
      image: "https://www.tgruasanchez.com/images/services/alquiler-gruas.jpg",
    },
    {
      id: 2,
      title: "Otro servicio",
      content: (
        <>
          Nuestra empresa cuenta con Grúas articuladas. Nuestros equipos cuentan
          con Rigger capacitado para realizar maniobras especiales, seguros,
          certificaciones y mantenimiento preventivo con especialistas en
          hidráulica, mecánica y electrónica, quienes contribuyen con la
          operatividad de nuestros equipos.
          <br />
          <br />
          <strong>Capacidad:</strong> Grúa Hiab de 06 a 12 toneladas. Camiones
          de doble eje y simples de marcas{" "}
          <strong>Hino, Mercedes Benz e International</strong>.
        </>
      ),
      image:
        "https://www.tgruasanchez.com/images/services/alquiler-camiones.jpg",
    },
  ];

  return (
    <section className="relative bg-primary py-16 px-6 text-white">
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-10">
        Alquiler
      </h2>
      <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] bg-repeat opacity-20"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Tabs */}
        <div className="flex justify-center bg-blue-950 shadow-lg rounded-lg overflow-hidden p-2 mb-12">
          {features.map((feature) => (
            <button
              key={feature.id}
              className={`flex-1 py-3 text-sm font-medium transition-all ${
                selected === feature.id
                  ? "text-white relative"
                  : "text-gray-300"
              }`}
              onClick={() => setSelected(feature.id)}
            >
              {feature.title}
              {selected === feature.id && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#0066cc]"
                  layoutId="underline"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        {features.map(
          (feature) =>
            selected === feature.id && (
              <motion.div
                key={feature.id}
                className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div>
                  <h2 className="text-3xl font-bold">{feature.title}</h2>
                  <p className="text-gray-300 mt-4">{feature.content}</p>
                </div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>
            )
        )}
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
    </section>
  );
}

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false,
    faq5: false,
    faq6: false,
  });

  const toggleFaq = (key: any) => {
    setOpenFaq((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const faqs = [
    {
      id: "faq1",
      question:
        "¿Sus operadores y camiones-grúa cuentan con los documentos actualizados?",
      answer:
        "Sí, nuestras grúas cuentan con certificado de capacidad, seguro a todo riesgo y tarjeta de propiedad. Además, cuentan con certificado de circulación, certificado de inspección vehicular y certificado de Aptitud Médica en operadores.",
    },
    {
      id: "faq2",
      question: "¿Alquilan sus grúas con operador?",
      answer: "Sí, damos servicios sin y con operador; y también máquina seca.",
    },
    {
      id: "faq3",
      question: "¿Dan servicios con?",
      answer: "Sí, con sus documentos al día.",
    },
  ];

  return (
    <section className="relative z-20 overflow-hidden bg-white dark:bg-dark pt-20 pb-12 lg:pt-[120px] ">
      <div className="container mx-auto">
        <div className="text-center mb-10 max-w-[520px] mx-auto">
          <span className="block mb-2 text-lg font-semibold text-tertiary">
            FAQ
          </span>
          <h2 className="text-dark dark:text-white mb-4 text-3xl font-bold sm:text-[40px]/[48px]">
            Preguntas Frecuentes
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            ¿Tienes alguna pregunta? Aquí encontrarás las respuestas a las
            preguntas más frecuentes.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="w-full px-4 lg:w-1/2 mb-8">
              <div className="p-4 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-8 lg:px-6 xl:px-8">
                <button
                  className="flex w-full text-left items-center"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="bg-primary/5 dark:bg-white/5 text-primary mr-5 flex h-10 w-10 items-center justify-center rounded-lg">
                    <svg
                      className={`transition-transform duration-300 ${
                        openFaq[faq.id] ? "rotate-180" : ""
                      }`}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-dark dark:text-white">
                    {faq.question}
                  </h4>
                </button>
                {openFaq[faq.id] && (
                  <div className="mt-3 pl-[62px]">
                    <p className="text-base text-body-color dark:text-dark-6">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white dark:bg-dark py-20 lg:py-[px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4 lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="block mb-4 text-base font-semibold text-tertiary">
                Contacto
              </span>
              <h2 className="text-dark dark:text-white mb-6 text-[32px] font-bold sm:text-[40px] lg:text-[36px] xl:text-[40px]">
              ¿Necesitas ayuda con tu proyecto?
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-9">
                Si tienes alguna pregunta o deseas solicitar un presupuesto, no
                dudes en contactarnos.
              </p>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="bg-tertiary/5 text-tertiary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Dirección
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Av. Las Torres Sub Lt 7-C S/N Zona Norte de la Baja de Lima,
                    Lurigancho – Huachipa
                  </p>
                  
                </div>
              </div>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="bg-tertiary/5 text-tertiary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_941_17577)">
                      <path
                        d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                        fill="currentColor"
                      />
                      <path
                        d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                        fill="currentColor"
                      />
                      <path
                        d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_941_17577">
                        <rect width={32} height={32} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Número de Teléfono
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    (+51)907 551 674
                  </p>
                </div>
              </div>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="bg-tertiary/5 text-tertiary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Correos
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                  doris.s@tgruasanchez.com
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                  administracion@tgruasanchez.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
                    defaultValue={""}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full p-3 text-white transition border rounded border-primary bg-primary hover:bg-opacity-90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <div>
                <span className="absolute -top-10 -right-9 z-[-1]">
                  <svg
                    width={100}
                    height={100}
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                      fill="#001a43"
                    />
                  </svg>
                </span>
                <span className="absolute -right-10 top-[90px] z-[-1]">
                  <svg
                    width={34}
                    height={134}
                    viewBox="0 0 34 134"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="31.9993"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 31.9993 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 31.9993 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 31.9993 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 31.9993 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 31.9993 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 31.9993 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 31.9993 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 31.9993 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 31.9993 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 31.9993 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 17.3333 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 17.3333 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 17.3333 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 17.3333 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 17.3333 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 17.3333 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 17.3333 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 17.3333 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 17.3333 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 17.3333 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 2.66536 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 2.66536 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 2.66536 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 2.66536 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 2.66536 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 2.66536 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 2.66536 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 2.66536 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 2.66536 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 2.66536 1.66665)"
                      fill="#13C296"
                    />
                  </svg>
                </span>
                <span className="absolute -left-7 -bottom-7 z-[-1]">
                  <svg
                    width={107}
                    height={134}
                    viewBox="0 0 107 134"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="104.999"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 104.999 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 104.999 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 104.999 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 104.999 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 104.999 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 104.999 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 104.999 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 104.999 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 104.999 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="104.999"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 104.999 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 90.3333 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 90.3333 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 90.3333 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 90.3333 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 90.3333 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 90.3333 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 90.3333 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 90.3333 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 90.3333 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="90.3333"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 90.3333 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 75.6654 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 31.9993 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 75.6654 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 31.9993 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 75.6654 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 31.9993 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 75.6654 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 31.9993 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 75.6654 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 31.9993 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 75.6654 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 31.9993 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 75.6654 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 31.9993 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 75.6654 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 31.9993 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 75.6654 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 31.9993 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="75.6654"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 75.6654 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="31.9993"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 31.9993 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 60.9993 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 17.3333 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 60.9993 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 17.3333 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 60.9993 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 17.3333 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 60.9993 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 17.3333 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 60.9993 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 17.3333 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 60.9993 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 17.3333 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 60.9993 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 17.3333 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 60.9993 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 17.3333 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 60.9993 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 17.3333 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="60.9993"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 60.9993 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="17.3333"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 17.3333 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 46.3333 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={132}
                      r="1.66667"
                      transform="rotate(180 2.66536 132)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 46.3333 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="117.333"
                      r="1.66667"
                      transform="rotate(180 2.66536 117.333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 46.3333 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="102.667"
                      r="1.66667"
                      transform="rotate(180 2.66536 102.667)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 46.3333 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={88}
                      r="1.66667"
                      transform="rotate(180 2.66536 88)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 46.3333 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="73.3333"
                      r="1.66667"
                      transform="rotate(180 2.66536 73.3333)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 46.3333 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={45}
                      r="1.66667"
                      transform="rotate(180 2.66536 45)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 46.3333 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={16}
                      r="1.66667"
                      transform="rotate(180 2.66536 16)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 46.3333 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy={59}
                      r="1.66667"
                      transform="rotate(180 2.66536 59)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 46.3333 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="30.6666"
                      r="1.66667"
                      transform="rotate(180 2.66536 30.6666)"
                      fill="#13C296"
                    />
                    <circle
                      cx="46.3333"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 46.3333 1.66665)"
                      fill="#13C296"
                    />
                    <circle
                      cx="2.66536"
                      cy="1.66665"
                      r="1.66667"
                      transform="rotate(180 2.66536 1.66665)"
                      fill="#13C296"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
