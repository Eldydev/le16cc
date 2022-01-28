import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed, step } = props;
  
    const containerStyles = {
      height: 20,
      width: '80%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50,
      marginLeft: "10%"
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundImage: "linear-gradient(to top, rgba(116,219,132,0.3), #74DB84)",
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out',
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${step}/5`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
  