

const peticion = async () => {
    const api = await fetch('http://localhost:8080/api/cars/getAllCars');
    const convertToJson = await api.json();
    console.log( convertToJson )
}
peticion();