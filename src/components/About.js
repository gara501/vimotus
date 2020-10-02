import React from 'react';
import {ReactComponent as InstagramLogo} from '../images/icons/instagram.svg';
import {ReactComponent as TwitterLogo} from '../images/icons/twitter.svg';

const About = () => {
	return (
		<section className="vm-about pb-20">
		<h2 className="pt-10 pb-10">Nosotros</h2>
			<div className="vm-about__container">
				<div className="vm-about__card">
					<div className="vm-about__card-data">
						<h5 className="pb-5">Andrés Ramirez</h5>
						<p>Entrenador personal desde el año 2009
						certificado con la NCSF, y certificaciones en cursos
						orientados a hipertrofia muscular con la NSCA.</p>
						<div className="vm-about__card-network">
							<a href="https://www.instagram.com/aramhack/" 
							target="_blank"
							rel="noopener noreferrer">
								<InstagramLogo />
							</a>
							<a href="https://twitter.com/aramh4ck" 
							target="_blank"
							rel="noopener noreferrer">
								<TwitterLogo />
							</a>
						</div>
					</div>
				</div>
				<div className="vm-about__card">
					<div className="vm-about__card-data">
						<h5 className="pb-5">Felipe Cardona</h5>
						<p>Licenciado en educación Física UDCA. Experiencia
						en gimnasios y entrenamiento personal.</p>
						<div className="vm-about__card-network">
							<a href="https://www.instagram.com/felipe_trainer14/" 
							target="_blank"
							rel="noopener noreferrer">
								<InstagramLogo />
							</a>
							<a href="https://twitter.com/luiscar9508" 
							target="_blank"
							rel="noopener noreferrer">
								<TwitterLogo />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About;