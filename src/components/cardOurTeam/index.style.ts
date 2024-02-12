import styled from 'styled-components'

export const CardOurTeamStyle = styled.div`
    width: 250px;
    height: 265px;
    position: relative;

    img {
        height: 100%;
        width: 100%;
        border-radius: 16px;
    }

    .infoOurTeam {
        width: 200px;
        height: 80px;
        position: absolute;
        bottom: 20px;
        background: #EEE3D1;
        left: 50%;
        transform: translate(-50%);
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;

        .subTitle {
            font-size: 0.9rem;
            margin-top: 10px;
        }

        .icones {
            margin-top: 10px;
            display: none;
            
            span {
                margin: 0 8px;
            }
        }

        &:hover {
            height: 100px;
            background: #ECC196;

            .icones {
                display: block;
            }
        }
    }
`;