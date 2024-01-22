import { FaStar, FaRegStar  } from "react-icons/fa";
import { InfoImgStyle } from "./index.style";

type InfoImgMainProps = {
    src: string,
    alt: string,
    textitle: string,
    texClassificacao: boolean,
    texPrice?: string,
    textsubtitle?: string
}

export default function InfoImgMain(props: InfoImgMainProps) {
    return (
        <InfoImgStyle>
            <div className="containerCirculoImg">
                <img className="imgInfoMain" src={props.src} alt={props.alt} />
            </div>
            <div className="containerPsInfoImg">
                <p className="p1">{props.textitle}</p>
                {props.texClassificacao ? <p className="p2"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p> : <></>}
                <p className="p3">{props.texPrice}</p>
                <p className="p4">{props.textsubtitle}</p>
            </div>
        </InfoImgStyle>
    )
}