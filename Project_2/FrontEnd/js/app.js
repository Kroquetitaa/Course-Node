
const URL = "http://localhost:8080/api/cars/getAllCars";

const api = async( url ) => {
    const petAPI = await fetch( url );
    const convertToJSON = await petAPI.json();
    const data = convertToJSON.data.cars;
    mapData( data );
}

const mapData = async( dataList ) => {
    dataList.map( elements => {
        return generateHTML({
            coche: elements.cars,
            combustible: elements.gas,
            modelo: elements.models,
            precio: elements.price,
            imagen: elements.img,
        })
    })
}

const generateHTML = ( object ) => {
    const charactersContainer = document.querySelector('#cards');
    const createFigure = `
    <div class="cards_list--data">
        <img src="${object.imagen}" alt="${object.coche}"/>
        <div class="cards_list--data--info">
            <h1 class="name">${object.modelo}</h1>
            <p class="info">Combustible: ${object.combustible}</p>
            <p class="price">Precio:<strong> ${object.precio} € </strong></p>
            <p class="origen">${object.coche}</p>
            <button type="button" class="btn" id="button" onClick="buttonClick()">Informacion</button>
        </div>
    </div>
    `;
    printHTML(createFigure, charactersContainer)
}

const printHTML = (html, container) => {
    container.innerHTML += html; 
}

const buttonClick = () => {
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];
    modal.style.display = 'block';
    span.onclick = () => modal.style.display = 'none';
}

api( URL );