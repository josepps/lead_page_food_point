import { CardComidaStyle } from "./index.style";

type CardComidaProps = {
    src: string,
    price: string,
    title: string,
}

export default function CardComidaMenu(props: CardComidaProps) {
    return (
        <CardComidaStyle>
            <h3>{props.title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste.</p>
            <div className="ContainerBtnsCardMenu">
                <span>{`$ ${props.price}`}</span>
                <button>Add To Cart</button>
            </div>
            <img src={props.src} alt={props.src} />
        </CardComidaStyle>
    )
}