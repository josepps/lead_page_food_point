import { BtnDeliverStyle } from "./index.style";

type BtnDeliverProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icone: any,
    text: string,
}

export default function BtnDeliver(props: BtnDeliverProps) {
    return (
        <BtnDeliverStyle>
            <span className="spanBtnDeliver">{props.icone}</span>
            <p>{props.text}</p>
        </BtnDeliverStyle>
    )
}


