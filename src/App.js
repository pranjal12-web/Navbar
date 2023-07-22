import './App.css';
import React, { Component, useState } from 'react';
 
class App extends Component(){
state ={clicked:false};

  handleClick = () =>{
    this.setState({clicked:
      !this.state.clicked
    })
  }
   render(){

  return(
    <>
    <nav>
      <a> <img src="https://s3-alpha-sig.figma.com/img/8e2a/8860/2a806a53f874ca823d7be65b67078cd3?Expires=1690761600&Signature=LjnV3y6S8MXxRa9xxDUh-T-gdBTQsSBGW1I1lniq4O81QPXH73RCv4X5LBqBDNCstIiGFTkCCqetuDib~-Ef7NKJtl5kWV-6ml5N72cfaGAfbK7YDLUsMM3lODkErZYxQlHykCcQJA66HoWD5Q9UxrR6pHOjFHK2o~o3hh~jbAv5CtaZ2YgylJ~VB8Xn14hjZBNaPZH1di7RnRUCArtneNnTgqdridDiCrhPki7c~PRPyKP4yELf7CpyQl1dKibo~~5rVrLLfJT1ycgzHVU9qWz9RHoOar5o99NK7OqmYxcM1IieMEozxLLElOSCvQrk14~ojUBEcl~yaWIqMwKYig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='image'></img></a>
      
   <div>
  
    <ul id='navbar' className={this.state.clicked?"#navbar active":"#navbar"} >
      <li ><a href="#" className="a">Home</a> <hr id='underline'></hr></li>
      <li><a href="#" className="a">Projects</a> <hr id='underline'></hr></li>
      <li><a href="#" className="a">TinkerNext</a><hr id='underline'></hr></li>
      <li><a href="#" className="a">Facilities</a><hr id='underline'></hr></li>
      <li><a href="#" className="a">Events</a><hr id='underline'></hr></li>
      <li><a href="#" className="a">About</a><hr id='underline'></hr></li>
      <li className='para'>
        <div className='logo'>
          <div><img src='https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg' className='img'></img></div>
          <div>LorenIpsum<br></br><div id='iit'>IIT Roorkee</div></div>
        </div>
      </li>
      </ul>
      
  </div>

  <div className='mobile' onClick={this.handleclick}>
    <i id='bar' className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
  </div>
  
    </nav>
     </>
  );
  }
}


export default App;
