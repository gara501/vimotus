import React from 'react';
import Program from './Program';
import data from '../data/programs.json';

const Programs = () => {
	return (
		<section className="vm-programs pt-10">
			<h2>Programas de Entrenamiento</h2>
			<p>Nuestros programas están pensados para cumplir
			con ciertas metas de entramiento, ejercicios progresivos
			pensados desde principiantes hasta avanzados.</p>
			<div className="vm-programs__cards">
			{data.map((program) => {
				return <Program key={program.id}
					title={program.name}
					duration={program.duration}
					price={program.price}
					id={program.id}
					content={program.info}
				/>
			})}
			</div>
		</section>
	)
}

export default Programs;