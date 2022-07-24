import './App.scss';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import useLocalStorage from './hooks/useLocalStorage';
import { ContactsProvider } from './contexts/ContactsContext';

function App() {
  const [name, setName] = useLocalStorage('name');

  const dashboard = (
    <ContactsProvider>
      <Dashboard name={name} />
    </ContactsProvider>
  );

  return name ? dashboard : <Login onUsernameSubmit={setName} />;
}

export default App;
