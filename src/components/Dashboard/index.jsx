import { useAuth } from "../../Providers/Auth";
import { Button } from "../Login/style";

const Dashboard = () => {

    const { logout } = useAuth();

    return(
        <Button onClick={logout}>Sair</Button>
    )
}

export default Dashboard