import React from 'react';
import { useLocation } from 'react-router-dom';

function Check() {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      {/* <div>{location.state.customerInfo}</div> */}
      {/* <div>{location.state.eventInfo}</div> */}
      {/* <div>
        {records.map((curElem) => {
          return (
            <div className='showData'>
              <p>{curElem.name}</p>
              <p>{curElem.email}</p>
              <p>{curElem.address}</p>
              <p>{curElem.city}</p>
              <p>{curElem.state}</p>
              <p>{curElem.zip}</p>
            </div>
          );
        })}
      </div> */}
       <div><b>Name:</b> {location.state.name}</div>
       <div><b>Email:</b>{location.state.email}</div>
      <div><b>Address:</b>{location.state.address}</div>
      <div><b>City:</b>{location.state.city}</div>
      <div><b>State:</b>{location.state.state}</div>
      <div><b>Zip:</b>{location.state.zip}</div>

      <div><b>Start Date:</b>{location.state.startDate}</div>
       <div><b>Start Time:</b>{location.state.startTime}</div>
      <div><b>End Date:</b>{location.state.endDate}</div>
      <div><b>End Time:</b>{location.state.endTime}</div>
      <div><b>setUp Date:</b>{location.state.setupDate}</div>
      <div><b>setUp Time:</b>{location.state.setupTime}</div>
      <div><b>Location:</b>{location.state.location}</div>
      <div><b>Payment Method:</b>{location.state.paymentMethod}</div>
      <div><b>Transport Charge:</b>{location.state.transportCharge}</div>
      <div><b>setUp Time:</b>{location.state.setupTime}</div>
    </>
  );
}

export default Check;
