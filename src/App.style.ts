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
    height: 70vh;
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
            margin-bottom: 52px;
        }

        .containerBtnDeliver {
            
            :nth-child(1) {
                margin-right: 16px;
            }
        }

        .ContainerBtnDeliver2 {
            padding-top: 55px;
            display: flex;
            gap: 25px;
        }

    }
`;

export const SectionDifferentMenu = styled.section`
    height: 95vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;

    h2 {
        font-size: 3.8rem;
        margin-bottom: 65px;
    }

    .containerConteudoDifferentMenu {
        display: flex;
        gap: 35px;
    }

    .selectMenu {
        width: 245px;
        height: 350px;
        background: #ECC194;
        border-radius: 20px;
        padding: 20px 45px 17px 30px;

        .ContainerBtnTypeMenu {
            width: 113%;
            height: 100%;
            overflow-y: scroll;
            overflow-x: hidden;

            &::-webkit-scrollbar {
                background: #F1E4D1;
                width: 4px;
                border-radius: 10px;
            }

            &::-webkit-scrollbar-thumb {
                background-color: #FE9F39;
                border-radius: 10px;
            }
        }
    }

    .containerCadsMenu {
        width: 850px;
        height: 390px;
        display: flex;
        gap: 65px;
        flex-wrap: wrap;
    }
`;

export const SectionFoodGallery = styled.section`
    width: 100vw;
    height: 70vh;
    background: #1A1613;
    display: flex;
    align-items: center;
    justify-content: center;

    .infoFoodGallery {
        width: 35%;

        h2 {
            color: #F69C3D;
            font-size: 3rem;
            margin-bottom: 30px;
        }

        p {
            color: #fff;
            width: 90%;
            margin-bottom: 50px;
        }

        .containerBtnFoodGallery {
            :nth-child(1) {
                margin-right: 23px;
            }

            :nth-child(2) {
                color: #fff;
            }
        }
    }

    .imgFoodGallery {
        width: 45%;
        height: 100%;
        display: flex;

        .Container1 {
            margin-top: 40px;
            width: 45%;
        }

        .Container2 {
            margin-top: 80px;
            margin-left: 20px;
        }
    }
`

export const SectionOurTeam = styled.section`
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 3.5rem;
    }

    .containerCardOurTeam {
        margin: 35px 0;
        display: flex;
        gap: 35px;
    }
`;