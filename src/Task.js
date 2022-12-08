import "./tasks.css";

export function TaskCard({ ready }) {
	console.log(ready);
	return (
		<div className="card">
			<h1 className="title">Mi primer tarea</h1>
			<span className={ready ? "ready-true" : "ready-false"}>
				{ready ? "Tarea Realizada" : "Tarea pendiente"}
			</span>
		</div>
	);
}
