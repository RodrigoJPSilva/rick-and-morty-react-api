import './style.css'

import logoAlien from '../../assets/icons/alien.svg'
import logoHeartbeat from '../../assets/icons/heartbeatIcon.svg'
import logoPlanet from '../../assets/icons/planetIcon.svg'

export function Card({image ,name, specie, status, location}) {
    return (
        <div className="card-characters">
            <img src={image} alt="Character" />
            <h3>{name}</h3>
            <div className="description-characters">
                <ul>
                    <li>
                        <img src={logoAlien} alt="Alien logo" />
                        {specie}
                    </li>
                    <li>
                        <img src={logoHeartbeat} alt="Heartbeat logo" />
                        {status}
                    </li>
                    <li>
                        <img src={logoPlanet} alt="Planet logo" />
                        {location}
                    </li>
                </ul>
            </div>
        </div>
    );
}