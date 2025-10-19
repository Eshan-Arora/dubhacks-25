import { useRef } from "react";
import sunImage from "../assets/sun.png";

export type WeatherProps = {
};

export function Weather() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="py-2"
      ref={containerRef}
    >
      <img className={`absolute top-[-90px] right-[-90px] h-[256px] w-[256px] z-1`} src={sunImage} />
      <h3 className="text-white text-shadow-lg text-left text-2xl font-bold z-2">26 °F</h3>
      <h3 className="text-white text-shadow-lg text-left text-lg z-2">Humidity: 70%</h3>
    </div>
  );
}
