import weaponData from "../../../data/weaponData";
const IWDescription = ({ hero }) => {
    return (
        <div>
            <h1>{weaponData[hero].firstWeapon.name}</h1>
            <p>{weaponData[hero].firstWeapon.lv100}</p>
            <p>{weaponData[hero].firstWeapon.lv200}</p>
            <p>{weaponData[hero].firstWeapon.lv300}</p>
            <p>{weaponData[hero].firstWeapon.lv400}</p>
        </div>
    );
}

export default IWDescription;