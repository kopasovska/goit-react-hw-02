import css from './Feedback.module.css';

const Feedback = ({ votes, totalFeedback, positiveFeedback }) => {
  return (
    <>
      {Object.entries(votes).map(([key, value], index) => (
        <p key={index} className={css.feedbackText}>
          {key}: {value}
        </p>
      ))}
      <p className={css.feedbackText}>Total: {totalFeedback}</p>
      <p className={css.feedbackText}>Positive: {positiveFeedback}%</p>
    </>
  );
};

export default Feedback;
