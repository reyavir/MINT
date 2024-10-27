import React from 'react';

const PastEntry = ({ date, entry }) => {
  return (
    <div className="past-entry">
      <span className="date">
        {new Date(date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })}
      </span>
      <span className="entry">{entry}</span>
    </div>
  );
};

export default PastEntry;