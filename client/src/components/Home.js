import React from "react";
import {FaReact, FaNode} from "react-icons/fa";
import {SiMysql, SiExpress} from "react-icons/si";

const Home = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-lg-12">
          <h1 className="text-center">
            Full Stack Practice App using
            <span className="btn btn-outline-primary btn-lg mx-3 anim shadow"><b><FaReact /> ReactJS</b></span>
            <span className="btn btn-outline-success btn-lg mx-3 anim shadow"><b><FaNode /> NodeJS</b></span>
            <span className="btn btn-outline-warning btn-lg mx-3 anim shadow"><b><SiMysql /> MySql</b></span> & 
            <span className="btn btn-outline-success btn-lg mx-3 anim shadow"><b><SiExpress /> Express</b></span>
          </h1>
        </div>
      </div>
      <div className="row mt-4">
          <div className="col-lg-6 offset-4 text-center mt-5">
              <img src="images/react.png" alt="react" className="react_logo" />
          </div>
      </div>
    </div>
  );
};

export default Home;
