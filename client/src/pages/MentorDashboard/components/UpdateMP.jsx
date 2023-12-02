import React,{useState} from "react";
import userIcon from "../assets/user.png";
function UpdateMP() {
  const data={
    firstName:"ram",
    lastname:"sita",
    Email:"Ram@gmail.com",
    bio:"my name is ram, i am from ayodhya",
    acQua:"bTech",
    LinkedIn:"https://www.w3schools.com/",
    portfolio:"https://www.w3schools.com/"
  }
  const [fn,setFirstName]=useState(data.firstName)
  const [ln,setlastName]=useState(data.lastname)
  const [em,setEmail]=useState(data.Email)
  const [bi,setBio]=useState(data.bio)
  const [aq,setAq]=useState(data.acQua)
  const [li,setLinkedIn]=useState(data.LinkedIn)
  const [pt,setPortfolio]=useState(data.portfolio)

  function firstNameHandler(event){
    setFirstName(event.target.value);
  }
  function lastNameHandler(event){
    setlastName(event.target.value);
  }
  function emailHandler(event){
    setEmail(event.target.value);
  }
  function bioHandler(event){
    setBio(event.target.value);
  }
  function aqHandler(event){
    setAq(event.target.value);
  }
  function linkedInHandler(event){
    setLinkedIn(event.target.value);
  }
  function portfolioHandler(event){
    setPortfolio(event.target.value);
  }
  function submitHandler()
  {
    console.log(fn);
    console.log(ln);
    console.log(em);
    console.log(bi);
    console.log(aq);
    console.log(li);
    console.log(pt);
  }
  return (
    <>
      <div className="updateMP-wrapper">
        <div className="updateMP-top">
          <img src={userIcon} className="updateMP-userIcon" />
        </div>
        <div className="updateMP-bottom">
          <div className="updateMP-bottom1">
            <div>
              <div className="updateMP-input-wrapper">
                <label>First Name</label>
                <br></br>
                <input type="text" className="updateMP-input1" value={fn} onChange={firstNameHandler}></input>
              </div>
              <div className="updateMP-input-wrapper">
                <label>Email Id</label>
                <br></br>
                <input type="email" className="updateMP-input1" value={em} onChange={emailHandler}></input>
              </div>
              <div className="updateMP-input-wrapper">
                <label>Date of Birth</label>
                <br />
                <input type="date" className="updateMP-input-date" />
              </div>
              <div className="updateMP-input-wrapper">
                <label>Bio</label>
                <br></br>
                <textarea className="updateMP-input-bio"  value={bi} onChange={bioHandler}></textarea>
              </div>
              
            </div>
          </div>
          <div className="updateMP-bottom2">
            <div>
              <div className="updateMP-input-wrapper">
                <label>Last Name</label>
                <br></br>
                <input  type="text" className="updateMP-input1"  value={ln} onChange={lastNameHandler}></input>
              </div>
              <div className="updateMP-input-wrapper">
                <label>Academic Qualifications</label>
                <br></br>
                <input  type="text" className="updateMP-input" value={aq}  onChange={aqHandler}></input>
              </div>
              <p className="updateMP-socials">
                <u>Socials</u>
              </p>
              <div className="updateMP-input-wrapper">
                <label>LinkedIn</label>
                <br></br>
                <input  type="url" className="updateMP-input1"  value={li} onChange={linkedInHandler}></input>
              </div>
              <div className="updateMP-input-wrapper">
                <label>portfolio</label>
                <br></br>
                <input  type="url" className="updateMP-input"  value={pt} onChange={portfolioHandler}></input>
              </div>
            </div>
          </div>
        </div>
        <div className="updateMP-update">
          <button className="updateMP-updateBtn" onClick={submitHandler}>Update</button>
        </div>
      </div>
    </>
  );
}

export default UpdateMP;
