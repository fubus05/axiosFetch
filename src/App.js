import   { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom' ;
import Index from "./comp/main";
import User from "./comp/infoUser";
import Char from "./comp/char"

const App = () => {
  return (
        <Router>
          <Routes>
                <Route element={<Index/>} path="/"/>
                <Route element={<User/>} path="/episodes/:id"/>
                <Route element={<Char/>} path="/characters/:char_name"/>
          </Routes>
        </Router>
  );
}

export default App;
