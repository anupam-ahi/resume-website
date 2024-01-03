
import '../styles/Home.css'
import logo from './logo.jpg'
import Navbar from '../components/Navbar';
function Home() {
    return (
      <>
       
        <Navbar />   
        
        
      
      <div className="homepage-content">

          <div className = "left">
            <img src= {logo} alt="My Image" />

          </div>

          <div className="right">
            <ul style={{"list-style-type": "none"}}>
              <li>Anupam</li>
              <li>Pursuing masters in Computer Science at Seattle University</li>
              <li>Ex-Intern at Cognizant Technology Solutions and Reliance Jio</li>

              <li>Interests: Web Development (Backend), Cloud Computing (AWS, Firebase), Parallel Computing</li>
              <li>(425) 403 6760</li>
              <li><a href="mailto:sgollapalli@seattleu.edu">e-mail</a></li>
            </ul>
          </div>

      </div>
      
      </>
        
    );
  }
  
  export default Home;
