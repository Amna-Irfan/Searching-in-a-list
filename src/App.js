import React, { useState, useEffect, useMemo, useCallback} from 'react';
import {data} from './data';
import Search from './Search';
import List from './List';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filterItems = () => {
    const filteredData = (items.filter((item) => {
          const matchesSearchQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase());
          return matchesSearchQuery;
    }));

    return filteredData;
  };

  const filteredItems = useMemo(() => filterItems(), [items, searchQuery]);

  const handleSearch = useCallback((query) => {
      setSearchQuery(query);
  }, [searchQuery]);

  useEffect(()=>{
        setItems(data);
    }, []);

    

  return (
    <div>
      <Search handleSearch={handleSearch}/>
      {filteredItems.length > 0 && <List items={filteredItems}/>}
      {filteredItems.length <= 0 && <h4>No Items Found</h4>}
    </div>
  );
}

export default App;
