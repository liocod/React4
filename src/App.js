import './App.css';
import Profile from './profil/compoent/Profile';


function App() {
  return (
    <div className="App">
      <Profile fullname="Eric  Diouf" />
      <Profile profession="Etudiant" />
      <Profile bio="businessman" />
    </div>
  );
}

export default App;
