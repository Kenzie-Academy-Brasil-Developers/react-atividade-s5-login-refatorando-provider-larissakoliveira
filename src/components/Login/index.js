import { useForm } from "react-hook-form";


const Login = ({authenticated}) => {

    const history = useHistory();

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

    if (authenticated) {
        return <Redirect to="/dashboard" />;
      }

    return(
        <Container>
        <h1 className="title">Loja Kenzie</h1>
          <h1 className="titleLogin">Faça seu login</h1>
          <form onSubmit={handleSubmit(handleForm)}>
            <div>
              <TextField
                label="Email:"
                margin="normal"
                variant="outlined"
                size="small"
                color="primary"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </div>
            <div>
              <TextField
                label="Senha:"
                margin="normal"
                type="password"
                variant="outlined"
                size="small"
                color="primary"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </div>
            <div>
              <Button type="submit" variant="contained" color="primary">
                Entrar
              </Button>
            </div>
          </form>
      </Container>
    )
}

export default Login