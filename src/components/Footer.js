import React from 'react';
import {ReactComponent as WhatsappLogo} from '../images/icons/whatsapp.svg';
import logo from '../images/logo_w.png';

const Footer = () => {
	return (
		<section className="vm-footer pt-10 pb-10">
			<div className="container">
				<div className="vm-footer__container">
					<div className="vm-footer__bl">
						<img src={logo} alt="vimotus" />
					</div>
					<div className="vm-footer__bl">
						<h5>Menu</h5>
						<ul>
							<li><a href="#programas">Programas de Entrenamiento</a></li>
							<li><a href="#nosotros">Nosotros</a></li>
							<li><a href="#blog">Blog</a></li>
							<li><a href="#usuarios">Usuarios</a></li>
						</ul>
					</div>
					<div className="vm-footer__bl">
						<h5>Contacto</h5>
						<ul>
							<li><a href="mailto:vimotus@gmail.com">email: vimotus@gmail.com</a></li>
						</ul>
					</div>
					
				</div>
			</div>
		</section>
	)
}

export default Footer;