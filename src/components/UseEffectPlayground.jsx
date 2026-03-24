import { useEffect, useState } from "react";

//Second component
function Timer() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + 1);
        }, 1000);

        return ()=>clearInterval(id);
    }, []);

    return <div>
        <h2>This is Timer</h2>
        <p>{count}</p>
    </div>
}


//Main component
function UseEffectPlayground() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }

                const data = await response.json();
                setUsers(data);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();

    }, [])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div>
                <h2>useEffect Playground</h2>
                <h3>User List</h3>
                {users.map(user => {
                    return <p key={user.id}>{user.name}</p>
                })}
            </div>
            <Timer />
        </>
    )
}

export default UseEffectPlayground;