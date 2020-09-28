import React, {useContext} from 'react';
import Program from './Program';
import VimotusContext from '../context';

const Programs = () => {

	const data = useContext(VimotusContext).data;	

	return (
		<section className="vm-programs pt-10">
			<h2>Programas de Entrenamiento</h2>
			<p>Nuestros programas están pensados para cumplir
			con ciertas metas de entramiento, ejercicios progresivos
			pensados desde principiantes hasta avanzados.</p>
			<div className="vm-programs__cards">
			{data.map((program) => {
				return <Program key={program.id} program={program}/>
			})}
			</div>
		</section>
	)
}

export default Programs;