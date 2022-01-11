import weaponData from "../../../data/weaponData";
import './IWPage.css'
const IWDescription = ({ hero }) => {
    return (
        <div>
            <p className="weapon-name">{weaponData[hero].firstWeapon.name}</p>
            <p className="weapon-skill one">Lv.100: {weaponData[hero].firstWeapon.lv100}</p>
            <p className="weapon-skill two">Lv.200: {weaponData[hero].firstWeapon.lv200}</p>
            <p className="weapon-skill three">Lv.300: {weaponData[hero].firstWeapon.lv300}</p>
            <p className="weapon-skill four">Lv.400: {weaponData[hero].firstWeapon.lv400}</p>
        </div>
    );
}

export default IWDescription;