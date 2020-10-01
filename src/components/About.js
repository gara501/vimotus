import React from 'react';

const About = () => {
	return (
		<section className="vm-about pb-10">
		<h2 className="pt-10 pb-10">Nosotros</h2>
			<div className="vm-about__container">
				<div className="vm-about__card">
					<div className="vm-about__card-data">
						<h5 className="pb-5">Andrés Ramirez</h5>
						<p>Entrenador personal desde el año 2009
						certificado con la NCSF, y certificaciones en cursos
						orientados a hipertrofia muscular con la NSCA.</p>
					</div>
				</div>
				<div className="vm-about__card">
					<div className="vm-about__card-data">
						<h5 className="pb-5">Felipe Cardona</h5>
						<p>Licenciado en educación Física UDCA. Experiencia
						en gimnasios y entrenamiento personal.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About;