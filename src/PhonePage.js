import InputMask from "react-input-mask";
import {useState} from 'react';
import "./PhonePage.css";

function PhonePage(props) {

    let { showCardPage, payment: [ pay, setPayment ] }  = props;
    
    let [ phoneNumber, setPhoneNumber] = useState("");
    let [ sum, setSum] = useState("");


    let phoneNumberChange = (ev) => {
        setPhoneNumber(ev.target.value);
    };

    let sumChange = (ev) => {
        setSum(ev.target.value);
    };

    let moreClick = () => {
        let partialPayment = {  phone : phoneNumber, 
                                sum : sum 
                            };
                            
        setPayment({...pay, ...partialPayment});
        // console.log({...pay, ...partialPayment});
        showCardPage(true);

    };

    return (
        <div>
            <p>Номер мобильного телефона</p>

            <InputMask mask="+38(099) 999-99-99" onChange = {phoneNumberChange}  value={ phoneNumber } />

            <p className="amount">Сумма пополнения</p>
            <InputMask mask="9999.99" onChange = {sumChange} value={sum} className="sum2" placeholder="Другая сумма" />
            
            <div className="more" onClick = { moreClick }>Дальше</div>
        </div>
    );
  }
  
  export default PhonePage;
