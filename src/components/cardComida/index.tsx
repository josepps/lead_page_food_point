import { CardComidaStyle } from "./index.style";

type CardComidaProps = {
    src: string;
}

export default function CardComida(props: CardComidaProps) {
    return (
        <CardComidaStyle>
            <h3>Enjoy Your Organic Food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officiis aspernatur repellat sequi ex numquam.</p>
            <input type="submit"  value={"Order Now"}/>
            <img src={props.src} alt={props.src} />
        </CardComidaStyle>
    )
}