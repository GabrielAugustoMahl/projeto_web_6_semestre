import {  useRef,useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Coleira from "../assets/images/Coleira.png"
import HeroRectangleTwo from "../assets/images/rectangleT.png";
import Button from "../components/buttons.tsx";
import Logo from "../assets/LogoAL.svg";
import Slider from "react-slick";
import Menu from "../assets/hamburguer.svg";
import Close from "../assets/close.svg";
import Person from "../assets/images/Person.svg"
import Checkmark from "../assets/images/Checkmark.svg"
import Stars from "../assets/images/stars.svg"
import RedeSocial from "../assets/images/Redes sociais.svg"
import "../styles/utility.css";
import "../styles/contato.css";
import "../styles/header.css";
import "../styles/buttons.css";
import "../styles/index.css";
import "../styles/hero.css";
import "../styles/cards.css";
import "../styles/avaliacao.css";
import "../styles/Planos.css";
import "../styles/rodape.css";




export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const cardsSectionRef = useRef<HTMLDivElement>(null);
    const testimonialsSectionRef = useRef<HTMLDivElement>(null);
    const pricingSectionRef = useRef<HTMLDivElement>(null);
    const contactSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (showMobileMenu) {
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'auto';
        }

    }, [showMobileMenu])

    const handleScrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    const settings = {
        useCSS: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo AnimalLife" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution" onClick={() => handleScrollToSection(cardsSectionRef)}>Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials" onClick={() => handleScrollToSection(testimonialsSectionRef)}>Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing" onClick={() => handleScrollToSection(pricingSectionRef)}>Preços</a>
                            </li>
                            <li>
                                <a href="#contact"onClick={() => handleScrollToSection(contactSectionRef)}>Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={Coleira} alt="Coleira" className="desktop-only" />
                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>AnimalLife</h1>
                    <p>Segurança e cuidado na palma da sua mão.</p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>
            <section className="Cards" ref={cardsSectionRef}>
                <h1>Sob medida para você</h1>
                <div className="carousel" >
                    <div className="Painel">
                        <div className="card">
                            <img src={Coleira} alt="Coleira" />
                            <p>Melhor coleira de monitoramento do Brasil!</p>
                        </div>
                        <div className="card">
                            <img src={Coleira} alt="Coleira" />
                            <p>Melhor coleira de monitoramento do Brasil!</p>
                        </div>
                        <div className="card">
                            <img src={Coleira} alt="Coleira" />
                            <p>Melhor coleira de monitoramento do Brasil!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="avaliacao" ref={testimonialsSectionRef}>
                <div className="Pavaliacao">
                    <p>Conselho de quem conhece</p>
                    <h1>Cada Cliente Importa</h1>
                    <div className="Hcards">
                        <Slider {...settings}>
                            <div className="Hcard">
                                <img className="Person" src={Person} alt="Person" />
                                <p>Slate helps you see  how many more days you need to work to reach your financial goal for the month and year.</p>
                                <img className="Stars" src={Stars} alt="Stars" />
                                <h4>Ellon Ma</h4>
                                <h5>CEO BING CHILlING</h5>
                            </div>
                            <div className="Hcard">
                                <img className="Person" src={Person} alt="Person" />
                                <p>Slate helps you see  how many more days you need to work to reach your financial goal for the month and year.</p>
                                <img className="Stars" src={Stars} alt="Stars" />
                                <h4>Ryan Gosling</h4>
                                <h5>Agrônomo</h5>
                            </div>
                            <div className="Hcard">
                                <img className="Person" src={Person} alt="Person" />
                                <p>Slate helps you see  how many more days you need to work to reach your financial goal for the month and year.</p>
                                <img className="Stars" src={Stars} alt="Stars" />
                                <h4>Regina Miles</h4>
                                <h5>Designer</h5>
                            </div>
                            <div className="Hcard">
                                <img className="Person" src={Person} alt="Person" />
                                <p>Slate helps you see  how many more days you need to work to reach your financial goal for the month and year.</p>
                                <img className="Stars" src={Stars} alt="Stars" />
                                <h4>Regina Miles</h4>
                                <h5>Designer</h5>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            <section className="Planos"ref={pricingSectionRef}>
                <p>Planos e preços</p>
                <h1>Nossos planos</h1>
                <div className="Cardplanos">
                    <div className="Cardplano">
                        <h3>Básico</h3>
                        <p>Baixe a ferramenta e comece a utlizar agora mesmo</p>
                        <h2>Grátis</h2>
                        <button>Baixar agora</button>
                        <div className="linha"></div>
                        <div className="certo">
                            <img src={Checkmark} alt="Checkmark" />
                            <p>Com Anúncios</p>
                        </div>
                        <div className="certo">
                            <img src={Checkmark} alt="Checkmark" />
                            <p>Até 10 produtos por dia</p>
                        </div>
                        <div className="certo">
                            <img src={Checkmark} alt="Checkmark" />
                            <p>Utilize sem limitação X</p>
                        </div>
                    </div>
                    <div className="Cardplano">
                        <h3>Premium</h3>
                        <p>Para quem deseja utilizar nossa ferramenta sem limitações!</p>
                        <h2>R$ 19,90</h2>
                        <button>Baixar agora</button>
                        <div className="linha"></div>
                        <div className="certo">
                            <img src={Checkmark} alt="Checkmark" />
                            <p>Sem interrupção de anúncios</p>
                        </div>
                        <div className="certo">
                            <img src={Checkmark} alt="Checkmark" />
                            <p>Utilize quantas vezes quiser</p>
                        </div>
                        <div className="certo">
                            <img src={Checkmark} alt="Checkmark" />
                            <p>Utilize todos os produtos disponíveis na plataforma</p>
                        </div>
                    </div>
                    <div className="Cardplano">
                        <h3>Empresarial</h3>
                        <p>Utilize nossa solução na sua empresa. Aprimore seu fluxo.</p>
                        <h2>R$ 12,90</h2>
                        <button>Baixar agora</button>
                        <div className="linha"></div>
                        <div className="certo">
                            <img src={Checkmark} alt="Checkmark" />
                            <p>Com Anúncios</p>
                        </div>
                        <div className="certo">
                            <img src={Checkmark} alt="Checkmark" />
                            <p>Até 10 produtos por dia</p>
                        </div>
                        <div className="certo">
                            <img src={Checkmark} alt="Checkmark" />
                            <p>Utilize sem limitação X</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Contato" ref={contactSectionRef}>
                <div className="EntreContato">
                    <p>Envie sua duvida</p>
                    <h1>Entre em contato</h1>
                    <p>Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder.😎</p>
                    <input type="text" />
                    <input type="text" />
                    <button>Enviar</button>
                </div>
            </section>
            <section className="rodape">
                <div className="rodapeinfos">
                    <div className="infos">
                        <img src={Logo} alt="Logo AnimalLife" width={100} height={100} />
                        <img src={RedeSocial} alt="Redes_Sociais" width={120} height={80} />
                    </div>
                    <div className="infos">
                        <h2>Empresa</h2>
                        <p>Sobre nós</p>
                        <p>Faça parte do time</p>
                        <p>Blog</p>
                    </div>
                    <div className="infos">
                        <h2>Funcionalidades</h2>
                        <p>Marketing</p>
                        <p>Análise de dados</p>
                        <p>Boot discord</p>
                    </div>
                    <div className="infos">
                        <h2>Recursos</h2>
                        <p>IOS & Android</p>
                        <p>Teste a Demo</p>
                        <p>Clientes</p>
                        <p>API</p>
                    </div>
                </div>
                <div className="pe">
                    <p>Feito com amor na aula de Programação Web💙 ©2024 AktieTech - Todos os direitos reservados.</p>
                </div>
            </section>
        </>
    );
}