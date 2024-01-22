import { ButtonPrimaryStyle } from "./index.style";

type ButtonPrimaryProps = {
    text: string,
    width: string
}

export default function ButtonPrimary(props: ButtonPrimaryProps) {
    return (
        <ButtonPrimaryStyle style={{ width: `${props.width}` }}>{props.text}</ButtonPrimaryStyle>
    )
}