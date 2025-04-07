import React, { useState } from "react";

export const TaskForm = () => {
  const [text, setText] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Insert the task into the collection
//     Meteor.call("tasks.insert", text);

//     // Clear the input field
//     setText("");
//   };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}