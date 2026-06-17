import './style.css'

import logoGitHub from '../../assets/icons/gitHubIcon.svg'

export const Header = () => {
    return(
        <header>
            <div className="header-wrapper">
                <a href=""><span>Rodrigo Junior</span>
                <img src={logoGitHub} alt="Logo do github" />
                </a>
            </div>
        </header>
    )
}