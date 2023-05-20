import React, { useState } from 'react';
import axios from 'axios';
import TextField from './Components/TextField/Textfield';
import PastQueries from './Components/PastQueries/PastQueries';
import Results from './Components/Results/Results';
import { useLS } from './LocalStorageContextHook/lscontext';
import './App.scss';

function App() {
  const { value: lsPastQueries, setls } = useLS();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(null);
  const [pastQueries, setPastQueries] = useState(lsPastQueries);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e, query, newPage = page) => {
    e.preventDefault();
    if (query.trim() === '') return;
    const { data: { content, pages } } = await axios.get(`${import.meta.env.VITE_BACKEND_ENDPOINT}?q=${query}&p=${newPage}`);
    setPages(pages);
    setResults(content);
    if(!pastQueries) {
      setPastQueries([query]);
      setls([query]);      
    }
    else if (!pastQueries.includes(query)) {
      setPastQueries((prevQueries) => [query, ...prevQueries]);
      setls([query, ...lsPastQueries]);
    }
  };

  const handleQueryClick = async (pastQuery) => {
    setQuery(pastQuery);
    await handleSubmit(new Event('submit'), pastQuery, 1);
  };

  const handlePageChange = async (newPage) => {
    setPage(newPage);
    await handleSubmit(new Event('submit'), query, newPage);
  };

  return (
    <div className="app">
      <form onSubmit={(e) => handleSubmit(e, query, 1)} className="search-form">
        <TextField onChange={handleQueryChange} value={query} />
        <button type="submit">Search</button>
      </form>
      <Results 
        data={results}
        page={page}
        pages={pages}
        handleNextPage={() => handlePageChange(page + 1)}
        handlePrevPage={() => handlePageChange(page - 1)}
      />
      <PastQueries pastQueries={pastQueries} handleQueryClick={handleQueryClick} handleQueryChange={handleQueryChange} />
    </div>
  );
}

export default App;
