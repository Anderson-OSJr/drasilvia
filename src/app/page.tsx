import ImageDraSilvia from "./components/ImageDraSilvia";
import MainNav from "./components/MainNav";

const Home = () => {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main className="mt-44">
        <ImageDraSilvia />
      </main>
      <footer>footer</footer>
    </>
  );
};
export default Home;
