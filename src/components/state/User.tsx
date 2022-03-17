import { useState } from "react";

type AuthUser = {
    name: string;
    email: string;
};

const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null);

    const handleLogin = () => {
        setUser({
            name: "Mario",
            email: "karehmario@gmail.com"
        });
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>Username is {user?.name}</div>
            <div>Email is {user?.email}</div>
        </div>
    );
};

export default User;
