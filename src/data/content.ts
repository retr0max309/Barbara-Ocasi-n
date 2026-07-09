/* Datos y copy de Barbara Ocasión — fuente de verdad única */

const basePath = '';

export const SITE = {
  nombre: "Barbara Ocasión",
  descripcion: "El escenario perfecto para tus momentos inolvidables.",
  whatsapp: "https://wa.me/59163026011",
  whatsappMsg: "https://wa.me/59163026011?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20evento%20en%20Barbara%20Ocasi%C3%B3n.",
  telefono:  "71162852",
  telefono2: "77131831",
  whatsappContacto: "https://wa.me/59171162852?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20Barbara%20Ocasi%C3%B3n.",
  direccion: "Padre Sanauja Nº2, Sucre, Bolivia",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.1234567890!2d-65.2594!3d-19.0477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e9c7b6a5d3a1%3A0x0!2sBarbara%20Ocasi%C3%B3n!5e0!3m2!1ses!2sbo!4v1700000000000!5m2!1ses!2sbo",
  mapsUrl: "https://maps.app.goo.gl/da5SsehxBaWQxiuP6",
  capacidad: 180,
  instagram: "https://www.instagram.com/barbaraocasion.bo?igsh=d2hvNWVrcmxyenZw",
  facebook:  "https://www.facebook.com/share/1BKsV9eVPU/",
};

export const EVENTOS = [
  {
    id: "bodas",
    nombre: "Bodas",
    descripcion: "El día más especial merece el escenario perfecto",
    imagen: "https://picsum.photos/seed/barbara-boda/1200/900",
    destacado: true,
  },
  {
    id: "quince",
    nombre: "15 Años",
    descripcion: "Una noche mágica para celebrar tu historia",
    imagen: "https://picsum.photos/seed/barbara-quince/1200/900",
    destacado: false,
  },
  {
    id: "infantil",
    nombre: "Infantil",
    descripcion: "Diversión y magia para los más pequeños",
    imagen: "https://picsum.photos/seed/barbara-infantil/1200/900",
    destacado: false,
  },
  {
    id: "adultos",
    nombre: "Adultos",
    descripcion: "Celebra cada año con elegancia y buen gusto",
    imagen: "https://picsum.photos/seed/barbara-adultos/1200/900",
    destacado: false,
  },
  {
    id: "aniversarios",
    nombre: "Aniversarios",
    descripcion: "Renueva el compromiso en un ambiente de lujo",
    imagen: "https://picsum.photos/seed/barbara-aniversario/1200/900",
    destacado: false,
  },
];

export const SERVICIOS_PRINCIPALES = [
  {
    id: "floristeria",
    titulo: "Floristería",
    descripcion:
      "Arreglos florales diseñados a medida para cada tipo de evento. Desde centros de mesa hasta arcos nupciales, cada flor es elegida para complementar la atmósfera que imaginas.",
    imagen: `${basePath}/serviciosImages/floristeria.jpg`,
  },
  {
    id: "cocteleria",
    titulo: "Coctelería",
    descripcion:
      "Bartenders expertos que sirven cócteles curados y seleccionados en nuestra barra equipada. Una experiencia para el paladar tan memorable como el evento.",
    imagen: `${basePath}/serviciosImages/cocteleria.jpg`,
  },
  {
    id: "organizacion",
    titulo: "Organización de Eventos",
    descripcion:
      "Un coordinador dedicado que gestiona cada detalle desde la planificación hasta el último minuto. Decoración, personal, sonido, escenario, todo bajo un solo equipo para que tú solo disfrutes.",
    imagen: `${basePath}/serviciosImages/organizador.jpg`,
  },
];

export const INCLUIDOS = [
  { titulo: "Mobiliario Completo", descripcion: "Mesas, sillas, manteles y centros de mesa incluidos" },
  { titulo: "Seguridad", descripcion: "Personal de seguridad privada durante todo el evento" },
  { titulo: "Limpieza Incluida", descripcion: "Servicio de limpieza antes, durante y después" },
  { titulo: "Coordinador de Eventos", descripcion: "Un profesional dedicado que gestiona cada detalle por ti" },
];

