import css from './Options.module.css';

const Options = ({ updateVotes, totalVotes, resetVotes }) => {
  return (
    <ul className={css.optionsContainer}>
      <li>
        <button
          onClick={() => updateVotes('good')}
          className={css.optionButton}
        >
          Good
        </button>
      </li>
      <li>
        <button
          onClick={() => updateVotes('neutral')}
          className={css.optionButton}
        >
          Neutral
        </button>
      </li>
      <li>
        <button onClick={() => updateVotes('bad')} className={css.optionButton}>
          Bad
        </button>
      </li>
      {totalVotes > 0 && (
        <li>
          <button onClick={resetVotes} className={css.optionButton}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
