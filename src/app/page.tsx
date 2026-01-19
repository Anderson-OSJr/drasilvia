import Carousel_1 from "./components/Carousel_1";
import Contatos from "./components/Contatos";
import ImageDraSilvia from "./components/ImageDraSilvia";
import MainNav from "./components/MainNav";

const Home = () => {
  return (
    <div>
      <header>
        <MainNav />
      </header>
      <main className="mt-44">
        <ImageDraSilvia />
        <Carousel_1 />
      </main>
      <footer>
        <Contatos />
      </footer>
    </div>
  );
};
export default Home;
