import React, { useState } from 'react';
import Filter from './components/Filter/Filtr.jsx';
import Cards from './components/Cards/Cards.jsx';

function App() {
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    company: '',
    sort: '',
    price: 0,
  });

function handleChange(Filter) {
    setFilters(Filter);
  };

  return (
    <div>
      <Filter onFilterChange={handleChange} />
      <Cards filters={filters} />
    </div>
  );
}

export default App;
