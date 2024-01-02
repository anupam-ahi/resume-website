
import '../styles/Home.css'
import Navbar from '../components/Navbar';
function Home() {
    return (
      <>
      <div className="home-container"> 
        <Navbar />     
        
        
      </div>
      <div className="homepage-content">

          <div className="left">
            <img src="resume-website\public\IMG_4301.jpg" alt="My Image" />

          </div>

          <div className="right">
            <p>The best or nothing 
              
            </p>

          </div>
      </div>
      
      </>
        
    );
  }
  
  export default Home;
