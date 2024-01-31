import styled from 'styled-components'

export const Header = styled.header`
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
    }
`;

export const SectionMain = styled.section`
    width: 100vw;
    height: 88vh;
    display: flex;
    justify-content: center;

    .descriptionMain{
        width: 40vw;
        height: 88vh;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .spanWelcomeMain {
            width: 200px;
            height: 40px;
            background: #ECC194;
            border-radius: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: .8rem;
            font-weight: 500;

            .iconeDescriptionMain {
                margin-left: 5px;
                width: 15px;
            }
        }

        h1 {
            font-size: 4rem;
            margin: 5% 0;
        }

        .descriptionH1Main {
          font-weight: 500;
          margin-bottom: 8%;
          line-height: 1.8rem;
          font-size: .9rem;
          width: 90%;
        }

        .containerBtnMain {
            margin-bottom: 8%;
            width: 80%;
            display: flex;
            justify-content: space-between;

            .BtnMainVideo {
                background: none;
                width: 50%;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 600;
                cursor: pointer;

                .Circulo {
                    background: #fff;
                    color: #FCA039;
                    width: 35px;
                    height: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    border-radius: 50%;
                    padding-left: 3px;
                    margin-right: 10px;
                }

                &:hover {
                    .Circulo {
                        background: #FCA039;
                        color: #fff;
                    }
                }
            }
        }

        .containerCustomerReview {
            display: flex;

            .containerImgsHeader {
                display: flex;
                position: relative;
                width: 22%;
                
                .containerCirculo {
                    width: 40px;
                    height: 40px;
                    overflow: hidden;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                        img {
                            min-height: 40px;
                            min-width: 40px;
                        }
                }

                .containerCirculo:nth-child(1) {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 9;
                }

                .containerCirculo:nth-child(2) {
                    position: absolute;
                    top: 0;
                    left: 32px;
                    z-index: 99;
                }

                .containerCirculo:nth-child(3) {
                    position: absolute;
                    top: 0;
                    left: 64px;
                    z-index: 9;
                }
            }

            .infoCurstomerReview {
                
                p:nth-child(1) {
                    font-weight: 600;
                    font-size: .9rem;
                }

                p:nth-child(2) {
                    font-size: .8rem;
                    margin-top: 2px;
                    display: flex;
                    align-items: center;
                    justify-content: start;

                    span:nth-child(1) {
                        color: #FCA039;
                    }

                    span:nth-child(2) {
                        font-weight: 600;
                    }

                    span:nth-child(3) {
                        color: #666;
                        font-size: .6rem;
                    }
                }
            }
        }
    }

    .imgSectionMain{
        width: 40vw;
        height: 88vh;
        display: flex;
        align-items: center;
        justify-content: end;
        position: relative;
        
        img {
            width: 80%;
        }

        .container1ComponenteInfo {
            position: absolute;
            top: 27%;
            left: 15%;
        }

        .container2ComponenteInfo {
            position: absolute;
            top: 67%;
            left: 12%;
        }

        .container3ComponenteInfo {
            position: absolute;
            top: 54%;
            left: 68%;
        }
    }
`;

export const SectionOrganicFood = styled.section`
    width: 100vw;
    height: 35vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin-bottom: 100px;
`;

export const SectionDeliver = styled.section`
    height: 80vh;
    display: flex;

    .imagensDeliver {
        height: 100%;
        width: 45%;
        position: relative;

        img:nth-child(1) {
            width: 338px;
            height: 324px;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 99;
        }

        img:nth-child(2) {
            width: 250px;
            height: 250px;
            position: absolute;
            top: 25px;
            right: 240px;
            z-index: 9;
        }

        img:nth-child(3) {
            width: 250px;
            height: 250px;
            position: absolute;
            top: 175px;
            right: 125px;
            z-index: 100;
        }
    }

    .infoDeliver {
        height: 100%;
        width: 55%;
        padding: 2%;

        h2 {
            font-size: 3rem;
            margin-bottom: 20px;
        }

        .paragrafoInfoDeliver {
            width: 62%;
            line-height: 26px;
            margin-bottom: 55px;
        }

        .containerBtnDeliver {
            
            :nth-child(1) {
                margin-right: 16px;
            }
        }

        .ContainerBtnDeliver2 {
            padding-top: 60px;
            display: flex;
            gap: 25px;
        }

    }
`;