import {
    React,
    useState 
} from 'react';

import "./Darkmode.css";

const DarkMode = () => {
    const [ darkmode, setdarkmode ] = useState(false);
    const toggle = () => {
      setdarkmode(!darkmode);
    };
    return (
        <div className="darkmode-test">
            <div className={darkmode ? "dark-mode" : "light-mode"}>
                <h1 className="darkmode-title">Darkmode Test</h1>
                <button className="darkmode-button" onClick={ toggle }>
                    {darkmode ? 'Light' : 'Dark'}
                </button>
            </div>
        </div>
    );
};

export default DarkMode;