export const GALERIA = [
  { id: 1,  categoria: "bodas",        alt: "Boda en Barbara Ocasión",         src: `${basePath}/galeriaimages/img1.jpg`,       size: "tall" as const },
  { id: 2,  categoria: "bodas",        alt: "Ceremonia nupcial",               src: `${basePath}/galeriaimages/img9.jpg`,      size: "wide" as const },
  { id: 3,  categoria: "decoracion",   alt: "Decoración floral del salón",     src: `${basePath}/galeriaimages/img10.jpg`,      size: "wide" as const },
  { id: 4,  categoria: "quince",       alt: "15 años en Barbara Ocasión",      src: `${basePath}/galeriaimages/img2.jpg`,     size: "tall" as const },
  { id: 5,  categoria: "infantil",     alt: "Fiesta infantil decorada",        src: `${basePath}/galeriaimages/img3.jpg`,   size: "tall" as const },
  { id: 6,  categoria: "bodas",        alt: "Mesa de boda decorada",           src: `${basePath}/galeriaimages/img4.jpg`,       size: "tall" as const },
  { id: 7,  categoria: "adultos",      alt: "Cena de cumpleaños adultos",      src: `${basePath}/galeriaimages/img5.jpg`,    size: "tall" as const },
  { id: 8,  categoria: "aniversarios", alt: "Aniversario en el salón",         src: `${basePath}/galeriaimages/img6.jpg`,       size: "tall" as const },
  { id: 9,  categoria: "decoracion",   alt: "Iluminación y ambientación",      src: `${basePath}/galeriaimages/img11.jpg`,      size: "wide" as const },
  { id: 10, categoria: "quince",       alt: "Fiesta de 15 años",               src: `${basePath}/galeriaimages/img7.jpg`,     size: "tall" as const },
  { id: 11, categoria: "infantil",     alt: "Fiesta infantil con decoración",  src: `${basePath}/galeriaimages/img8.jpg`,   size: "tall" as const },
  { id: 12, categoria: "aniversarios", alt: "Celebración de aniversario",      src: `${basePath}/galeriaimages/img12.jpg`,       size: "tall" as const },
];

export const GALERIA_FILTROS = [
  { id: "todos",        label: "Todos" },
  { id: "bodas",        label: "Bodas" },
  { id: "quince",       label: "15 Años" },
  { id: "infantil",     label: "Infantil" },
  { id: "adultos",      label: "Adultos" },
  { id: "aniversarios", label: "Aniversarios" },
  { id: "decoracion",   label: "Decoración" },
];

export const TESTIMONIOS = [
  {
    id: 1,
    nombre: "María & Carlos",
    evento: "Boda · Marzo 2025",
    frase:
      "Fue la mejor noche de nuestra vida. El equipo de Barbara Ocasión convirtió cada detalle de nuestra visión en algo aún más hermoso de lo que imaginamos.",
    imagen: "https://picsum.photos/seed/test-boda/600/400",
    destacado: true,
  },
  {
    id: 2,
    nombre: "Familia Rodríguez",
    evento: "15 Años · Enero 2025",
    frase:
      "La decoración superó todas nuestras expectativas. El coordinador estuvo presente en cada momento. Lo recomendamos sin dudarlo.",
    imagen: "https://picsum.photos/seed/test-quince/600/400",
    destacado: false,
  },
  {
    id: 3,
    nombre: "Empresa Construvial",
    evento: "Aniversario Corporativo · 2024",
    frase:
      "Profesionalismo de principio a fin. Nuestros invitados quedaron impresionados con el salón, la barra y la atención del personal.",
    imagen: "https://picsum.photos/seed/test-corp/600/400",
    destacado: false,
  },
];

export const PROCESO = [
  {
    numero: "01",
    titulo: "Agenda tu Cita",
    descripcion:
      "Contáctanos por WhatsApp o formulario. Te respondemos en menos de 24 horas para coordinar una visita al salón.",
  },
  {
    numero: "02",
    titulo: "Planificamos Juntos",
    descripcion:
      "Nuestro coordinador te guía en cada detalle: decoración, menú, sonido y logística. Tú decides, nosotros ejecutamos.",
  },
  {
    numero: "03",
    titulo: "Tu Gran Día",
    descripcion:
      "El día del evento solo te preocupas de disfrutar. Nosotros gestionamos todo para que cada momento sea perfecto.",
  },
];

