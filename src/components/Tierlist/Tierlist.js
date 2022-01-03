import { useState } from "react/cjs/react.development";
import TierListData from "../../data/TierListData";
import './Tierlist.css';
import TierlistHeroBox from "./TierlistHeroBox";
const Tierlist = () => {

    const [types, setTypes] = useState(["PvP", "Early", "Mid", "Late", "Boss"])
    const [currentType, setCurrentType] = useState("PvP");
    const [CurrentIndex, setCurrentIndex] = useState(0);
    function setType(type) {
        setCurrentType(type)
        switch (type) {
            case "PvP":
                setCurrentIndex(0);
                break;
            case "Early":
                setCurrentIndex(1);
                break;
            case "Mid":
                setCurrentIndex(2);
                break;
            case "Late":
                setCurrentIndex(3);
                break;
            case "Boss":
                setCurrentIndex(4);
                break;
            default:
            // code block
        }
    }

    return (
        <div className="tierlist-main-container">
            <div className="tierlist-type-button-container">
                {types.map((type) => (
                    <input
                        alt=""
                        type="image"
                        src={type === currentType ? process.env.PUBLIC_URL + "/assets/tierlist-button/Button_" + type + "_Active.png" : process.env.PUBLIC_URL + "/assets/tierlist-button/Button_" + type + "_Inactive.png"}
                        key={type}
                        className={"tierlist-type-button " + type}
                        onClick={() => setType(type)}
                    />
                ))}
            </div>
            <div className="type-container">
                {TierListData[CurrentIndex].content.map((tier, index) => {
                    return (
                        <div className={"tierlist-container " + TierListData[CurrentIndex].name}>
                            <img src={process.env.PUBLIC_URL + "/assets/tierlist-button/" + tier.tier + ".png"}
                                alt=""
                                className="grade"
                            />
                            <div className="tierlist-grade-container" key={index}>
                                {tier.characters.map((hero) => {
                                    const heroname = hero.replace(/_/g, " ");
                                    console.log(tier)
                                    return (
                                        <TierlistHeroBox hero={hero} heroname={heroname} />
                                    )
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Tierlist;
/*
<div className={'tier-' + index} key={index}>
                            {tier.map((hero, index) => {
                                <div key={index}>
                                    test
                                </div>
                            })}
                        </div>
*/