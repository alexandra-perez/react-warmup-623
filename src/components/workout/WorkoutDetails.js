import React from "react";
import { useParams } from "react-router-dom";
import "./WorkoutDetails.css";

const WorkoutDetails = ({ workoutList }) => {
  const { id } = useParams();
  const workout = workoutList.find((workout) => workout.id === parseInt(id));

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return (
    <div>
      <h2>{workout.name}</h2>
      <p>Date: {workout.date}</p>
      <p>Duration: {workout.duration}</p>
      <p>Calories Burned: {workout.calories}</p>
    </div>
  );
};

export default WorkoutDetails;
