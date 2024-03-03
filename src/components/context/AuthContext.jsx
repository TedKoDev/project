import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { onUserStateChange, login, logout } from "../../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children, value }) {
  const [user, setUser] = useState();
  console.log("user", user);

  useEffect(() => {
    onUserStateChange((user) => {
      console.log("user", user);
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
