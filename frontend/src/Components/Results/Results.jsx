import React, { useState, useEffect } from 'react';
import TextField from '../TextField/Textfield';

function Results({ data, handleNextPage, handlePrevPage, pages, page }) {
    console.log(data);
    const [results, setResults] = useState(data);
    const [highlightedTerm, setHighlightedTerm] = useState('');

    const handleHighlight = (term) => {
        setHighlightedTerm(term);
    };

    useEffect(() => {
        if(highlightedTerm){
            const highlightRegex = new RegExp(highlightedTerm, 'gi');
            const resultsWithHighlight = data.map((datum) => ({
              ...datum,
              title: datum.title.replace(highlightRegex, '<mark>$&</mark>'),
            }));
            setResults(resultsWithHighlight);
        }
        else
            setResults(data)
    }, [data, highlightedTerm]);

    return (
        <>
            {results.length > 0 && (
                <div className='results-container'>
                <ul className="results-list">
                    {results.map((result) => (
                    <li key={result.url}>
                        <a
                        dangerouslySetInnerHTML={{ __html: result.title }}
                        href={result.url}
                        ></a>
                    </li>
                    ))}
                </ul>
        
                <div className="pagination">
                    {page > 1 && (
                        <button onClick={handlePrevPage}>Previous Page</button>
                    )}
                    {page < pages && (
                        <button onClick={handleNextPage}>Next Page</button>
                    )}
                </div>
                {results.length > 0 && <TextField placeholder='find term' onChange={(e) => handleHighlight(e.target.value)} value={highlightedTerm} />}
                </div>
            )}
          </>
    )
}

export default Results;