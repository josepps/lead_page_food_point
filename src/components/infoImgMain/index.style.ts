import styled from 'styled-components'

export const InfoImgStyle = styled.button`
    width: 200px;
    height: 70px;
    border-radius: 35px;
    border: none;
    background: #F0E3D3;
    display: flex;
    align-items: center;

    .containerCirculoImg {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border-radius: 50%;
        overflow: hidden;
        background: red;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;

        .imgInfoMain {
            width: 80px;
        }
    }

    .containerPsInfoImg {
        width: 105px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .p1 {
            font-weight: 600;
            margin-bottom: 2px;
        }

        .p2 {
            color: #df801a;
            margin-bottom: 2px;
        }

        .p3 {
            font-size: .7rem;
            font-weight: 500;
        }

        .p4 {
            font-size: .7rem;
            color: #666;
            margin-top: 3px;
        }
    }
`;