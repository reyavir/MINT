import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PastEntry from '../components/PastEntry';
import '../App.css';

const MainPage = () => {
  const navigate = useNavigate();
  const [pastEntries] = useState([
    { date: '2024-10-25', entry: 'Had a minor headache in the morning.' },
    { date: '2024-10-24', entry: 'Felt tired, no other symptoms' },
    { date: '2024-10-23', entry: 'felt better, went on a run today.' }
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Narrative Project</h1>
      </header>
      <main>
        <button 
          className="suggestion-button"
          onClick={() => navigate('/entry')}
        >
          Check In
        </button>

        <div className="past-entries">
          <h2>Past Responses</h2>
          {pastEntries.map((entry, index) => (
            <PastEntry
              key={index}
              date={entry.date}
              entry={entry.entry}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default MainPage;