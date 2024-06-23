import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CreateWorkout = ({ addWorkout, workoutList, setWorkoutList }) => {
  const navigate = useNavigate();
  const [workout, setWorkout] = useState({});

  const handleChange = (e) => {
    setWorkout({
      ...workout,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkoutList([...workoutList, workout]);
    setWorkout({
      name: '',
      date: '',
      duration: '',
      calories: '',
    });
    // console.log(workoutList)
    navigate("/workouts")
  };

  return (
    <div>
      <h2>Create Workout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Workout Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
        <br />
        <label htmlFor="date">Date</label>
        <input type="date" name="date" id="date" onChange={handleChange} />
        <br />

        <label htmlFor="">Duration</label>
        <input
          type="number"
          name="duration"
          id="duration"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="">Calories Burned</label>
        <input
          type="number"
          name="calories"
          id="calories"
          onChange={handleChange}
        />
        <br />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateWorkout;
