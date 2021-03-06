import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
	
	const openMenu = (e) => {
		console.log(e);
		document.querySelector('.vm-menu').classList.add('open');
		document.querySelector('body').classList.add('blocked');
		window.scrollTo(0,0);
	}

	return (
		<section className="vm-header">
			<div className="vm-header__mobile-menu" onClick={openMenu}>
				<span className="material-icons">
					menu
				</span>
			</div>
			<div className="vm-header__logo">
				<img src={logo} alt="vimotus" />
			</div>
			<nav className="vm-header__nav">
				<ul>
					<li><a href="#programas">Programas de Entrenamiento</a></li>
					<li><a href="#nosotros">Nosotros</a></li>
					<li><a href="#blog">Blog</a></li>
					<li><a href="#contacto">Contacto</a></li>
					<li><a href="#usuarios">Usuarios</a></li>
				</ul>
			</nav>
		</section>
	)
}

export default Header;