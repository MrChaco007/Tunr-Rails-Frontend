import React from "react";

const Form = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.song);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Song"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="artist"
        placeholder="Artist"
        value={formData.artist}
        onChange={handleChange}
      />
      <input
        type="text"
        name="time"
        placeholder="Length"
        value={formData.time}
        onChange={handleChange}
      />
      <input type="submit" value={props.label.toUpperCase()} />
    </form>
  );
};

export default Form;
