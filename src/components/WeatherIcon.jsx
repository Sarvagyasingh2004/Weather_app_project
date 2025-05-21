import ClearSky from "../Icons/ClearSky.png";
import Clouds from "../Icons/Clouds.png";
import FewClouds from "../Icons/FewClouds.png";
import Mist from "../Icons/Mist.png";
import Rain from "../Icons/Rain.png";
import Snow from "../Icons/Snow.png";
import ThunderStorm from "../Icons/ThunderStorm.png";
const WeatherIcon = ({ weatherData }) => {
  const weatherIcons = {
    "Clouds": Clouds,
    "Clear": ClearSky,
    "Few Clouds": FewClouds,
    "Mist": Mist,
    "Rain": Rain,
    "Snow": Snow,
    "Haze": Mist,
    "Fog": Mist,
    "Thunderstorm": ThunderStorm,
  };

  const weatherMain = weatherData.weather[0].main;
  const iconSrc = weatherIcons[weatherMain];

  return (
    <div>
      <img src={iconSrc} alt={weatherMain} />
    </div>
  );
};

export default WeatherIcon;
