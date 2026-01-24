import MainNav from "./components/header/MainNav";
import Carousel_1 from "./components/main/Carousel_1";
import Contatos from "./components/footer/Contatos";
import FirstMainSection from "./components/main/FirstMainSection";
import SecondMainSection from "./components/main/SecondMainSection";
import ThirdMainSection from "./components/main/ThirdMainSection";

const Home = () => {
  return (
    <div>
      <header>
        <MainNav />
      </header>
      <main className="mt-36">
        <FirstMainSection />
        <SecondMainSection />
        <ThirdMainSection />
        <Carousel_1 />
      </main>
      <footer>
        <Contatos />
      </footer>
    </div>
  );
};
export default Home;
