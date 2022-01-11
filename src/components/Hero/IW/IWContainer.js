import IWDescription from "./IWDescription";
import IWStat from "./IWStat";
import { useState } from "react";

const IWContainer = ({ heroName }) => {
    const IWtype = ['Description', 'Stat'];
    const [currentType, setCurrentType] = useState('Description')
    return (
        <div>
            {IWtype.map((type, index) => (
                <button
                    className="IW-button"
                    onClick={() => setCurrentType(type)}
                    key={index}
                >
                    {type}
                </button>
            ))}

            {currentType === 'Description' && <IWDescription hero={heroName.replace(/-/g, ' ')} />}
            {currentType === 'Stat' && <IWStat />}
        </div>
    );
}

export default IWContainer;