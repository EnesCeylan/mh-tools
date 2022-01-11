import heroData from "../../../data/heroData";
import './HeroGuide.css'
const HeroGuide = ({ hero }) => {
    return (
        <div className="guide-container">
            <p className="guide-runes-title">SUGGESTED RUNE(S)</p>
            <div className="guide-runes-container">

                {heroData[hero].runes.map((rune, index) => (
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            '/assets/runes/' +
                            rune +
                            '.png'
                        }
                        alt={rune}
                        className="guide-rune"
                    />
                ))}
            </div>
            <p className="guide-artifacts-title">SUGGESTED ARTIFACT(S)</p>
            <div className="guide-artifacts-container">

                {heroData[hero].artifacts.map((artifact, index) => {
                    const artifactPNG = artifact.replace(/ /g, '_');
                    return (
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                '/assets/artifacts/' +
                                artifactPNG +
                                '.png'
                            }
                            alt={artifact}
                            className="guide-artifact"
                        />
                    )
                })}
            </div>
            <p className="guide-divinities-title">SUGGESTED DIVINITIES</p>
            <div className="guide-divinities-container">

                {heroData[hero].divinityNotables.map((divinity, index) => {
                    const divinityPNG = divinity.replace(/ /g, '_');
                    return (
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                '/assets/divinity/nodes/' +
                                divinityPNG +
                                '.png'
                            }
                            alt={divinityPNG}
                            className="guide-divinity"
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default HeroGuide;