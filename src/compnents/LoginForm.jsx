import Joi from "joi-browser";
import Form from "./common/Form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    // for form validtaion
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("submitted");
  };
  render() {
    return (
      <div>
        <h1>LoginForm</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
