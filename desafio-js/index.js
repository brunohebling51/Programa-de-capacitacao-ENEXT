function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}


async function main() {
    navigator.geolocation.getCurrentPosition(async function (position) {
        const response = await window.axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=c3df25cb8ec0260863cc173d3e6aa169`);
        


        const tempDiv = document.getElementById("temp");
        const descriptionDiv = document.getElementById("description");
        const container = document.getElementById("container");
        const date = new Date();
        const today = date.toLocaleDateString("pt-br", { weekday: "long" });
        const weekday = document.getElementById("week-day");
        const timerData = response.data;

        const loading = document.getElementById("loading");

        // fazer apagar o loading depois que carregar a pagina
        loading.remove();

        // trocando texto da div dia-da-semana
        weekday.textContent = today;

        // Trocando texto da div de temperatura
        tempDiv.textContent = kelvinToCelsius(timerData.main.temp).toFixed(0) + "° C";

        // Trocando texto da div de descrição
        descriptionDiv.textContent = timerData.weather[0].description;
        // colocar aqui a descrição

        // Criando icone
        const iconImage = document.createElement("img");
        iconImage.src = `http://openweathermap.org/img/wn/${timerData.weather[0].icon}@2x.png`;


        // Adicionando icone ao body
        // container.insertBefore(iconImage);
        container.insertBefore(iconImage, container.children[1]);



    });
}

main();