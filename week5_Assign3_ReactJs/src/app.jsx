import { useRef, useReducer } from "react";

export let App = () => {
  let reduceFunc = (state,action) => {
    switch(action.type){
      case "Set_Fname" : return {...state, fname: action.fpayload}
      case "Set_Lname" : return {...state, lname: action.lpayload}
      case "Set_Phone" : return {...state, phone: action.ppayload}
      case "Set_Email" : return {...state, email: action.epayload}
      default : return state
    }
  }
  let fip= useRef()
  let lip= useRef()
  let pip= useRef()
  let eip= useRef()
  let [store,dispatch] = useReducer(reduceFunc, {fname : "Default", lname : "Default", phone : "Default", email: "Default"})
    return (
    <div className="container">
      <h2>Form using Reducer</h2>
      <div className="form-control mb-3">
      <h3>User Form</h3>
      <form action="#">

      <label htmlFor="fname">First Name</label>
      <input ref={fip} type="text" id="fname" className="form-control" required/>
      <br />

      <label htmlFor="lname">Last Name</label>
      <input ref={lip} type="text" id="lname" className="form-control" required/>
      <br />

      <label htmlFor="phone">Phone Number</label>
      <input ref={pip} type="number" id="phone" className="form-control" required/>
      <br />

      <label htmlFor="email">Email Address</label>
      <input ref={eip} type="email" id="email" className="form-control" required/>
      <br />
      <button onClick={() => {
        dispatch({type : "Set_Fname", fpayload : fip.current.value});
        dispatch({type : "Set_Lname", lpayload : lip.current.value});
        dispatch({type : "Set_Phone", ppayload : pip.current.value});
        dispatch({type : "Set_Email", epayload : eip.current.value});
        }} className="btn btn-danger">Send Details</button>
      </form>
      </div>
      <hr />
      <h5>First Name: {store.fname}</h5>
      <h5>Last Name: {store.lname}</h5>
      <h5>Phone Numebr: {store.phone}</h5>
      <h5>Email Address: {store.email}</h5>
    </div>
  )
}