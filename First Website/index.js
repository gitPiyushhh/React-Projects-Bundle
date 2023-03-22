import Header from './Components/Header';
import Heading from './Components/Heading';
import List from './Components/List';
import Footer from './Components/Footer';

function Temporary() {
  return (
    <div>
      <img src="./Logo.png" alt="Logo" width="50px" />
      <h1>Fun Facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was orignally created by Jordan Walkee</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

function MainComponent() {
  return (
    <div>
      <Header />

      <Heading />

      <List />

      <Footer />
    </div>
  );
}

// USING THE VARIABLE TO RENDER
// const page = (
//     <div>
//         <img src="./Logo.png" alt="Logo"  width="200px"/>
//         <h1>Fun Facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was orignally created by Jordan Walkee</li>
//             <li>Has well over 100k stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// );

// ReactDOM.render(<Temporary />, document.getElementById("root"));
ReactDOM.render(<MainComponent />, document.getElementById("root"));
