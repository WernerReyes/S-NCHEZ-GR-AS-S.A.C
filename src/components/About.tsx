const About = () => {
  return (
    <section id="about" className="bg-primary text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold underline underline-offset-8 decoration-secondary  text-white mb-6 relative inline-block">
          Sobre Nosotros
          <span className="absolute left-0 bottom-0 w-full h-1 bg- transform scale-x-100 transition-transform duration-300"></span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          En{" "}
          <span className="text-secondary font-semibold">
            HE INGENIERÍA S.A.C.
          </span>{" "}
          nos especializamos en ingeniería y construcción de alta calidad.
          Contamos con un equipo altamente capacitado para llevar a cabo
          proyectos de infraestructura eléctrica, sistemas de protección a
          tierra y mantenimiento eléctrico.
        </p>

        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <div className="w-full">
            <div className="flex flex-col w-full mb-10 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2 transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-600 rounded-lg" />
                  <div className="relative h-full p-1 bg-primary border-2 border-blue-600 rounded-lg">
                    <img src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3" />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-secondary rounded-lg" />
                  <div className="relative h-full p-1 bg-primary border-2 border-secondary rounded-lg">
                    <img src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2 transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-600 rounded-lg" />
                  <div className="relative h-full p-1 bg-primary border-2 border-blue-600 rounded-lg">
                    <img src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3" />
                  </div>
                </div>
              </div>
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2 transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-secondary rounded-lg" />
                  <div className="relative h-full p-1 bg-primary border-2 border-secondary rounded-lg">
                    <img src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3" />
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-600 rounded-lg" />
                  <div className="relative h-full p-1 bg-primary border-2 border-blue-600 rounded-lg">
                    <img src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
