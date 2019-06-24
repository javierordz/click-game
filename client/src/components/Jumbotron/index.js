import React from "react";
import "./style.css";

const Jumbotron = props => 
    <div
      style={{  
                clear: "both", 
                paddingTop: 100, 
                textAlign: "center",
                background: "#A3BCF9"
              }}

      className="jumbotron"
    >
      {props.children}
    </div>

export default Jumbotron;