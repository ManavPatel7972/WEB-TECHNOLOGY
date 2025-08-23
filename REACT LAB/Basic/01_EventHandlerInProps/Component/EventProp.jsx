import React from "react";

const EventProp = () => {
  const handleWelcomeUser = (user) => {
    alert(`hey ${user}`);
  };

  const handleHover = () => {
   alert("Hello From Hovering")
   
  };

  return (
    <>
      <WelcomeUser
        onBtnClick={() => {
          handleWelcomeUser("Manav");
        }}
        onBtnMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (prop)=>{

  const greet = ()=>{
    console.log("Helllo From Greitn;;;;");
  }

  return(
    <>
    <button onClick={()=>prop.onBtnClick()}>Click Me</button>
    <button onMouseEnter={prop.onBtnMouseEnter}>Hover Me</button>
    <button onClick={()=>greet()}>Greeting</button>
    </>
  )
}

export default EventProp;
