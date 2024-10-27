import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function EntryPage() {
  const [entry, setEntry] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const navigate = useNavigate();

  const handleEntryChange = (e) => {
    setEntry(e.target.value);
  };

  const getSuggestion = () => {
    const suggestions = [
      "Describe any symptoms you have seen this week.",
      "How has your energy level been?",
      "Have you noticed any changes in your sleep patterns?",
    ];
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    setSuggestion(randomSuggestion);
  };

  const handleSubmit = () => {
    // TODO add logic to save/store entry
    console.log('Entry submitted:', entry);
    navigate('/');
  };

  return (
    <div className="EntryPage">
      <header className="App-header">
        <h1>AI Narrative Project</h1>
      </header>
      <main>
        <button 
          className="suggestion-button"
          onClick={() => navigate('/')}
        >
          Back
        </button>
        <p className="instructions">
          Use this space to write about your health and anything else you would like to share with your doctor.
        </p>
        <textarea
          className="journal-entry"
          value={entry}
          onChange={handleEntryChange}
          placeholder="Start writing your journal entry here..."
          rows="10"
        ></textarea>
        <button className="suggestion-button" onClick={getSuggestion}>Get Writing Suggestion</button>
        {suggestion && <p className="suggestion">{suggestion}</p>}
      </main>
    </div>
  );
}

export default EntryPage;