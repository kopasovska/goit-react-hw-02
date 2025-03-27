import css from './Feedback.module.css';

const Feedback = ({ votes, totalFeedback }) => {
  return (
    <>
      {Object.entries(votes).map(([key, value], index) => (
        <p key={index} className={css.feedbackText}>
          {key}: {value}
        </p>
      ))}
      <p className={css.feedbackText}>Total: {totalFeedback}</p>
      <p className={css.feedbackText}>
        Positive: {Math.round((votes.good / totalFeedback) * 100)}%
      </p>
    </>
  );
};

export default Feedback;
