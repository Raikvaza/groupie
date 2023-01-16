
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, useLoaderData } from "react-router-dom";
import Home from './routes/HomePage';
import Artist from './routes/ArtistPage';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";

export const ENDPOINT = "http://localhost:4000";

// export function sendArtistId(){
//   return useLoaderData();
// }



const router = createBrowserRouter([
{
  path: "/",
  element: <Home/>,
},
{
  path:"/artist",
  element: <Artist/>,
  
  // loader: ({params}) => {
  //   return params.para;
  // },
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

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