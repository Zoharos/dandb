import React from 'react';
import './PastQueries.scss';

function PastQueries({ pastQueries, handleQueryClick }) {
    return (
        <div className="past-queries">
            <h2>Past Queries</h2>
            <ul>
            {pastQueries && pastQueries.map((pastQuery) => (
                <li
                key={pastQuery}
                onClick={() => {
                    handleQueryClick(pastQuery);
                }}
                >
                {pastQuery}
                </li>
            ))}
            </ul>
      </div>
    )
}

export default PastQueries;