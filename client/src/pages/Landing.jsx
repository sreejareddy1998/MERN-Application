import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";
// const StyledBtn = styled.button`
//   font-size: 1.5rem;
//   background: red;
//   color: white;
// `;
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job<span>Tracking</span>App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            nulla molestiae veritatis illum quasi. Praesentium, quod a atque
            alias harum totam doloribus? Praesentium ipsam architecto eligendi!
            Distinctio cum vero deserunt.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login/Demo User
          </Link>
        </div>
        <img src={main} alt="Job hunt" className="img main-img" />
      </div>
      {/* <StyledBtn>Styled Button</StyledBtn> */}
    </Wrapper>
  );
};

export default Landing;
