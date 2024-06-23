import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Workouts = ({ workoutList, setWorkoutList }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
    console.log(toggle);

    let result = [];
    result = toggle
      ? workoutList.sort((a, b) => a.calories - b.calories)
      : workoutList.sort((a, b) => b.calories - a.calories);

    setWorkoutList(result)
  };

  return (
    <div>
      <button onClick={handleClick}>
        Sort By Calories Burned ({toggle ? 'Ascending' : 'Descending'})
      </button>
      <h2>Workout List</h2>
      <ul>
        {workoutList.map((workout) => (
          <li key={workout.id}>
            <Link to={`/workouts/${workout.id}`}>
              {workout.name} - {workout.date}
              <br />
              Calories Burned: {workout.calories}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
