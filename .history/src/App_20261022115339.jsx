
import "./App.css";

const NEGOCIO = {
  nombre: "Tacos Los Primos",
  lema: "Barbacoa de res estilo Tierra Caliente",
  ciudad: "Morelia, Michoacán",
  telefonoWhatsApp: "524531285884",
  direccion: "Sobre Avenida Amalia Solorzano, Frente a Primaria Ignacio Manuel Altamirano, Morelia, Michoacán",
  horario: "Lunes a Domingo: 8:00 AM - 12:40 PM",
};

const menu = [
  {
    nombre: "Tacos de barbacoa",
    descripcion:
      "Barbacoa de res acompañada de cebolla, cilantro, adobo y salsa.",
    imagen: "/tacos-barbacoa.jpg",
    precio: "Consulta nuestro precio",
  },
  {
    nombre: "Consomé",
    descripcion:
      "El acompañamiento ideal para disfrutar tu barbacoa.",
    imagen: "/consome.jpg",
    precio: "Consulta nuestro precio",
  },
  {
    nombre: "Barbacoa por kilo",
    descripcion:
      "Perfecta para compartir con familia y amigos.",
    imagen: "/tacos-barbacoa.jpg",
    precio: "Consulta nuestro precio",
  },
];

function crearMensaje(producto = "") {
  const mensaje = producto
    ? `Hola, quiero pedir ${producto}. ¿Me pueden dar información?`
    : `Hola, quiero conocer el menú de ${NEGOCIO.nombre}.`;

  return `https://wa.me/${NEGOCIO.telefonoWhatsApp}?text=${encodeURIComponent(
    mensaje
  )}`;
}

function App() {
  return (
    <>
      <header className="navbar">
        <a href="#inicio" className="marca">
          <img
            src="/logo.png"
            alt={`Logotipo de ${NEGOCIO.nombre}`}
            className="logo"
          />
          <span>{NEGOCIO.nombre}</span>
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#menu">Menú</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#ubicacion">Ubicación</a>
        </nav>

        <a
          className="boton boton-nav"
          href={crearMensaje()}
          target="_blank"
          rel="noreferrer"
        >
          Pedir por WhatsApp
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-contenido">
            <span className="etiqueta">
              SABOR TRADICIONAL · {NEGOCIO.ciudad.toUpperCase()}
            </span>

            <h1>
              El sabor de una buena
              <span> barbacoa.</span>
            </h1>

            <p>
              Ven a disfrutar nuestros tacos de barbacoa de res,
              preparados para compartir buenos momentos y mucho sabor.
            </p>

            <div className="hero-botones">
              <a
                className="boton"
                href={crearMensaje()}
                target="_blank"
                rel="noreferrer"
              >
                Haz tu pedido <span aria-hidden="true">↗</span>
              </a>

              <a className="boton boton-secundario" href="#menu">
                Conoce nuestro menú
              </a>
            </div>
          </div>

          <div className="hero-pie">
            <span>BARBACOA DE RES</span>
            <span>HECHA PARA COMPARTIR</span>
          </div>
        </section>

        <section className="introduccion" id="nosotros">
          <span className="etiqueta etiqueta-oscura">
            BIENVENIDOS A {NEGOCIO.nombre}
          </span>

          <h2>{NEGOCIO.lema}.</h2>

          <p>
            Nos encanta compartir el sabor de la barbacoa de res.
            Queremos que cada visita sea una buena experiencia,
            desde el primer taco hasta el último bocado.
          </p>
        </section>

        <section className="seccion-menu" id="menu">
          <div className="encabezado-seccion">
            <div>
              <span className="etiqueta etiqueta-oscura">
                RECIÉN PREPARADO
              </span>
              <h2>Algo bueno te espera.</h2>
            </div>

            <p>
              Descubre nuestros favoritos y encuentra el
              acompañamiento perfecto.
            </p>
          </div>

          <div className="menu-grid">
            {menu.map((producto) => (
              <article className="producto" key={producto.nombre}>
                <div className="producto-imagen">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    loading="lazy"
                  />
                </div>

                <div className="producto-info">
                  <h3>{producto.nombre}</h3>
                  <p>{producto.descripcion}</p>

                  <div className="producto-pie">
                    <span>{producto.precio}</span>
                    <a
                      href={crearMensaje(producto.nombre)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Pedir información sobre ${producto.nombre}`}
                    >
                      Pedir ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="destacado">
          <div className="destacado-imagen">
            <img
              src="/local.jpg"
              alt={`Conoce ${NEGOCIO.nombre}`}
              loading="lazy"
            />
          </div>

          <div className="destacado-texto">
            <span className="etiqueta">
              EL SABOR NOS UNE
            </span>

            <h2>Buenos tacos, mejores momentos.</h2>

            <p>
              Reúne a tu familia o amigos y disfruta de una buena
              comida. ¡Nos encantará atenderte!
            </p>

            <a
              className="boton"
              href={crearMensaje()}
              target="_blank"
              rel="noreferrer"
            >
              Contáctanos por WhatsApp ↗
            </a>
          </div>
        </section>

        <section className="ubicacion" id="ubicacion">
          <span className="etiqueta etiqueta-oscura">
            ENCUÉNTRANOS
          </span>

          <h2>Te esperamos.</h2>

          <p>
            <strong>Ubicación:</strong> {NEGOCIO.direccion}
          </p>

          <p>
            <strong>Horario:</strong> {NEGOCIO.horario}
          </p>

          <p>{NEGOCIO.ciudad}</p>

          <a
            className="boton"
            href="https://www.google.com/maps/search/?api=1&query=taqueria+Morelia+Michoacan"
            target="_blank"
            rel="noreferrer"
          >
            Buscar en Google Maps ↗
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#inicio" className="marca marca-footer">
          <img src="/logo.png" alt="" className="logo" />
          <span>{NEGOCIO.nombre}</span>
        </a>

        <p>El sabor de la tradición, en cada taco.</p>

        <a
          href={crearMensaje()}
          target="_blank"
          rel="noreferrer"
        >
          Escríbenos por WhatsApp
        </a>

        <small>
          © {new Date().getFullYear()} {NEGOCIO.nombre}. Todos los derechos
          reservados.
        </small>
      </footer>

      <a
        className="whatsapp-flotante"
        href={crearMensaje()}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        WhatsApp ↗
      </a>
    </>
  );
}

export default App;