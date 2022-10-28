import {registerImage} from './lazy';

const  randomImage = () => {
    const max = 123;
    const min = 1;
    let random =  Math.floor(Math.random() * (max - min) + min);
    
    return random
}
    
const createImageNode = () =>{
    
    const container = document.createElement('div')
    container.className = "p-4 "


    //crear imagen
    const image = document.createElement('img');
    //agregamos el contenido, le damos la url de la imagen
    image.dataset.src = `https://randomfox.ca/images/${randomImage()}.jpg`

    image.className = "mx-auto  rounded-md bg-gray-300"
    image.width="320"

    


    

    container.appendChild(image);

    return container;

}

const mountNode = document.querySelector('#images')

//boton de añadir
const addButton =  document.querySelector('#addbutton')
addButton.className = "m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"

const addImage = () => {
    
    const newImage = createImageNode();
    mountNode.appendChild(newImage);
    // ademas de agregar la imagen en el DOM, le decimos que la empiece a escuchar
    registerImage(newImage);
};

addButton.addEventListener('click', addImage);

//botton limpiar 
const cleanButton =  document.querySelector('#cleanButton');
cleanButton.className = "bg-transparent-700 hover:bg-white text-blue-500  border border-blue-500  font-bold py-2 px-4 rounded-full"

const clean = () => {
    mountNode.innerHTML= "";
}

cleanButton.addEventListener('click', clean);