import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import GameList from './GameList';
// import UPIPayment from 'react-upi-payment';

function SignInButton({ onSignIn }) {
  return (
    <button onClick={onSignIn}>Game List</button>
  );
}
function Info() {

  const [isSignedIn, setIsSignedIn] = useState(false);
  function handleSignIn() {
    setIsSignedIn(true);
  }
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });
  function goTocheck(){
    navigate("/check",{state: {name:customerInfo.name, email:customerInfo.email, address:customerInfo.address,
      city:customerInfo.city,starDate:eventInfo.starDate,
    startTime:eventInfo.startTime,
    endDate:eventInfo.endDate,
    endTime:eventInfo.endTime,
    setupDate:eventInfo.setupDate,
    setupTime:eventInfo.setupTime,
    location:eventInfo.location,
    paymentMethod:eventInfo.paymentMethod,
    transportCharge:eventInfo.transportCharge,
    distance:eventInfo.distance, }})
}

const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart([...cart, game]);
  };

  const [eventInfo, setEventInfo] = useState({
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    setupDate: '',
    setupTime: '',
    location: '',
    paymentMethod: '',
    transportCharge: '',
    distance: ''
  });

  const [records, setRecords] = useState([]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    const newRecord = {...customerInfo, ...eventInfo, id:new Date().getTime().toString()};

    setRecords([...records, newRecord])

    setCustomerInfo({name:"",email:"", address:"",city:"",state:"",zip:""})
    setEventInfo({startDate:"",startTime:"", endDate:"",endTime:"",setupDate:"",setupTime:"",location:"",paymentMethod:"",
  transportCharge:"",distance:""})
  }


  function handleInputChange(event) {
    const { name, value } = event.target;
    setCustomerInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleEventInputChange(event) {
    const { name, value } = event.target;
    setEventInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  return (
    <div>
      <h1>Information</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={customerInfo.name} onChange={handleInputChange} required /><br/><br/>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={customerInfo.email} onChange={handleInputChange} required /><br/><br/>

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={customerInfo.address} onChange={handleInputChange} required /><br/><br/>

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" value={customerInfo.city} onChange={handleInputChange} required /><br/><br/>

        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" value={customerInfo.state} onChange={handleInputChange} required /><br/><br/>

        <label htmlFor="zip">Zip:</label>
        <input type="text" id="zip" name="zip" value={customerInfo.zip} onChange={handleInputChange} required /><br/><br/>

        <label htmlFor="startDate">Start Date:</label>
        <input type="date" id="startDate" name="startDate" value={startDate.toISOString().split('T')[0]} onChange={(e) => setStartDate(new Date(e.target.value))} /><br/><br/>

        <label htmlFor="startTime">Start Time:</label>
        <input type="time" id="startTime" name="startTime" value={eventInfo.startTime} onChange={handleEventInputChange} required /><br/><br/>

        <label htmlFor="endDate">End Date:</label>
        <input type="date" id="endDate" name="endDate" value={eventInfo.endDate} onChange={handleEventInputChange} required /><br/><br/>

        <label htmlFor="endTime">End Time:</label>
        <input type="time" id="endTime" name="endTime" value={eventInfo.endTime} onChange={handleEventInputChange} required /><br/><br/>

        <label htmlFor="setupDate">Setup Date:</label>
        <input type="date" id="setupDate" name="setupDate" value={eventInfo.setupDate} onChange={handleEventInputChange} required /><br/><br/>

        <label htmlFor="setupTime">Setup Time:</label>
        <input type="time" id="setupTime" name="setupTime" value={eventInfo.setupTime} onChange={handleEventInputChange} required /><br/><br/>

        {isSignedIn ? <GameList /> : <SignInButton onSignIn={handleSignIn} />} <br/><br/>
        <button onClick={() => addToCart(records)}>Add to Cart</button><br/>
        {/* <UPIPayment
    upiId="yourupi@upi" 
    amount="10" // replace with the amount to be paid
    message="Payment for goods" // replace with the payment message
    transactionId="transaction-12345" // replace with a unique transaction ID
    merchantCode="1234" // replace with your merchant code
    currency="INR" // replace with the currency code
>
    <button>Pay with UPI</button> 
</UPIPayment> */}


        <Button  onClick={goTocheck}> save</Button> <br/>

        
        {/* <Button type='submit'>Save</Button> */}

        <div>

       
            {/* {
                records.map((curElem) =>{
                    return (
                        <div className='showData'>
                        <h3>Check Out</h3>
                            <p> {curElem.name}</p>
                            <p>{curElem.email}</p>
                            <p>{curElem.address}</p>
                            <p>{curElem.city}</p>
                            <p>{curElem.state}</p>
                            <p>{curElem.zip}</p>
                            <p>{curElem.startDate}</p>
                            <p>{curElem.startTime}</p>
                            <p>{curElem.endDate}</p>
                            <p>{curElem.endTime}</p>
                            <p>{curElem.setupDate}</p>
                            <p>{curElem.setupTime}</p>
                            <p>{curElem.location}</p>
                            <p>{curElem.paymentMethod}</p>
                            <p>{curElem.transportCharge}</p>
                            <p>{curElem.distance}</p>
                        </div>
                    )
                })
            } */}
        </div>
</form>
</div>
  )}
  export default Info

