import { useEffect, useState } from "react";
import Coleira from "../assets/images/Coleira.png"
import HeroRectangleTwo from "../assets/images/rectangleT.png";
import Button from "../components/buttons.tsx";
import Logo from "../assets/LogoAL.svg";
import Menu from "../assets/hamburguer.svg";
import Close from "../assets/close.svg";
import "../styles/utility.css";
import "../styles/header.css";
import "../styles/buttons.css";
import "../styles/index.css";
import "../styles/hero.css";
import "../styles/cards.css";



export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {

        if (showMobileMenu) {
            //mudar o style do html para overflow-y hidden
        } else {
            //voltar overflow-y
        }

    }, [showMobileMenu])

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
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
                <img src={Coleira} alt="Coleira" />
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
            <section className="Cards">
                <h1>Sob medida para você</h1>
                <div className="Painel">
                    <div className="card">
                        <div className="imagem">
                            <img src={Coleira} alt="Coleira" />
                        </div>
                        <p>Melhor coleira de monitoramento do Brasil</p>
                    </div>
                    <div className="card">
                        <div className="imagem">
                            <img src={Coleira} alt="Coleira" />
                        </div>
                        <p>Melhor coleira de monitoramento do Brasil</p>
                    </div>
                    <div className="card">
                        <div className="imagem">
                            <img src={Coleira} alt="Coleira" />
                        </div>
                        <p>Melhor coleira de monitoramento do Brasil</p>
                    </div>
                </div>
            </section>
        </>
    )
}