import { FaStar } from "react-icons/fa";

import { CardCustomerRevewstyle } from "./index.style";

type propsCardCustomerRevew = {
    src: string;
    nome: string;
}

export default function CardCustomerRevew(props: propsCardCustomerRevew) {
    return (
        <CardCustomerRevewstyle>
            <div className="CardCustomerInfo">
                <img src={props.src} alt="" className="ImgCardCustomer"/>
                <div>
                    <h3>{props.nome}</h3>
                    <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                </div>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum distinctio non sapiente eum? Temporibus iusto error, ipsam iste quos sequi necessitatibus harum, reprehenderit fugit, eaque doloremque ipsum.</p>
        </CardCustomerRevewstyle>
    )
}