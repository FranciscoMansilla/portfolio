import SW from "../../assets/captions/SW.jpg";
import pokeapp from "../../assets/captions/pokeapp.jpg";
import wheater from "../../assets/captions/wheater.jpg";
import SW_icon from "../../assets/captions/icons/swLogo.png";
import poke_icon from "../../assets/captions/icons/pokeappIcon.png";
import wheather_icon from "../../assets/captions/icons/weatherIcon.png";
import xpress from "../../assets/captions/xpress.jpg";
import x_icon from "../../assets/captions/icons/x.png";
import color_icon from "../../assets/captions/icons/colorFind.png";
import color from "../../assets/captions/color.jpg";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    img: null,
    icon: x_icon,
    git: "https://github.com/FranciscoMansilla/crud_of_user_console_go.git",
    page: "",
    name: "CRUD User Console App",
    description: "In progress",
    color: "blue",
    tag: "Go",
  },
  {
    img: null,
    icon: x_icon,
    git: "https://github.com/FranciscoMansilla/whatsapp_chatbot_flask.git",
    page: "",
    name: "Whatsapp chatbot",
    description: "In progress",
    color: "green",
    tag: "python",
  },
  {
    img: null,
    icon: x_icon,
    git: "https://github.com/FranciscoMansilla/to_do_list_java.git",
    page: "",
    name: "To do list",
    description: "little app in java",
    color: "red",
    tag: "java",
  },
  {
    img: null,
    icon: x_icon,
    git: "https://github.com/FranciscoMansilla/sync-a_front.git",
    page: "",
    name: "Sync-a frontend",
    description: "In progress",
    color: "yellow",
    tag: "javascript",
  },
  {
    img: null,
    icon: x_icon,
    git: "https://github.com/FranciscoMansilla/sync-a_backend.git",
    page: "",
    name: "Sync-a backend",
    description: "In progress",
    color: "yellow",
    tag: "javascript",
  },
  {
    img: xpress,
    icon: x_icon,
    git: "https://github.com/FranciscoMansilla/sneaker-client.git",
    page: "",
    name: "Xpress / in progress",
    description: "Sneakers E-commerce / in progress",
    color: "blue",
    tag: "typescript",
  },
  {
    img: SW,
    icon: SW_icon,
    git: "https://github.com/orgs/SoundWavePF/repositories",
    page: "https://soundwave-swart.vercel.app/",
    name: "SoundWave - music streaming",
    description:
      "SoundWave es una plataforma de streaming de música totalmente gratis, en donde sin regístrate puedes buscar y escuchar música de manera gratis, además al registrarte tienes la opción de crear playlist y agregar canciones a favoritos, más la opción de solicitar el upgrade para ser artista, esta solicitud le llega a un administrador de la pagina el cual decide si aceptar o no. ",
    color: "blue",
    tag: "typescript",
  },
  {
    img: color,
    icon: color_icon,
    git: "https://github.com/FranciscoMansilla/color-find",
    page: "https://color-find.vercel.app/",
    name: "ColorFind",
    description: " app para probar paleta de colores",
    color: "blue",
    tag: "typescript",
  },
  {
    img: pokeapp,
    icon: poke_icon,
    git: "https://github.com/FranciscoMansilla/projectPokeApi.git",
    page: "https://project-poke-ieoai7baf-franciscomansilla.vercel.app/",
    name: "PokeApp",
    description:
      "La aplicacion trae originalmente 40 pokemons de una api externa, toda esta informacion llega en bruto a mi backend en donde filtro solo por los datos que necesito para luego servirlos al front con 4 endpoints. Database Para crear los pokemons tengo dos modelos de base de datos: pokemon y type con una relacion de muchos a muchos.Frontend La app esta realizada con css puro y reactjs. Esta cuenta con 4 rutas, en la principal se puede vizualizar una barra con filtros y busquedas, ademas de una lista de 12 pokemons. ",
    color: "yellow",
    tag: "javascript",
  },
  {
    img: wheater,
    icon: wheather_icon,
    git: "https://github.com/FranciscoMansilla/franWeatherApp.git",
    page: "https://fran-weather-app.vercel.app/",
    name: "Wheater",
    description:
      "Este es mi primer proyecto, fue realizado a mediados de abril de 2022, es una página web del clima, contiene una barra de búsquedas en donde podemos ingresar el nombre de un país o una ciudad y al apretar enter (o el botón con la lupita) agregara una tarjetita con los datos de la búsqueda, estas se irán acumulando a medida que se siguen haciendo búsquedas para eso tiene un botón para cerrarlas, y por último en las tarjetitas al hacer click sobre el nombre de una ciudad nos llevara a otra vista en donde hay mas datos del clima sobre la locación.",
    color: "yellow",
    tag: "javascript",
  },
];
const ProjectContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState(null);
  const closeModal = () => {
    setIsOpen(false);
    setItem(null);
  };
  const openModal = (item) => {
    setItem(item);
    setIsOpen(true);
  };
  return (
    <div>
      <h1 className=" mb-6 font-F-Bold text-4xl bg-gradient-to-r to-sky-400 from-pink-300 text-transparent bg-clip-text">
        Personal Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-10">
        {projects.map((project) => (
          <>
            <ProjectCard item={project} isOpen={isOpen} openModal={openModal} />
          </>
        ))}
        <ProjectModal item={item} isOpen={isOpen} closeModal={closeModal} />
      </div>
    </div>
  );
};
export default ProjectContainer;
