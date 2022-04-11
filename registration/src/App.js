import { Routes , Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { RegOne } from './pages/RegOne';
import { RegTwo } from './pages/RegTwo';
import { Users } from './pages/Users';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/registration/one" element={<RegOne/>} />
      <Route path="/registration/two" element={<RegTwo/>} />
      <Route path="/users" element={<Users/>} /> 
    </Routes>
    </div>
  );
}

export default App;
