import React from "react";
import { reduxForm } from "redux-form";

function initForm(props) {
  console.log("props", props);
  return reduxForm({ ...props });
}

export default function createForm(props) {
  return initForm({
    ...props
  });
}
