import { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './components/Cards/Cards';
import SearchForm from './components/SearchForm/SearchForm';
import SortCards from './components/SortCards/SortCards';
import ToggleCardView from './components/ToggleCardView/ToggleCardView';

function App() {
  let currentOffset = 0;
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState('true');
  const [term, setTerm] = useState('');

  const fetchUsers = async () => {
    const eightUsers = [];
    try {
      const res = await fetch(
        'https://randomuser.me/api/?results=8&offset=${currentOffset}'
      );
      const data = await res.json();
      data.results.forEach((p) => eightUsers.push(p));
      console.log(eightUsers);

      setUsers((prevUsers) => [...prevUsers, ...eightUsers]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    currentOffset += 10;
  };

  const handleScroll = (e) => {
    console.log(e.target.documentElement.scrollTop);
    console.log(window.innerHeight);
    console.log(e.target.documentElement.scrollHeight);
    // console.log(
    //   Math.ceil(e.target.documentElement.scrollTop + window.innerHeight)
    // );
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      fetchUsers();
    }
  };

  useEffect(() => {
    fetchUsers();
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="control__btns">
        <div className="control__btns--left">
          <SortCards />
          <SearchForm className="card__search" term={term} setTerm={setTerm} />
        </div>
        <div className="control__btns--right">
          <ToggleCardView />
        </div>
      </div>

      <div className="container">
        {isLoading ? (
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

export default App;
