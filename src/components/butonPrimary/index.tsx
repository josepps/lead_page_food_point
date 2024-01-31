import { ButtonPrimaryStyle } from "./index.style";

type ButtonPrimaryProps = {
    text: string,
    width: string,
    background: string,
    fontSize: string
}

export default function ButtonPrimary(props: ButtonPrimaryProps) {
    return (
        <ButtonPrimaryStyle 
            style={{ 
                width: `${props.width}`, 
                background: `${props.background}`, 
                fontSize: `${props.fontSize}` }}>
            {props.text}
        </ButtonPrimaryStyle>
    )
}