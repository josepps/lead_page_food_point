import { FaStar, FaRegStar  } from "react-icons/fa";
import { CardFoodGaleryStyle } from "./index.style";

type CardFoodGalleryProps = {
    src: string;
    title: string;
    price: string;
}

export default function CardFoodGallery(props: CardFoodGalleryProps) {
    return (
        <CardFoodGaleryStyle>
            <img src={props.src} alt="" />
            <div className="info">
                <h3>{props.title}</h3>
                <p className="estrelas"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
                <p className="preco">{`$ ${props.price}`}</p>
            </div>
        </CardFoodGaleryStyle>
    )
}