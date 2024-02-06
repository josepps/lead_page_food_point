import { BtnTypeMenuStyle } from "./index.style";

type BtnTypeMenuProps = {
    src: string;
    text: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    action?: any;
}

export default function BtnTypeMenu(props: BtnTypeMenuProps) {
    return (
        <BtnTypeMenuStyle onClick={props.action}>
            <img className="imgBtnTypeMenu" src={props.src} alt="" />
            <p className="textBtnTypeMenu">{props.text}</p>
        </BtnTypeMenuStyle>
    )
}