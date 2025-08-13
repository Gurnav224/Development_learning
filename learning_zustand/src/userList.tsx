import type React from "react";
import { useEffect, useState } from "react";

type User = {
	id: number;
	name: string;
	email: string;
	username: string;
};

const UsersList: React.FC = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [counter , setCounter] = useState<number>(0)

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users",
				);
				if (!response.ok) {
					throw new Error("Failed to fetch users");
				}
				const data: User[] = await response.json();
				setUsers(data);
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message);
				}
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	},[counter]); // Runs only once after first render

	if (loading) return <p>Loading users...</p>;
	if (error) return <p style={{ color: "red" }}>{error}</p>;

	return (
		<div>
			<h1>User List</h1>
			<button type="button" onClick={() => setCounter(counter + 1)}>Counter</button>
      <h1>counter { counter}</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						<strong>{user.name}</strong> ({user.username}) - {user.email}
					</li>
				))}
			</ul>
		</div>
	);
};

export default UsersList;
