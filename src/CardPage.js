import InputMask from "react-input-mask";
import { useState } from 'react';

function CardPage(props) {

	let [ pay, setPayment]   = props.payment;

	let [ ccardNumber, setCcardNumber] = useState("");
	let [ cvv, setCvv] = useState("");
	
	let [ month, setMonth] = useState("");
	let [ year, setYear] = useState("");

	let ccardNumberChange = (ev) => {
        setCcardNumber(ev.target.value);
	};
	
	let cvvNumberChange = (ev) => {
        setCvv(ev.target.value);
    };

    let monthChange = (ev) => {
        setMonth(ev.target.value);
    };

	let yearChange = (ev) => {
        setYear(ev.target.value);
	};
	
    let moreClick = () => {
		
		let partialPayment = {  ccard : ccardNumber,
								expDate : month + '/' + year,
								cvv : cvv
							 };
		setPayment({...pay, ...partialPayment});
		// console.log({...pay, ...partialPayment});
		fetch('/save_payment', {
    		method: 'post',
			body: JSON.stringify({...pay, ...partialPayment}),
			headers:{'content-type': 'application/json; charset=UTF-8' }
  		}).then(function(data) {
    		console.log("Payment is complete");
  		});
	};
	
    return (
        <div>
			<p>Номер карты</p>
			<InputMask mask="9999 9999 9999 9999" onChange = {ccardNumberChange} value = {ccardNumber} />
			<p>Срок действия
			</p>
			<select onChange = {monthChange} >
				<option>select</option>
				<option>01</option>
				<option>02</option>
				<option>03</option>
				<option>05</option>
				<option>06</option>
				<option>08</option>
				<option>09</option>
				<option>10</option>
				<option>11</option>
				<option>12</option>
			</select>
			<select onChange = {yearChange} >
				<option>select</option>
				<option>2021</option>
				<option>2022</option>
				<option>2023</option>
				<option>2024</option>
				<option>2025</option>
			</select>
			<p>Код CVV2
			</p>
			<InputMask mask="999" onChange = {cvvNumberChange} value = {cvv} />
			
			<div className="checkout" onClick = { moreClick }>Дальше</div>
		</div>
    );
  }
  
  export default CardPage;
