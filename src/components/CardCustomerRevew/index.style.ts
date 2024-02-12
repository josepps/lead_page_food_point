import styled from 'styled-components'

export const CardCustomerRevewstyle = styled.div`
    width: 350px;
    height: 200px;
    background: #EFE3D3;
    border-radius: 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .CardCustomerInfo {
        display: flex;
        width: 90%;
        margin-bottom: 10px;

        p {
            color: #FCA039;
            margin-top: 3px;
        }
    }

    .ImgCardCustomer {
        width: 50px;
        height: 50px; 
        border-radius: 50%;
        margin-right: 20px;
    }

    p {
        font-size: 0.9rem;
        color: #3b3b3b;
        width: 90%;
    }
`;