import "./style.css";

import rickIlustration from "../../assets/images/rickImg.webp";
import rickLogo from "../../assets/icons/rickLogo.svg";

export const Main = () => {
    return(
        <main>
            <div>
                <img src={rickIlustration} alt="Ilustração do Rick" /></div>
        <div className="content-main">
            <img src={rickLogo} alt="Logo rick and morty" />
            <h1>Bem-vindos ao <span>consumo de API</span> do Rick and Morty</h1>
            <p>Aqui você encontra informações sobre os personagens de Rick and Morty.</p>
            <div className="container-btn-main">
                <a href="" className="btn-primary">Veja agora</a>
                <a href="" className="btn-secondary">Saiba mais</a>
            </div>
        </div>
        </main>
    )
}