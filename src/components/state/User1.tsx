import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User1 = () => {
  //useState type assertion
  //In case we have a useEffect and we want to fetch automaticlly the data no need to initialise user as null
  //What we can do :
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Mario",
      email: "karehmario@gmail.com"
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>Username is {user.name}</div>
      <div>Email is {user.email}</div>
    </div>
  );
};

export default User1;
