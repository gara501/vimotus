import React from 'react';

const Program = ({title, duration, price, content, id}) => {

	return (
		<div className="vm-program">
			<a href="#">
				<div className={`vm-program__image ${id}`}>
					<div className="vm-program__header">
						<h4>{title}</h4>
					</div>
				</div>
				<div className="vm-program__info">
					<div className="vm-program__info-internal">
						<p className="mt-2 mb-2 vm-program__info-internal-duration">{duration}</p>
						<p className="mt-2 mb-2">{title} - {duration}</p>
						<p className="mt-2 mb-2 vm-program__info-price">Precio: {price}</p>
					</div>
				</div>
			</a>
		</div>
	)
}

export default Program;