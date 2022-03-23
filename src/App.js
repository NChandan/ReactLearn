import ErDiagram from "./svg_er/er";
import { useState } from "react";
import React, { Component } from 'react'
import ZeroOneSvg from "./svg_er/zeroOneSvg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoriz: true
    }
  }
  
  render() {
    // const [isHoriz, setIsHoriz] = useState(true);

    // const handleChangeChk = () => {
    //   console.log("isHoriz", isHoriz)
    //   setIsHoriz(!isHoriz)
    // }


    return (
      <div className="App">
        
        <ErDiagram />
        {/* <ZeroOneSvg /> */}
      </div>
    );
  }
}

export default App;
