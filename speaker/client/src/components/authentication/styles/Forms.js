import React from "react";
import styled from "styled-components";
import google from "../../../util/img/google.png";
import twitter from "../../../util/img/twitter.png";

export const FormGroup = styled.div`
  color: palevioletred;
  display: block;
  margin: 50px auto;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 5%;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  display: block;
  position: relative;
  text-align: left;
  font-family: Lato;
  font-size: 1rem;
  color: #a2a9b9;
  left: 0;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 1.5vh;
`;

export const Input = styled.input`
  padding: 0.5em;
  background: #202b41;
  border: 1px solid #1d2537;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
  height: 50px;
  font-size: 1rem;
  color: #fff;
  padding-left: 13px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #c1c3c7;
  }
  :-ms-input-placeholder {
    color: #c1c3c7;
  }
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
`;

export const InnerContainer = styled.div`
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const H1 = styled.h1`
  font-size: 3.7vh;
  font-family: Lato;
  color: #fff;
  margin-top: 5vh;
`;

export const LowerContainer = styled.div`
  display: flex;
  margin-bottom: 4%;
  width: 75%;
  margin: 0 auto;
`;

export const P = styled.p`
  color: #a2a9b9;
  font-family: Lato;
  font-size: 1.1rem;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
export const LowerContainerDiv = styled.div`
  margin-top: 2vh;
  flex-grow: 1;
  font-family: Lato;
  font-size: 1.1rem;
  &:nth-child(2) {
    color: #056bd9;
    flex-grow: 1;
    position: relative;
    right: -12%;
    cursor: pointer;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 20;
    word-wrap: break-word;
    top: 2px;
  }
`;

export const Span = styled.span`
  color: #fff;
  font-size: 1.1rem;
`;

export const ButtonFill = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 4%;
  letter-spacing: 0.12rem;
  font-family: Lato, sans-serif;
  border-radius: 0.2rem !important;
  height: 50px;
  background: #056bd9 !important;
  border: 1.2px solid #056bd9;
  color: #fff !important;
  font-weight: 600 !important;
  font-size: 1.1rem;
  text-transform: uppercase;
  width: 500px;
  max-width: 100%;
  margin-bottom: 5vh;
`;

export const ButtonEmpty = styled.button`
  display: inline-block;
  margin: 0 auto;
  margin-top: 3%;
  font-family: Lato, sans-serif;
  border-radius: 0.6rem !important;
  height: 60px;
  background: transparent !important;
  border: 1.2px solid #056bd9;
  color: #056bd9 !important;
  font-weight: 500 !important;
  font-size: calc(0.55vw + 0.55vh + 0.6vmin) !important;
  letter-spacing: 0.1rem;
  /* width: 500px; */
  max-width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 30px;
  &:nth-child(2) {
    margin-left: 30px !important;
  }
`;

export const GoogleImage = styled.div`
  width: 30px;
  height: 30px;
  margin: 15px;
  cursor: pointer;
  background-image: url(${google});
  background-size: cover;
`;
export const TwitterImage = styled.div`
  width: 30px;
  height: 30px;
  margin: 15px;
  cursor: pointer;
  background-image: url(${twitter});
  background-size: cover;
`;

export const GoogleText = styled.div`
  flex-grow: 1;
  flex-direction: row;
  position: relative;
  width: 60%;
  right: 0;
  font-family: Lato;
  font-size: 1.3rem;
  /* float: right; */
  padding-top: 1.5vh;
`;
