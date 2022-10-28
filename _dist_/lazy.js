//todo lo relacionado al Intersection Observer
let countAll = 0;
let countLoad = 0;

//funcion que me dice si es visible en la pantalla
const isIntersecting = (entry) =>{
    return entry.isIntersecting; // true, si esta dentro de la pantalla 
}

 
const loadImage = (entry) => {
    const container = entry.target //container (div)
    const imagen = container.firstChild;
    const url = imagen.dataset.src;

    imagen.src = url;    

    countLoad++
    state()

    //le decimos que como ya hizo algo
    //des registre la imagen o deje de escucharla (unlisten)
    observer.unobserve(container)

}

//entries es lo que nos devuleve el observador, es a lo que le esta prestando atencion
const observer = new IntersectionObserver((entries) => {
    //entries es un array
    entries
    .filter(isIntersecting) //filtra por las imagenes que en ese momento hay una interseccion (visible en el viewport)
    .forEach(loadImage)//por cada uno de los elementos que se encuentran el la pantalla vamos a realizar una accion
    
});

//funcion que recibe una imagen y le dice al observador 
export const registerImage = (image) => {
    //Intersection Observer -> observe la imagen que le estamos enviando
    observer.observe(image);
    countAll  ++;
    state()
    
    
};

function state(){
    console.log('====================================');
    console.log(`✅Total imagenes ${countAll} `);
    console.log(`👀Imagenes cargadas ${countLoad} `);
    console.log('====================================');
}