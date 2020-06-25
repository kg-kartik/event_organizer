import React, { Component } from "react";
import styled from "styled-components";
import InputField from "../commons/InputField";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { createBrowserHistory } from "history";
import {
  FormGroup,
  InnerContainer,
  H1,
  LowerContainer,
  P,
  Checkbox,
  Label,
  LowerContainerDiv,
  Span,
  ButtonFill,
  ButtonEmpty,
  GoogleImage,
  GoogleText,
  TwitterImage
} from "./styles/Forms";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  static getDerivedStateFromProps(nextProps) {
    const history = createBrowserHistory();
    if (nextProps.auth.isAuthenticated) {
      history.push("/dashboard");
      // window.location.reload();
    }
    // For errors
    if (nextProps.errors) {
      return {
        errors: nextProps.errors
      };
    }
  }

  // onChange method
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // onSubmit method to send request to login
  onSubmit = event => {
    event.preventDefault();
    const newLogin = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(newLogin, this.props.history);
  };

  render() {
    return (
      <Container>
        <Card>
          <InnerContainer>
            <H1>Log in to Your Account</H1>
            <P>
              {" "}
              Login to your account so that you can edit and submit talks for
              the conference.
            </P>
            <form noValidate onSubmit={this.onSubmit}>
              <FormGroup>
                <InputField
                  placeholder="Email Address"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={this.state.errors.email}
                  label="Email"
                  type="text"
                />
                <InputField
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={this.state.errors.password}
                  label="Password"
                  type="password"
                />
                <LowerContainer>
                  <LowerContainerDiv>
                    <Checkbox type="checkbox" id="box-3" />
                    <Label htmlFor="box-3" className="checkbox_label">
                      <Span>Remember me</Span>
                    </Label>
                  </LowerContainerDiv>
                  <LowerContainerDiv>Forgot Password?</LowerContainerDiv>
                </LowerContainer>
                <ButtonFill type="submit">Login</ButtonFill>
                <P>or sign in using</P>
                <ButtonEmpty>
                  <GoogleImage />
                </ButtonEmpty>
                <ButtonEmpty>
                  <TwitterImage />
                </ButtonEmpty>
                <ButtonEmpty>
                  <GoogleImage />
                </ButtonEmpty>
              </FormGroup>
            </form>
          </InnerContainer>
        </Card>
        <Card>Hello World</Card>
      </Container>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  /* overflow-x: hidden; */
  /* grid-gap: 1rem; */
`;

const Card = styled.div`
  /* min-height: 50vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #202b41;
  &:nth-child(1) {
    background: #1d2537;
  }
`;
