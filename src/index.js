import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
// import { Posts } from "./Posts";
// import { Greeting, UserCard } from "./Greeting";
// import Product, { Navbar } from "./Product";
// import { Saludar } from "./Saludar";
// import Button from "./Button";
// import { TaskCard } from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const users = [
// 	{
// 		id: 1,
// 		name: "John",
// 		Image:
// 			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
// 	},
// 	{
// 		id: 2,
// 		name: "Carter",
// 		Image:
// 			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
// 	},
// ];

function Counter() {
	const [mensaje, setMensaje] = useState("");
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		console.log("render");
	}, [counter]);

	return (
		<div>
			{/* <h1>Counter: {counter}</h1>
			<button
				onClick={() => {
					setCounter(counter + 1);
				}}
			>
				sumar
			</button>
			<button
				onClick={() => {
					setCounter(counter - 1);
				}}
			>
				restar
			</button>
			<button
				onClick={() => {
					setCounter(0);
				}}
			>
				reiniciar
			</button> */}

			<input onChange={(e) => setMensaje(e.target.value)} />
			<button
				onClick={() => {
					alert("El mensaje es: " + mensaje);
				}}
			>
				Save
			</button>

			<hr />
			<h1>Counter: {counter}</h1>
			<button onClick={() => setCounter(counter + 1)}>incrementar</button>
		</div>
	);
}

root.render(
	<>
		<Counter />
	</>,
);
{
	/* {users.map((users, i) => {
    return (
        <div key={i}>
            <h1>{users.name}</h1>
            <img src={users.Image} />
        </div>
    );
})} */
}
{
	/* <Posts /> */
}
// <>
// 	<UserCard
// 		name="Ryan Ray"
// 		amount={3000}
// 		married={false}
// 		points={[99, 33, 23.5]}
// 		addrees={{ street: "123 main street", city: "New York" }}
// 		greet={function () {
// 			alert("Hello");
// 		}}
// 	/>
// 	<UserCard
// 		name="Kike Romero"
// 		amount={40000}
// 		married={true}
// 		points={[99, 33, 23.5]}
// 		addrees={{ street: "456 main street", city: "California" }}
// 		greet={function () {
// 			alert("Hello");
// 		}}
// 	/>
// </>,
// <>
// </>,
// <>
// 	<TaskCard ready={true} />
// 	<Button text="enviar a" name="mckike" />
// 	<input id="Hola" ></input>
// </>,
