import styled from 'styled-components'

export const CardComidaStyle = styled.div`
    background: #F0E4D4;
    width: 450px;
    border-radius: 20px;
    padding: 25px 40px;
    position: relative;

    h3 {
        width: 50%;
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    p {
        font-size: 0.9rem;
        font-weight: 400;
        margin-bottom: 20px;
        width: 80%;
    }

    input {
        width: 140px;
        height: 50px;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 25px;
        border: none;
        background: #FCA039;
        cursor: pointer;

        &:hover {
            background: #dc811c;
        }
    }

    img {
        width: 180px;
        height: 180px;
        position: absolute;
        top: 30px;
        right: -45px;
        border-radius: 50%;
    }
`;