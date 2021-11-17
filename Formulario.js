import React, { useState } from "react";
import "./Formulario.css";

function Formulario() {
	// const [error, setError] = useState({});

	const [description, setDescription] = useState("");

	const [data, setData] = useState({
		nombre: "",
		genero: [],
		fecha: "",
		rating: "",
		description: "",
	});
	/////////////////control///////////
	function handleChange(e) {
		setData((preData) => {
			return {
				...preData,
				[e.target.name]: e.target.value,
			};
		});
	}
	/////////////////////////////////////////////////////////
	function handleOnSubmit(e) {
		e.preventDefault();
		console.log(data);
	}
	return (
		////////////////////////////////////////////
		<div className="logo">
			<div className="content-formulario">
				<h1 className="title">
					Formulario de <span>Juego</span>
				</h1>
				<div className="constant-wrapper">
					<div className="contant-form">
						<h3>Crea tu Juego</h3>
						<form onSubmit={handleOnSubmit}>
							<p>
								<label htmlFor="nombre">Nombre</label>
								<input
									type="text"
									id="nombre"
									name="nombre"
									placeholder="ej:Ricardo"
									value={data.nombre}
									onChange={handleChange}
								></input>
							</p>
							<p>
								<label>Genero</label>
								<input
									type="text"
									id="genero"
									name="genero"
									placeholder="Ej: Acción ,Arcade,Estrategia"
									value={data.genero}
									onChange={handleChange}
								></input>
							</p>
							<p>
								<label>Fecha</label>
								<input type="date" name="fecha" value={data.fecha} onChange={handleChange}></input>
							</p>
							<p>
								<label htmlFor="rating">Rating</label>
								<input
									type="number"
									name="rating"
									id="rating"
									placeholder="ej : 9.5"
									value={data.rating}
									onChange={handleChange}
								></input>
							</p>
							<p className="block">
								<label>Description</label>
								<textarea
									name="description"
									rows="2"
									value={description}
									placeholder="MAXIMO DE 25 CARACTERES!!"
									onChange={(e) => {
										if (e.target.value.length <= 25) setDescription(e.target.value);
									}}
								></textarea>
							</p>
							<p className="block">
								<button type="submit">Enviar</button>
							</p>
						</form>
					</div>
					<div className="contant-info">
						<h2>More Info</h2>
						<ul>
							<li>Crear el Juego</li>
							<li>Los Mejores juego </li>
							<li>Todos los Generos</li>
							<li>Un Mundo Por Encontrar</li>
						</ul>
						<h4>
							En este Formulario podes Crear tu propio Juego importante todo los campos son
							requeridos la descripcion del juego no deve superar los 25 caractares!
						</h4>
						<h1 className="subTitle">
							Lest <span>Go</span>!!
						</h1>
					</div>
				</div>
				<div className="henry">
					<h1>Proyecto Henry</h1>
				</div>
				<p>Ricardo. R</p>
			</div>
		</div>
	);
}

export default Formulario;

// export function validacion(data){
// let error = {};
// if(!data.nombre){
// 	error.nombre ="nombre is requerido"

// }else if ()

// }
