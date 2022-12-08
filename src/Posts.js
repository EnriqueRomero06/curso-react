import { CiClock2 } from "react-icons/ci";

export const Posts = () => {
	return (
		<button
			onClick={() => {
				fetch("https://jsonplaceholder.typicode.com/posts")
					.then((response) => response.json())
					.then((data) => console.log(data))
					.catch((error) => console.error(error));
			}}
		>
			<CiClock2 />
			Traer datos
		</button>
	);
};
