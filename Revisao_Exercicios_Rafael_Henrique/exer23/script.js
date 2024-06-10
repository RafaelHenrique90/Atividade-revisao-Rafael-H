/* Rafael Henrique Braga de Morais */
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const cityInput = document.getElementById('city-input');
    const weatherInfo = document.getElementById('weather-info');

    searchButton.addEventListener('click', function() {
        const city = cityInput.value.trim();
        if (city !== '') {
            getWeather(city);
        }
    });

    async function getWeather(city) {
        const apiKey = '1a2f719d34cdeaf7d4093dd7e96e60b8'; 
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric";

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.cod === 200) {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const cityName = data.name;
                const country = data.sys.country;

                weatherInfo.innerHTML = `
                    <h2>${cityName}, ${country}</h2>
                    <p>Temperatura: ${temperature}°C</p>
                    <p>Descrição: ${description}</p>
                `;
            } else {
                weatherInfo.innerHTML = '<p>Cidade não encontrada. Por favor, verifique o nome da cidade e tente novamente.</p>';
            }
        } catch (error) {
            console.error('Erro ao obter dados meteorológicos:', error);
            weatherInfo.innerHTML = '<p>Ocorreu um erro ao obter os dados meteorológicos. Por favor, tente novamente mais tarde.</p>';
        }
    }
});