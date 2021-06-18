import {useState} from "react";
import './App.js';

function Dropdown () {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("Choose One");
    const options = ['React', 'Vue', 'Angular'];
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => 
            setIsActive(!isActive)}>
                {selected}
                <span className="fas fa-caret-down">▼</span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div onClick={(e) => {
                                setSelected(option);
                                setIsActive(false);
                            }}className="dropdown-item">
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
