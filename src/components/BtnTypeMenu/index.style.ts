import styled from 'styled-components'

export const BtnTypeMenuStyle = styled.div`
    width: 175px;
    height: 60px;
    background: #F1E4D1;
    display: flex;
    align-items: center;
    border-radius: 27px;
    margin-bottom: 24px;
    cursor: pointer;

    &:hover {
        background: #FE9F39;
    }

    .imgBtnTypeMenu {
        width: 45px;
        height: 45px;
        margin: 0 12px;
        border-radius: 50%;
    }

    .textBtnTypeMenu {
        font-size: 1.3rem;
        font-weight: 600;
    }
`;