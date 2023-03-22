import Navbar from "./Components/About";
import Button from "./Components/Button";
import MainComponent from "./Components/Info";

import image from './Images/wp4923979-react-js-wallpapers.png'

export default function App() {
  return (
    <div>
    <img src={image} alt="My image" className="hero-image"/>
      <Navbar />
      <Button />
      <MainComponent heading="About" />
      <MainComponent heading="Interests" />
    </div>
  );
}
