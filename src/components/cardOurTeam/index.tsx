import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { CardOurTeamStyle } from "./index.style";

type propsCardOurTeam = {
    src: string;
    title: string;
    subTitle: string;
}

export default function CardOurTeam(props: propsCardOurTeam) {
    return (
        <CardOurTeamStyle>
            <img src={props.src} alt="" />
            <div className="infoOurTeam">
                <h3>{props.title}</h3>
                <p className="subTitle">{props.subTitle}</p>
                <p className="icones">
                    <span><FaInstagram /></span>
                    <span><FaFacebook /></span>
                    <span><FaTwitter /></span>
                </p>
            </div>
        </CardOurTeamStyle>
    )
}