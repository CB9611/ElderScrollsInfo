import {
    React,
    useState 
} from 'react';

import TestImage from '../../../Images/backgroundimg-home.jpg';
import "./UseStateTest.css";

const UseStateTest = () => {
    const [ short, setmode ] = useState(false);
    const toggle = () => {
      setmode(!short);
    };
    return (
        <div className="useStateTest-test">
            <div className={short ? "tall-module" : "short-module"}>
                <h1 className="useStateTest-title">UseState Testing Grounds</h1>
                <button className="useStateTest-button" onClick={ toggle }>
                    {short ? 'or Tall?' : 'Short?'}
                </button>
            </div>
        </div>
    );
};

export default UseStateTest;