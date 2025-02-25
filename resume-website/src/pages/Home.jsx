
import '../styles/Home.css'
import logo from './logo.jpg'
function Home() {
  return (
    <>
      <div className="homepage-content">

        <div className="left">
          <img src={logo} alt="My Image" />

        </div>

        <div className="right">
          <ul style={{ "list-style-type": "none" }}>
            <li>Anupam</li>
            <li>Masters in Computer Science at Seattle University</li>
            <li>Ex-Intern at Cognizant Technology Solutions and Reliance Jio</li>

            <li>Interests: Web Development (Backend), Cloud Computing (AWS, Firebase), Parallel Computing</li>
            <li>(425) 403 6760</li>
            <li><a href="mailto:sgollapalli@seattleu.edu">e-mail</a></li>
            <a href="https://drive.google.com/file/d/18AP3-kwiqKnHJWgy_iWCxTnP7KYedb4P/view" target="_blank" rel="noopener noreferrer">
              <button>View My Resume</button>
            </a>
            <a href="/chat" target="_blank" rel="noopener noreferrer">
              <button>Chat with Anupam's AI Assistant</button>
            </a>
          </ul>
        </div>

      </div>

    </>

  );
}

export default Home;
