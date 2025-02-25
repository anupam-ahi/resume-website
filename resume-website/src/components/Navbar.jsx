// import '../styles/Navbar.css'
// import { Link } from 'react-router-dom'

// function Navbar(){
//     return (
//         <>
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//           <div class="collapse navbar-collapse" id="navbarNav">
//             <ul class="navbar-nav">
//               <li class="nav-item active">
//                 <Link class="nav-link disabled" to = "/">Home</Link>

//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link disabled" to = "/education">Education</Link>

//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link disabled" to = "/experience">Experience</Link>

//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link disabled" to = "/projects">Projects</Link>
                
//               </li>
//               <li class="nav-item">
//                 <Link  class="nav-link disabled" to = "/skills">Skills</Link>

//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link disabled"  to = "/research_work">Research Work</Link>
                
//               </li>
//             </ul>
//           </div>
//         </nav>
        
//         </>
//     )
// }

// export default Navbar


import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar(){
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">Home</Link>
              </li>
            </ul>
          </div>
        </nav>
        </>
    )
}

export default Navbar