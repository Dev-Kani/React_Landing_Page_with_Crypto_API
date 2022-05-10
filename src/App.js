import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import SignUp from './components/SignUp/SignUp'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Featured />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
