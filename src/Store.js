import React, { useContext, useState, useEffect, createContext } from 'react';
// import axios from 'axios';

const Context = createContext();

export function ContextProvider({ children }) {
  let currentOffset = 0;
  const [users, setUsers] = useState([]);
  const [isGrid, setIsGrid] = useState('true');
  const [isLoading, setIsLoading] = useState('true');

  const fetchUsers = async () => {
    const eightUsers = [];
    try {
      const res = await fetch(
        'https://randomuser.me/api/?results=8&offset=${currentOffset}'
      );
      const data = await res.json();
      data.results.forEach((p) => eightUsers.push(p));
      setUsers((prevUsers) => [...prevUsers, ...eightUsers]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    currentOffset += 8;
  };

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
  }, []);

  return (
    <Context.Provider
      value={{
        users,
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
