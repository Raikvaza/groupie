// import './App.css';
// import Header from './components/Header';
// import Main from './components/Main';
// import React, { Component } from 'react';
// export const ENDPOINT = "http://localhost:4000";
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage';
import Artist from './pages/ArtistPage';
import './App.css';


export const ENDPOINT = "http://localhost:4000";

class App extends Component{
  render(){
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}> 
            {/* <Route index element={<Home />} /> */}
          <Route path="artist" element={<Artist />} />
            {/* <Route path="*" element={<Home />} /> */}
          </Route>
        </Routes>
      </Router>
    );
  }
}


export default App;

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

/*
button is pressed
sendPOST function updates updates the state of App
Main has props with the updated state
the send props will then be presented within a div of Main

*/