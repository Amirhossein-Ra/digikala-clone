import Slider from "./Components/Slider/Slider";
import Stories from "./Components/Stories";

export default function Home() {
  return (
    <div className="w-full h-auto">
      <Stories />
      <Slider />
    </div>
  );
}
