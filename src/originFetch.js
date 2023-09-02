// OriginFetch.js
import React from 'react';

const OriginFetch = ({ origins, selectedOrigin, onSelectOrigin }) => {
    return (
        <div>
            <label>Select Origin:</label>
            <select
                value={selectedOrigin}
                onChange={(e) => onSelectOrigin(e.target.value)}
            >
                <option value="">All</option>
                {origins.map((origin) => (
                    <option key={origin} value={origin}>
                        {origin}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default OriginFetch;
