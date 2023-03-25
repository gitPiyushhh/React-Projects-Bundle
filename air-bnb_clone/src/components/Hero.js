import logo from "./../Images/Photo grid.png";

export default function Hero() {
  return (
    <div className="u-flex-col">
      <img src={logo} alt="Hero Image" className="hero-image" />

      <div className="text-container">
        <h1 className="h1">Online Experiences</h1>
        <p className="p">
          Join unique interactive activities led by<br /> one-of-a-kind hosts—all
          without leaving <br /> home.
        </p>
      </div>
    </div>
  );
}
