import { useAuth } from "../../Providers/Auth";
import { ButtonContainer } from "./style";

const Dashboard = () => {

    const { logout } = useAuth();

    return(
        <ButtonContainer>
        <button onClick={logout}>Sair</button>
        </ButtonContainer>
    )
}

export default Dashboard