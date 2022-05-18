import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState('true');
  const [term, setTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://randomuser.me/api/?results=50');
        const data = await res.json();

        setUsers(data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <SearchForm className="card__search" term={term} setTerm={setTerm} />
      <div className="container">
        {isLoading ? ( // if is not loading render this section
          <h1 className="loading"> Loading...</h1>
        ) : (
          <Cards
            users={users.filter((user) =>
              `${user.name.first} ${user.name.last}`
                .toLowerCase()
                .includes(term.toLowerCase())
            )}
          />
        )}
      </div>
    </div>
  );
}

// users={users.filter(user => ((user.name.first).toLowerCase()).includes(term.toLowerCase()))}
export default App;
