// course
const Course = props => {
  const { courseInfo } = props;
  console.log(courseInfo.parts);

  return (
    <>
      <section>
        <SubHeading title={courseInfo[0].name} />
        <Content parts={courseInfo[0].parts} />
        <Total parts={courseInfo[0].parts} />
      </section>
      <section>
        <SubHeading title={courseInfo[1].name} />
        <Content parts={courseInfo[1].parts} />
        <Total parts={courseInfo[1].parts} />
      </section>
    </>
  );
};

// h2
const SubHeading = ({ title }) => <h2>{title}</h2>;

// part
const Part = props => {
  const { parts } = props;

  return (
    <p>
      {parts.name} {parts.exercises}
    </p>
  );
};

// content
const Content = props => {
  const { parts } = props;

  return (
    <>
      {parts.map(part => (
        <Part key={part.id} parts={part} />
      ))}
    </>
  );
};

// total sum of exercises
const Total = props => {
  const { parts } = props;

  const sum = parts.reduce((total, current) => (total += current.exercises), 0);
  console.log(sum);

  return (
    <p>
      <b>total of exercises: {sum} </b>
    </p>
  );
};

export default Course;
