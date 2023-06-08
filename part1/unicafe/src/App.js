import { useState } from 'react';

const H1 = props => <h1>{props.children}</h1>;
const H2 = props => <h2>{props.children}</h2>;

const Button = props => {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
};

// StatisticLine for all the btn clickes
const StatisticLine = props => {
  const { children, count } = props;
  return (
    <tr>
      <td>
        {children} {count}
      </td>
    </tr>
  );
};

// Statistics
const Statistics = props => {
  const { countGood, countNeutral, countBad, allClicks } = props;

  const allValuesCounted = countGood + countNeutral + countBad;
  // all clicks counted
  const averageValue =
    allValuesCounted > 0 ? (countGood - countBad) / allClicks : 0;

  // postive
  const positiveValue =
    allValuesCounted > 0 ? (countGood / allClicks) * 100 : 0;

  if (countGood > 0 || countNeutral > 0 || countBad > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine count={countGood}>good</StatisticLine>
          <StatisticLine count={countNeutral}>neutral</StatisticLine>
          <StatisticLine count={countBad}>bad</StatisticLine>
          <StatisticLine count={allClicks}>all</StatisticLine>
          <StatisticLine count={averageValue.toFixed(2)}>average</StatisticLine>
          <StatisticLine count={`${positiveValue.toFixed(2)} %`}>
            positive
          </StatisticLine>
        </tbody>
      </table>
    );
  }

  return <p>No feedback given</p>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // All values btn clicks
  const allValues = good + neutral + bad;
  // console.log(allValues);

  // goodBtn
  const handleClickGood = () => {
    setGood(good + 1);
  };

  // neutralBtn
  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  // badBtn
  const handleClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <H1>give feedback</H1>

      <Button onClick={handleClickGood}>good</Button>
      <Button onClick={handleClickNeutral}>neutral</Button>
      <Button onClick={handleClickBad}>bad</Button>

      <H2>statistics</H2>
      <Statistics
        countGood={good}
        countNeutral={neutral}
        countBad={bad}
        allClicks={allValues}
      >
        {' '}
      </Statistics>
    </div>
  );
};

export default App;
