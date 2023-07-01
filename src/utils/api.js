// weather api
export const getWeather = () => {
    fetch(`http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=NewYork`);
}