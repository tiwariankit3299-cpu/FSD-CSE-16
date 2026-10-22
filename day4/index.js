import React from "react";

// const divElement= <div>

//     <div id = "inner-div-1">
// <span>01</span>
// <span>01</span>
// <span>01</span>
// <span>01</span>
//     </div>
//     <div id = "inner-div-2">
//         <span>02</span>
//         <span>02</span>
//         <span>02</span>
//         <span>02</span>
//         </div> 
// </div>
const div = document.getElementById("root");
const root = ReactDOM.createRoot("div");
const divElement= <div>

    <div id = "inner-div-1">
<span>01</span>
<span>01</span>
<span>01</span>
<span>01</span>
    </div>
    <div id = "inner-div-2">
        <span>02</span>
        <span>02</span>
        <span>02</span>
        <span>02</span>
        </div> 
</div>
//const h1 = React.createElement("h1",{},"Welcome to the FSD class!");
  // React.createElement("div",{id:"inner-div-1"},[
    //React.createElement("span",{},"01"),
    //React.createElement("span",{},"01"),
    //React.createElement("span",{},"01"),
   // React.createElement("span",{},"01")
   //]),
   //React.createElement("div",{id:"inner-div-2"},[
   // React.createElement("span",{},"01"),
   // React.createElement("span",{},"01"),
    //React.createElement("span",{},"01"),
    //React.createElement("span",{},"01")
   //])
root.render(divElement);
