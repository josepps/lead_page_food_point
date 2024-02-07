import styled from 'styled-components'

export const CardFoodGaleryStyle = styled.div`
    width: 275px;
    height: 205px;
    position: relative;
    margin-bottom: 25px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 12px;
    }

    .info {
        width: 200px;
        height: 100px;
        background: #F0E4D4;
        position: absolute;
        bottom: 16px;
        left: 15%;
        border-radius: 12px;
        text-align: center;
        padding-top: 10px;

        .estrelas {
            color: #df801a;
            margin-bottom: 2px;
            margin: 8px 0;
        }

        .preco {
            font-size: 1.2rem;
            font-weight: 600;
        }
    }
`;