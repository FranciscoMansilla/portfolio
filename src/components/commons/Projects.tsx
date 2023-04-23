import { Carousel } from "react-responsive-carousel"
import Carrousel2 from "./Carrousel2"
import bgDark from "../../assets/bg1Dark.png"
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import SW from '../../assets/captions/SW.jpg'
import pokeapp from '../../assets/captions/pokeapp.jpg'
import wheater from '../../assets/captions/wheater.jpg'
import SW_icon from '../../assets/captions/icons/swLogo.png'
import poke_icon from '../../assets/captions/icons/pokeappIcon.png'
import wheather_icon from '../../assets/captions/icons/weatherIcon.png'
import xpress from '../../assets/captions/xpress.jpg'
import x_icon from '../../assets/captions/icons/x.png' 
import color_icon from '../../assets/captions/icons/colorFind.png' 
import color from '../../assets/captions/color.jpg' 

const Projects = ()=>{
  const sliderRef = useRef<Slider>(null);
  // const images = [
  //   "https://placeimg.com/640/480/animals",
  //   "https://placeimg.com/640/480/architecture",
  //   "https://placeimg.com/640/480/nature",
  // ];
  const images = [
    {img:xpress, icon:x_icon, git:'https://github.com/FranciscoMansilla/sneaker-client.git', page:'', name:'Xpress / in progress', description:'Sneakers E-commerce / in progress'},
    {img:SW, icon:SW_icon,git:'' , page:'https://soundwave-swart.vercel.app/', name:'SoundWave - music streaming', description:'SoundWave es una plataforma de streaming de música totalmente gratis, en donde sin regístrate puedes buscar y escuchar música de manera gratis, además al registrarte tienes la opción de crear playlist y agregar canciones a favoritos, más la opción de solicitar el upgrade para ser artista, esta solicitud le llega a un administrador de la pagina el cual decide si aceptar o no. '},
    {img:color, icon:color_icon, git:'https://github.com/FranciscoMansilla/color-find' , page:'https://color-find.vercel.app/', name:'ColorFind', description:' app para probar paleta de colores'},
    {img:pokeapp, icon:poke_icon,git:'https://github.com/FranciscoMansilla/projectPokeApi.git' , page:'https://project-poke-ieoai7baf-franciscomansilla.vercel.app/', name:'PokeApp', description:'La aplicacion trae originalmente 40 pokemons de una api externa, toda esta informacion llega en bruto a mi backend en donde filtro solo por los datos que necesito para luego servirlos al front con 4 endpoints. Database Para crear los pokemons tengo dos modelos de base de datos: pokemon y type con una relacion de muchos a muchos.Frontend La app esta realizada con css puro y reactjs. Esta cuenta con 4 rutas, en la principal se puede vizualizar una barra con filtros y busquedas, ademas de una lista de 12 pokemons. '},
    {img:wheater, icon:wheather_icon,git:'https://github.com/FranciscoMansilla/franWeatherApp.git' , page:'https://fran-weather-app.vercel.app/', name:'Wheater', description:'Este es mi primer proyecto, fue realizado a mediados de abril de 2022, es una página web del clima, contiene una barra de búsquedas en donde podemos ingresar el nombre de un país o una ciudad y al apretar enter (o el botón con la lupita) agregara una tarjetita con los datos de la búsqueda, estas se irán acumulando a medida que se siguen haciendo búsquedas para eso tiene un botón para cerrarlas, y por último en las tarjetitas al hacer click sobre el nombre de una ciudad nos llevara a otra vista en donde hay mas datos del clima sobre la locación.'},
  ]
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className={` m-2 text-white text-2xl bg-black h-10 w-10 rounded-sm opacity-75 flex items-center justify-center absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer`}
        onClick={onClick}
      >
        {"<"}
      </div>
    );
  };
  
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className={`m-2 text-white text-2xl bg-black h-10 w-10 rounded-sm opacity-75 flex items-center justify-center absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer`}
        onClick={onClick}
      >
        {">"}
      </div>
    );
  };

  const renderPaging1 = (index: number) => {
    return (
      <div
        key={index}
        className={' bg-white rounded-full w-3 h-3 mx-2'}
      />
    );
  };

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    customPaging: renderPaging1
  };

  return(
    <div className='flex flex-col items-center mb-20 py-16 bg-gray-900' id="project">
      <h1 className=" mb-6 font-F-Bold text-4xl bg-gradient-to-r to-sky-400 from-pink-300 text-transparent bg-clip-text">Personal Projects</h1>
      <div className=" w-full  flex justify-center">
        {/* <Carrousel2/> */}
      <div className="w-full flex justify-center">
        <Slider className=" w-3/4" {...settings} ref={sliderRef}>
          {images.map((project, i) => (
            <div key={i} className="">
              <div className="w-full flex justify-center">
              <div className="w-full  h-96 md:h-auto flex-shrink-0 relative" key={project.img} >
              <img src={project.img} className=" w-full object-contain " alt="" />
              <div className="
                ease-in-out duration-200 bg-white md:bg-opacity-80 h-full w-full flex absolute md:opacity-0 top-0 left-0 
                bg-opacity-100 opacity-100 hover:opacity-100  flex-col justify-center items-center  ">
                <div className=' flex mb-6'>
                  <img className='mx-3 w-24 h-24 bg-white rounded-lg border-2 border-solid border-gray-600' src={project.icon} alt={project.name} />
                  <div>
                    <h1 className=" text-black text-2xl my-2">{project.name}</h1>
                    <div>
                      <a href={project.git} target="_blank" rel="noreferrer">
                        <button className="bg-white py-1 px-2 w-28 rounded-lg border-2 border-solid border-black mx-2
                        hover:bg-gray-200
                        ">Github</button>
                      </a>
                      <a href={project.page} target="_blank" rel="noreferrer">
                        <button className="bg-white py-1 px-6 w-28 rounded-lg border-2 border-solid border-black mx-2
                        hover:bg-gray-200
                        ">Visit</button>
                      </a>
                    </div>
                  </div>
                </div>
                <p className=" rounded-lg bg-white bg-opacity-40 w-2/3 md:text-base text-xs text-gray-800">{project.description}</p>
              </div>
            </div>
              </div>
            </div>
          ))}
        </Slider>

      </div>

      </div>
    </div>
  )
}
export default Projects