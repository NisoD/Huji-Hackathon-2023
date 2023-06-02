import Fridge from './In_fridge';
import Navbar from './navbar';
import Home from './home';
import Time from './time';
import Calories from './calories';
import Restrictions from './restrictions';
// import Homepage from './Homepage';
import './Homepage.css'

function App() {
  const link = "https://www.youtube.com/shorts/RupMy5y46TM";
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Navbar />
      <Fridge />
      <Time/>
      <Calories/>
      <Restrictions/>


      <div className="content"></div>
      {/* <Home /> */}
      
      {/* <a href={link}> Go to Google</a> */}
    </div>
  );
}

export default App;



