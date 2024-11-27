import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


const Root = () => {
    const navigation = useNavigation();
    return (
        <div>
            <NavBar></NavBar>
            {
navigation.state === 'loading'? <p>Loading....</p>:
<Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Root;