export const FAQS = [
  {
    pregunta: "¿Con cuánto tiempo de anticipación debo reservar el salón?",
    respuesta:
      "Recomendamos reservar con al menos 3 meses de anticipación para fechas regulares, y 6 meses para temporada alta (noviembre–febrero). Para bodas, sugerimos reservar con 6 a 12 meses de anticipación.",
  },
  {
    pregunta: "¿Cuál es la capacidad máxima del salón?",
    respuesta:
      "Barbara Ocasión tiene capacidad para hasta 180 personas en salón principal. Adicionalmente contamos con un jardín con área de lounge para que tus invitados puedan disfrutar al aire libre.",
  },
  {
    pregunta: "¿El precio incluye decoración y mobiliario?",
    respuesta:
      "Sí, todos nuestros paquetes incluyen mobiliario completo (mesas, sillas y manteles). La decoración floral y temática se cotiza según el tipo de evento y las preferencias del cliente.",
  },
  {
    pregunta: "¿Tienen proveedores exclusivos de catering?",
    respuesta:
      "No trabajamos con proveedores exclusivos. Puedes traer el catering de tu preferencia. Lo que sí ofrecemos internamente es nuestra barra de coctelería artesanal con bartenders profesionales.",
  },
  {
    pregunta: "¿Cómo funciona el servicio de coordinación de eventos?",
    respuesta:
      "Cada evento incluye un coordinador dedicado que se reúne contigo en la etapa de planificación, está presente el día del evento y supervisa al personal para que todo funcione según lo acordado.",
  },
];

export const PAQUETES = [
  {
    id: "esencial",
    coleccion: "Colección I",
    nombre: "Esencial",
    descripcion: "Todo lo necesario para una celebración elegante y sin preocupaciones.",
    destacado: false,
    caracteristicas: [
      "Salón principal hasta 180 invitados",
      "Mobiliario completo (mesas, sillas, manteles)",
      "Iluminación estándar del salón",
      "Estacionamiento privado",
      "Servicio de limpieza incluido",
      "Seguridad durante el evento",
    ],
    whatsapp: "https://wa.me/59163026011?text=Hola%2C%20me%20interesa%20el%20paquete%20Esencial%20de%20Barbara%20Ocasi%C3%B3n.",
  },
  {
    id: "lujo",
    coleccion: "Colección II",
    nombre: "Plus",
    descripcion: "La experiencia completa para eventos que merecen ser recordados para siempre.",
    destacado: true,
    caracteristicas: [
      "Todo lo del paquete Esencial",
      "Catering de comida",
      "Bebidas con alcohol",
      "Personal de servicio élite",
      "Coordinador de eventos dedicado",
      "Jardín + área lounge exterior",
    ],
    whatsapp: "https://wa.me/59163026011?text=Hola%2C%20me%20interesa%20el%20paquete%20Plus%20de%20Barbara%20Ocasi%C3%B3n.",
  },
  {
    id: "barbara",
    coleccion: "Colección III",
    nombre: "Barbara Ocasión",
    descripcion: "Una propuesta completamente personalizada. Diseñamos cada detalle según tu visión.",
    destacado: false,
    caracteristicas: [
      "Todo lo del paquete Plus",
      "Coctelería de autor y clásica",
      "Diseño floral",
      "Equipo de sonido",
      "Diseño y concepto personalizado",
      "Coordinación integral del evento",
      "Atención preferencial y exclusiva",
      "Asesoría previa ilimitada",
      "Cotización según requerimientos",
    ],
    whatsapp: "https://wa.me/59163026011?text=Hola%2C%20me%20interesa%20el%20paquete%20Barbara%20Ocasi%C3%B3n%20(exclusivo).",
  },
];

export const NAV_LINKS = [
  { href: "/eventos",   label: "Eventos",   desc: "Bodas · 15 años · Corporativos" },
  { href: "/servicios", label: "Servicios", desc: "Floristería · Coctelería · Organización" },
  { href: "/inversion", label: "Paquetes",  desc: "Paquetes y colecciones" },
  { href: "/contacto",  label: "Contacto",  desc: "Visítanos · Agenda tu cita" },
];

