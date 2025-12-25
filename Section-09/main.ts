function greet(name: string): string {
    return `Hello, ${name}!`;
} 

function todaysWeather(): {date: Date, weather: string}{
    return {date: new Date(), weather: "sunny"}
}       

interface Weather {
    date: Date;
    weather: string;
}

type WeatherFunction = () => Weather;

const getWeather: WeatherFunction = todaysWeather;      

let weatherToday = todaysWeather();
console.log(`Date: ${weatherToday.date}, Weather: ${weatherToday.weather}`);

console.log(greet("World"));

export {}
