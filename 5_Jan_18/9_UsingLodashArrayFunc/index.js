/*//@flow*/
import React from 'react';
import ReactDOM from 'react-dom';
import Uc from "./Uc.jsx";
let ele=document.getElementById('root');
if(ele == null)
{
    throw new Error("Err in code");
}
ReactDOM.render(<Uc/>,ele);

