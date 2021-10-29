import { TextField } from "material-ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../Providers/Auth";
import { InputHTMLAttributes } from "react";
import { Container } from "@material-ui/core";
import { ButtonContainer } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  placeholder: string;
};

interface usrData {
  password: string;
  email: string;
}


const Login = () => {

    const { login } = useAuth()

    const schema = yup.object().shape({
      email: yup.string().email("Email inválido").required("Campo obrigatório"),
      password: yup
        .string()
        .min(6, "Mínimo 6 dígitos")
        .required("Campo obrigatório*"),
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });


    const handleForm = (userData: usrData) => {
      login(userData)
    }

    return(
        <Container>
        <h1 className="title">Login + refatorando provider</h1>
          <h1 className="titleLogin">Faça seu login</h1>
          <form onSubmit={handleSubmit(handleForm)}>
            <div>
              <input 
                placeholder='email'
                type='email'
              />
            </div>
            <div>
              <input
                placeholder='Senha'
                type='password'
              />
            </div>
            <div>
              <ButtonContainer>
                Entrar
              </ButtonContainer>
            </div>
          </form>
      </Container>
    )
}

export default Login