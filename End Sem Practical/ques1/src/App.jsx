import Header from "./components/Header";
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";

function App() {
const username = "Amritansh";

return (
    <Header>
    <Navbar>
        <UserProfile username={username} />
    </Navbar>
    </Header>
);
}

export default App;
