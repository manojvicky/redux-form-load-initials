import React from "react";
import ContactForm from "./Forms/ContactForm";

class App extends React.Component {
  constructor() {
    super();
    this.myFunc = this.myFunc.bind(this);
  }
  myFunc(values) {
    console.table([values]);
  }
  render() {
    return (
      <div>
        <ContactForm onSubmit={this.myFunc} />
      </div>
    );
  }
}
export default App;
