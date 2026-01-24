import { GiSunflower } from "react-icons/gi";
import FirstText from "./FirstText";
import ImageDraSilvia from "./ImageDraSilvia";

const FirstSection = () => {
  return (
    <section
      id="inicio"
      className="flex flex-col gap-2 container mx-auto max-w-5xl"
    >
      <div className="flex flex-row gap-2 items-center text-green-900 px-2 mt-8">
        <GiSunflower size={24} />
        <h1 className="font-bold text-lg">
          Uma medicina que respeita o tempo certo do corpo
        </h1>
      </div>
      <div className="flex flex-col items-center md:flex-row gap-2 container md:justify-around p-2">
        <div className="min-w-2/5">
          <ImageDraSilvia />
        </div>
        <div>
          <FirstText />
        </div>
      </div>
    </section>
  );
};
export default FirstSection;
