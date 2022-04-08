
import './App.css';
import Join from "./component/Join/Join";
import Chat from './component/Chat/Chat';



import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//import Chat from "./component/Chat/Chat"



function App() {

  return (
      <Router>

      
        <Routes>
          


        <Route path="/" element={ <Join/> } />
        <Route path="/chat" element={ <Chat/> } />
       
      
        </Routes>
      
      </Router>


  );
}

export default App;
