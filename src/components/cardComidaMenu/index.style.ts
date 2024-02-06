import styled from 'styled-components'

export const CardComidaStyle = styled.div`
    background: #F0E4D4;
    width: 380px;
    height: 180px;
    border-radius: 20px;
    padding: 25px 40px;
    position: relative;

    &:hover {
        background: #ECC196;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    p {
        font-size: 0.9rem;
        font-weight: 400;
        margin-bottom: 20px;
        width: 80%;
    }

    .ContainerBtnsCardMenu {
        span {
            margin-right: 30px;
            font-weight: 600;
            font-size: 1.4rem;
        }

        button {
            border: 2px solid #FA9D3E;
            background: none;
            padding: 6px 20px;
            border-radius: 20px;
            font-weight: 500;

            &:hover {
                background: #FA9D3E;
                color: #fff;
                cursor: pointer;
            }
        }
    }

    img {
        width: 160px;
        height: 160px;
        position: absolute;
        top: 10px;
        right: -45px;
        border-radius: 50%;
    }
`;