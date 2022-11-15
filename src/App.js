import Navbar from "./components/navbar";
import Main from "./components/main";
import AboutMe from "./components/aboutMe";
import Pets from "./components/pets";
import NyanCat from "./components/nyanCat";
import Fat from "./components/fat";
import Footer from "./components/footer";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Main />
      <NyanCat />
      <AboutMe />
      <Fat />
      <Pets />
      <Footer />
    </div>
  );
}

export default App;
