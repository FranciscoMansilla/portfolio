import React from "react";
import style from './Carrousel2.module.css'
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



const images = [
  {img:xpress, icon:x_icon, git:'https://github.com/FranciscoMansilla/sneaker-client.git', page:'', name:'Xpress / in progress', description:'Sneakers E-commerce / in progress'},
  {img:SW, icon:SW_icon,git:'' , page:'https://soundwave-swart.vercel.app/', name:'SoundWave - music streaming', description:'SoundWave es una plataforma de streaming de música totalmente gratis, en donde sin regístrate puedes buscar y escuchar música de manera gratis, además al registrarte tienes la opción de crear playlist y agregar canciones a favoritos, más la opción de solicitar el upgrade para ser artista, esta solicitud le llega a un administrador de la pagina el cual decide si aceptar o no. '},
  {img:color, icon:color_icon, git:'https://github.com/FranciscoMansilla/color-find' , page:'https://color-find.vercel.app/', name:'ColorFind', description:' app para probar paleta de colores'},
  {img:pokeapp, icon:poke_icon,git:'https://github.com/FranciscoMansilla/projectPokeApi.git' , page:'https://project-poke-ieoai7baf-franciscomansilla.vercel.app/', name:'PokeApp', description:'La aplicacion trae originalmente 40 pokemons de una api externa, toda esta informacion llega en bruto a mi backend en donde filtro solo por los datos que necesito para luego servirlos al front con 4 endpoints. Database Para crear los pokemons tengo dos modelos de base de datos: pokemon y type con una relacion de muchos a muchos.Frontend La app esta realizada con css puro y reactjs. Esta cuenta con 4 rutas, en la principal se puede vizualizar una barra con filtros y busquedas, ademas de una lista de 12 pokemons. '},
  {img:wheater, icon:wheather_icon,git:'https://github.com/FranciscoMansilla/franWeatherApp.git' , page:'https://fran-weather-app.vercel.app/', name:'Wheater', description:'Este es mi primer proyecto, fue realizado a mediados de abril de 2022, es una página web del clima, contiene una barra de búsquedas en donde podemos ingresar el nombre de un país o una ciudad y al apretar enter (o el botón con la lupita) agregara una tarjetita con los datos de la búsqueda, estas se irán acumulando a medida que se siguen haciendo búsquedas para eso tiene un botón para cerrarlas, y por último en las tarjetitas al hacer click sobre el nombre de una ciudad nos llevara a otra vista en donde hay mas datos del clima sobre la locación.'},
]


const Carrousel2 = () => {
  // We will start by storing the index of the current image in the state.
  const [currentImage, setCurrentImage] = React.useState(0);

  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs = images.reduce((acc:any, val:any, i:any) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = (i:any) => {
    // First let's set the index of the image we want to see next
    setCurrentImage(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: 'smooth',
      //      Defines vertical alignment.
      block: 'nearest',
      //      Defines horizontal alignment.
      inline: 'start',
    });
  };

  // Some validation for checking the array length could be added if needed
  const totalImages = images.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-sm opacity-75 flex items-center justify-center';

  // Let's create dynamic buttons. It can be either left or right. Using
  // isLeft boolean we can determine which side we'll be rendering our button
  // as well as change its position and content.
  const sliderControl = (isLeft?:any) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? 'left-2 ' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? '←' : '→'}
      </span>
    </button>
  );

  return (
  // Images are placed using inline flex. We then wrap an image in a div
  // with flex-shrink-0 to stop it from 'shrinking' to fit the outer div.
  // Finally the image itself will be 100% of a parent div. Outer div is
  // set with position relative, so we can place our cotrol buttons using
  // absolute positioning on each side of the image.
    <div className="m-0 flex justify-center my-2 w-full xl:w-3/4 items-center">
      <div className="relative w-full">
        <div className={style.carousel }>
          {sliderControl(true)}
          {images.map((project, i) => (
            <div className="w-full  h-96 md:h-auto flex-shrink-0 relative" key={project.img} ref={refs[i]}>
              <img src={project.img} className=" w-full object-contain " />
              <div className="
                ease-in-out duration-200 bg-white md:bg-opacity-80 h-full w-full flex absolute md:opacity-0 top-0 left-0 
                bg-opacity-100 opacity-100 hover:opacity-100  flex-col justify-center items-center  ">
                <div className=' flex mb-6'>
                  <img className='mx-3 w-24 h-24 bg-white rounded-lg border-2 border-solid border-gray-600' src={project.icon} alt={project.name} />
                  <div>
                    <h1 className=" text-black text-2xl my-2">{project.name}</h1>
                    <div>
                      <a href={project.git} target="_blank">
                        <button className="bg-white py-1 px-2 w-28 rounded-lg border-2 border-solid border-black mx-2
                        hover:bg-gray-200
                        ">Github</button>
                      </a>
                      <a href={project.page} target="_blank">
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
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>
  );
};
export default Carrousel2