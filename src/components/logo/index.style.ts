import styled from 'styled-components'

export const LogoStyle = styled.a`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .containerLogo {
            background: #FE9F39;
            display: block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            position: relative;
            top: -5px;
            left: 0;

            &::after, &::before {
                content: "";
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: #FE9F39;
            }

            &::after {
                position: absolute;
                top: 13px;
                left: 9px;
            }

            &::before {
                position: absolute;
                top: 13px;
                left: -9px;
            }
        }

        .tituloLogo {
            margin-left: 11px;
            color: #000;
            font-size: 1.3rem;
        }
`;