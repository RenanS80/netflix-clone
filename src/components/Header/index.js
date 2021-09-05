import React from 'react';
import './header.css';

function Header({black}){
    return(
        <header className={black ? 'black-background' : ''}>
            <div className="header-logo">
                <a href="/">
                    <img src="https://ik.imagekit.io/zqxyh6u3ylz/Netflix/netflix-logo_ske-ZD_gL.png?updatedAt=1630868412855" alt="Netflix" />
                </a>
            </div>

            <div className="header-user">
                <a href="/">
                    <img src="https://ik.imagekit.io/zqxyh6u3ylz/Netflix/user_oTNp1qKbf.png?updatedAt=1630868606216" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}

export default Header;