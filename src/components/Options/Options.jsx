import css from './Options.module.css';

const Options = ({ voteTypes, updateVotes, addReset, resetVotes }) => {
  return (
    <div className={css.optionsContainer}>
      {voteTypes.map((type, index) => {
        return (
          <button
            key={index}
            onClick={() => updateVotes(type)}
            className={css.optionButton}
          >
            {type}
          </button>
        );
      })}
      {addReset && (
        <button onClick={resetVotes} className={css.optionButton}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
