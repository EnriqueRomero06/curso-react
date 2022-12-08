export function Greeting(props) {
	console.log(props);
	return <h1>{props.title}</h1>;
}

export function UserCard({ name, amount, married, addrees, greet }) {
	console.log(name, amount, married, addrees, greet);
	return (
		<div>
			<h1>{name}</h1>
			<p>💵{amount}</p>
			<p>{married ? "Married" : "Single"}</p>
			<section>
				<h1>addrees</h1>
				<ul>
					<li>{addrees.city}</li>
					<li>{addrees.street}</li>
				</ul>
			</section>
		</div>
	);
}
