//import { TextField } from "material-ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../Providers/Auth";
// import { InputHTMLAttributes } from "react";
import { Container, TextField } from "@material-ui/core";
 import { Button } from "./style";



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
    } = useForm({
      resolver: yupResolver(schema),
    });


    const handleForm = (userData: usrData) => {
      login(userData)
    }

    return(
        <Container>
        <h1 className="title">Login + refatorando provider</h1>
          <h1 className="titleLogin">Faça seu login</h1>
          <form onSubmit={handleSubmit(handleForm)}>
             <div>
           <TextField
              label="Email"
              margin="normal"
              variant="standard"
              size="small"
              type='email'
              color="primary"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              placeholder="Email"     
            />
            </div>
            <div>
            <TextField
              label="Senha"
              margin="normal"
              variant="standard"
              type='password'
              size="small"
              color="primary"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              placeholder="Senha" 
            />
            </div> 
            <div>
              <Button type='submit'>
                Entrar
              </Button>
            </div>
          </form>
      </Container>
    )
}

export default Login