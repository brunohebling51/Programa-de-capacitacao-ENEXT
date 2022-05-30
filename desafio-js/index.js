import { dado } from "./dado.js";

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function main() {
    const body = document.querySelector("body");
    const tempDiv = document.getElementById("temp");
    const descriptionDiv = document.getElementById("description");

    // Trocando texto da div de temperatura
    tempDiv.innerHTML = dado.main.temp + `${kelvin}` + "°C";

    // Trocando texto da div de descrição
    // colocar aqui a descrição
    descriptionDiv.textContent = dado.weather[0].description;

    // Criando icone
    const iconImage = document.createElement("img");
    iconImage.src = `http://openweathermap.org/img/wn/${dado.weather[0].icon}@2x.png`;

    // Adicionando icone ao body
    body.appendChild(iconImage);
}

main();