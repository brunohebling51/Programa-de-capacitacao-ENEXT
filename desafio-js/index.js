function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}


async function main() {
    navigator.geolocation.getCurrentPosition(async function (position) {
        const response = await window.axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=c3df25cb8ec0260863cc173d3e6aa169`);

        // selecionando itens no html
        const tempDiv = document.querySelector("#temp");
        const descriptionDiv = document.querySelector("#description");
        const container = document.querySelector("#container");
        const weekday = document.querySelector("#week-day");
        const horario = document.querySelector("#horario");
        const date = new Date();
        const dayName = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
        const monName = new Array("janeiro", "feveiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro");
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const timerData = response.data;
        const loading = document.getElementById("loading");

        // salvando no local storage e exibindo via alert


        // criando os botoes de salvar e exibir historico

        // fazer apagar o loading depois que carregar a pagina
        // loading.remove();

        // trocando texto da div dia-da-semana
        weekday.innerHTML = dayName[date.getDay()] + ", " + date.getDate() + " de " + monName[date.getMonth()] + " de " + date.getFullYear() + ".";

        // apresentando horario abaixo da data
        horario.innerHTML = hours + ":" + minutes;

        // Trocando texto da div de temperatura convertendo kelvin para celsius
        tempDiv.innerHTML = kelvinToCelsius(timerData.main.temp).toFixed(0) + "° C";

        // Trocando texto da div de descrição
        descriptionDiv.innerHTML = timerData.weather[0].description;
        // colocar aqui a descrição
        

        // Criando icone
        const iconImage = document.createElement("img");
        iconImage.src = `http://openweathermap.org/img/wn/${timerData.weather[0].icon}@2x.png`;

        // Adicionando icone ao body
        // container.insertBefore(iconImage);
        container.insertBefore(iconImage, container.children[2]);

        iconImage.style.zoom = '2';
    });
}

main();

