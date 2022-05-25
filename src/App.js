import { useState } from 'react';
import Cards from './components/Cards/Cards';
import SearchForm from './components/SearchForm/SearchForm';
import SortCards from './components/SortCards/SortCards';
import ToggleCardView from './components/ToggleCardView/ToggleCardView';
import { useAPI } from './Store.js';

function App() {
  const [term, setTerm] = useState('');
  let { users, isLoading } = useAPI();

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
