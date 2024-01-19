import styled from 'styled-components'


export const Header = styled.header`
    background: #01FFFF;
    width: 100vw;
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 5%;

    a {
        text-decoration: none;
    }

    .logoHeader {
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
    }

    .navHeader {
        .ulHeader {
            display: flex;
            align-items: center;
            justify-content: center;
            list-style-type: none;
            gap: 25px;
            
            li a{
                color: #000;
                font-weight: 500;
                padding-bottom: 5px;

                &:hover {
                    color: #df801a;
                    border-bottom: 1px solid #df801a;
                }
            }
        }
    }

    .containerHeader {
        display: flex;
        gap: 45px;

        .inputHeader {
            width: 180px;
            height: 40px; 
            background: red;
            display: block;
            border-radius: 25px;
            position: relative;
            
            input {
                width: 100%;
                height: 100%;
                border: 2px solid #FE9F39;
                border-radius: 25px;
                background: #F0E3D3;
                padding-left: 15px;
                outline: none;
            }

            .containerIconeInputLabel {
                position: absolute;
                background: #FE9F39;
                height: 40px;
                width: 40px;
                top: 0;
                left: calc(100% - 40px);
                border-radius: 50%;
                font-size: 10px;
                display: flex;
                align-items: center;    
                justify-content: center;
                border: none;
                cursor: pointer;

                .iconeInputLabel {
                    font-size: 1.5rem;
                }
            }
        }

        .btnHeader {
            border: none;
            background: #FE9F39;
            padding: 10px 35px;
            font-weight: 500;
            font-size: 1rem;
            border-radius: 25px;
            cursor: pointer;
        }
    }
`;