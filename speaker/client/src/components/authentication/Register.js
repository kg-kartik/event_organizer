import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import InputField from "../commons/InputField";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import PropTypes from "prop-types";

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

class Register extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
    name: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  // Update errors state object
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors) {
      return {
        errors: nextProps.errors
      };
    }
  }

  // onChange method to change the state of the form fields
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // onSubmit method for submitting the form details
  onSubmit = event => {
    // Create an object
    const newAdmin = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newAdmin, this.props.history);
    event.preventDefault();
  };

  render() {
    return (
      <Container>
        <Card>
          <InnerContainer>
            <H1>Sign Up for an Account</H1>
            <P>
              {" "}
              Let's get you all setup for the so you can start submitting your
              talk for the conference.
            </P>
            <FormGroup>
              <form noValidate onSubmit={this.onSubmit}>
                <InputField
                  placeholder="Full Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={this.state.errors.name}
                  label="Name"
                  type="text"
                />
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
                <InputField
                  placeholder="Confirm Password"
                  name="password2"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={this.state.errors.password2}
                  label="Confirm Password"
                  type="password"
                />
                <LowerContainer>
                  <LowerContainerDiv>
                    <Checkbox type="checkbox" id="box-3" />
                    <Label htmlFor="box-3" className="checkbox_label">
                      <Span>
                        I agreed to all the statements included in{" "}
                        <Link className="link" to="/terms">
                          Terms of use
                        </Link>{" "}
                      </Span>
                    </Label>
                  </LowerContainerDiv>
                </LowerContainer>
                <ButtonFill type="submit">Sign Up</ButtonFill>
                <P>or sign up using</P>
                <ButtonEmpty>
                  <GoogleImage />
                </ButtonEmpty>
                <ButtonEmpty>
                  <TwitterImage />
                </ButtonEmpty>
                <ButtonEmpty>
                  <GoogleImage />
                </ButtonEmpty>
              </form>
            </FormGroup>
          </InnerContainer>
        </Card>

        <Card />
      </Container>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
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
