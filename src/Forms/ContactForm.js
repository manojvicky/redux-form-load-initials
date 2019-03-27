import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { load } from "../InitializeFrom";
import Check from "./Check";

const data = {
  FirstName: "Manoj",
  LastName: "Prajapati",
  Age: "27"
};
const newField = ({ input, meta, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
let ContactForm = props => {
  let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let y = [];
  x.forEach(ele => {
    y.push(<div>{ele}</div>);
  });
  let xx = y.map(item => {
    return item;
  });
  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Field
          label="First Name"
          type="text"
          component={newField}
          name="FirstName"
        />
        <Field
          label="Last Name"
          type="text"
          component={newField}
          name="LastName"
        />
        <Field label="Age" type="text" component={newField} name="Age" />

        <button type="submit">Submit</button>
        <button type="button" onClick={() => props.load(data)}>
          load
        </button>
        <button onClick={props.reset} type="reset">
          reset
        </button>
      </form>
    </div>
  );
};

ContactForm = Check({
  form: "contact",
  enableReinitialize: true
})(ContactForm);

ContactForm = connect(
  state => ({
    initialValues: state.initializeForm.data
  }),
  dispatch => ({
    load: data => dispatch(load(data))
  })
)(ContactForm);
export default ContactForm;
