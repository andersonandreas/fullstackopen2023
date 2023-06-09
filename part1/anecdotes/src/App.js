import { useState } from 'react';

const Button = props => {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
};

const Display = props => {
  const { selectVal, votesCount } = props;

  if (votesCount > 0) {
    return (
      <>
        <p>{selectVal}</p>
        <p>Has {votesCount} votes</p>
      </>
    );
  }

  return (
    <>
      <p>{selectVal}</p>
    </>
  );
};

//Helper function sorting array
const maxValueIndex = arr => {
  const bigNumIndex = arr.indexOf(Math.max(...arr));
  return bigNumIndex;
};

const DisplayMostVote = props => {
  const { mostVotes, displayCounter, check } = props;
  const checkForVotes = check.some(item => item > 0);

  if (checkForVotes) {
    return (
      <section>
        <h2>Anecdote with most votes</h2>
        <p>{mostVotes}</p>
        <p>Has {displayCounter} votes</p>
      </section>
    );
  }
  return null;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const points = [0, 0, 0, 0, 0, 0, 0, 0];

  const [selected, setSelected] = useState('');
  const [vote, setVote] = useState(points);

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(anecdotes[randomNum]);
  };

  const handleVote = () => {
    const index = anecdotes.indexOf(selected);

    setVote(copyArr => {
      const copyPoints = [...copyArr];
      copyPoints[index] += 1;
      return copyPoints;
    });
  };

  const indexOfValue = anecdotes.indexOf(selected);
  const mostVoted = maxValueIndex(vote);
  const mostVotesAne = maxValueIndex(vote);

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Display
        mostVotes={anecdotes[mostVoted]}
        votesCount={vote[indexOfValue]}
        selectVal={selected}
      ></Display>
      <Button onClick={handleVote}>vote</Button>
      <Button onClick={handleClick}>next anecdote</Button>
      <DisplayMostVote
        mostVotes={anecdotes[mostVotesAne]}
        displayCounter={vote[mostVotesAne]}
        check={vote}
      ></DisplayMostVote>
    </>
  );
};

export default App;
