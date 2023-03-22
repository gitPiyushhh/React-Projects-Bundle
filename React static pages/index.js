function Navbar() {
  return (
    <h1
      className="navbar"
      style={{ backgroundColor: "rgba(19, 164, 109, 0.706)", margin: "0" }}
    >
      Navbar Component
    </h1>
  );
}

function MainContent() {
  return (
    <h1
      className="navbar"
      style={{ backgroundColor: "rgba(79, 20, 109, 0.706)", margin: "0" }}
    >
      Main Content
    </h1>
  );
}

function Footer() {
    return (
      <h1
        className="navbar"
        style={{ backgroundColor: "rgba(75, 90, 109, 0.706)", margin: "0" }}
      >
        Footer
      </h1>
    );
  }

ReactDOM.render(
  <div>
    <Navbar />
    <MainContent />
    <Footer />
  </div>,

  document.getElementById("root")
);
