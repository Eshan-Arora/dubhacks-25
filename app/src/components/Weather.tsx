import sunImage from "../assets/sun.png";

export type WeatherProps = {

};

export function Weather() {
  return (
    <div className="py-2">
      <img className="absolute h-[256px] w-[256px] right-[-90px] top-[-70px] z-1" src={sunImage} />
      <h3 className="text-white text-shadow-lg text-left text-2xl font-bold">26 °F</h3>
      <h3 className="text-white text-shadow-lg text-left text-lg">Humidity: 70%</h3>
    </div>
  );
}
