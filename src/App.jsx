import NavBar from './Navbar'
import Course from './Course'
import Footer from './Footer'
import './App.css'
import car1 from './assets/car.jpg'
import car2 from './assets/car2.jpg'
import car3 from './assets/car3.jpg'
function App() {

  return (
    <>
      <Course name="Lamborgini" price="$200" image={car1} show={false}/>
      <Course name="Defender" price="$500" image={car2} show={true}/>
      <Course name ="porsche" price="$150" image={car3} show={false}/>
    </>

  );
}

export default App
