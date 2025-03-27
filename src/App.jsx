import { useState, useEffect } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [votes, setVotes] = useState(() => {
    const savedVotes = window.localStorage.getItem('saved-votes');
    if (savedVotes !== null) {
      return JSON.parse(savedVotes);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  let totalFeedback = votes.good + votes.neutral + votes.bad;

  const updateFeedback = feedbackType => {
    setVotes({
      ...votes,
      [feedbackType]: votes[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    totalFeedback = 0;
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem('saved-votes', JSON.stringify(votes));
  }, [votes]);

  return (
    <>
      <Description />
      <Options
        voteTypes={Object.keys(votes)}
        updateVotes={updateFeedback}
        {...(totalFeedback > 0 && {
          addReset: true,
          resetVotes: resetFeedback,
        })}
      />
      {totalFeedback ? (
        <Feedback votes={votes} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
