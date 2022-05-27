import React, { useContext, useState, useEffect, createContext } from 'react';

const Context = createContext();

export function ContextProvider({ children }) {
  // eslint-disable-next-line
  let currentOffset = 0;
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('asc');
  const [isGrid, setIsGrid] = useState('true');
  const [isLoading, setIsLoading] = useState('true');

  const fetchUsers = async () => {
    const sixUsers = [];
    try {
      const res = await fetch(
        `https://randomuser.me/api/?results=6&offset=${currentOffset}`
      );
      const data = await res.json();
      data.results.forEach((p) => sixUsers.push(p));
      setUsers((prevUsers) => [...prevUsers, ...sixUsers]);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    currentOffset += 6;
  };

  console.log(users);

  const handleScroll = (e) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (filter === 'asc') {
      // code to ascend sort
      let usersF = users.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
      setFilter('');
      console.log('sorted ascending', usersF);
    } else if (filter === 'desc') {
      // code to descend sort
      let usersF = users
        .sort((a, b) => (a.name.first > b.name.first ? 1 : -1))
        .reverse();
      console.log('sorted descending', usersF);
      setFilter('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <Context.Provider
      value={{
        users,
        filter,
        setFilter,
        isGrid,
        setIsGrid,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useAPI() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
