
import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

interface AuthProps {
  children: ReactNode;
}

interface AuthProviderData {
  login: (userData:usrData) => void;
  logout: () => void;
  authToken: string;
}

interface usrData {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProps) => {

  const history = useHistory();
  
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const login = (userData:usrData) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setAuthToken(response.data.token);
        history.push("/dashboard");
        console.log('entrou ')
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);