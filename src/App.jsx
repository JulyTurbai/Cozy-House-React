import Home from './components/Home';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Friends from './components/friends/Friends';
import AboutShelter from './pages/AboutShelter';
import OurPets from './pages/OurPets';
import Shelter from './components/shelter/Shelter';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout/> }>
        <Route index="/" element={ <Home />}/>
        <Route path="friends" element={<Friends/>}/>
        <Route path="aboutshelter" element={<AboutShelter/>}/>
        <Route path="ourpets" element={<OurPets/>}/>
        <Route path="shelter" element={ <Shelter/> }/>
        <Route path="contacts" element={ <Contacts/> }/>
      </Route>
    </Routes>
  );
}

export default App;
