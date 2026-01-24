import { GiSunflower } from "react-icons/gi";

const SecondText = () => {
  return (
    <section
      id="profissional"
      className="flex flex-col gap-2 container mx-auto max-w-5xl mt-10"
    >
      <div className="flex flex-row gap-2 items-center text-green-900 px-2 mt-8">
        <GiSunflower size={24} />
        <h1 className="font-bold text-lg">O que isso significa na prática?</h1>
      </div>
      <SecondText />
    </section>
  );
};
export default SecondText;
