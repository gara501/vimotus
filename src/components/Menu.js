import React from 'react';

const Menu = () => {

	const closeMenu = (e) => {
		console.log(e);
		document.querySelector('.vm-menu').classList.remove('open');
	}	

	return (
		<section className="vm-menu">
			<div className="vm-menu__container">
				<div className="vm-menu__close" onClick={closeMenu}>
					<span className="material-icons">
						close
					</span>
				</div>
				<nav className="vm-menu__nav">
					<ul>
						<li><a href="#programas">Programas de Entrenamiento</a></li>
						<li><a href="#nosotros">Nosotros</a></li>
						<li><a href="#blog">Blog</a></li>
						<li><a href="#contacto">contacto</a></li>
					</ul>
				</nav>
			</div>
		</section>
	)
}

export default Menu;