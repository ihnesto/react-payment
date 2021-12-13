import PhonePage from "./PhonePage";
import CardPage from './CardPage';
import {useState} from "react";

function App(props) {

  const [isCardPage, showCardPage] = useState(false);
  

  let payment = useState({
    phone : "",
    sum : "",
    ccard : "",
    expDate : "",
    cvv : ""
  });
  
  
  return (
    <div className="App">
       {isCardPage === false ? 
          <PhonePage 
            showCardPage = { showCardPage } 
            payment = { payment }
          /> : 
          <CardPage 
            payment = { payment }
          />}
    </div>
  );
}

export default App;
