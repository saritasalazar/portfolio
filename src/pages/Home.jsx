import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './Home.scss';

const Home = () => {
  return (
    <main className="container">
      <section className="content">
        <div className="col">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div className="polaroid__container--left">
                <Link to="/about">
                  <div className="polaroid polaroid--purple">
                    {" "}
                    <img
                      className="polaroid__image"
                      src="https://images.unsplash.com/photo-1574283922240-f3c8502c5e74?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1357&q=80"
                      alt="palm trees"
                    ></img>
                    <p className="paragraph">About Me</p>
                  </div>
                </Link>
              </div>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div className="polaroid__container--right" style={{ margin: "0" }}>
                <a
                  href="https://www.linkedin.com/in/sara-salazar-53b5065b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="polaroid polaroid--pink">
                    {" "}
                    <img
                      className="polaroid__image"
                      src="https://image.flaticon.com/icons/png/512/174/174857.png"
                      alt="LinkedIn Logo"
                    ></img>
                    <p className="paragraph">LinkedIn</p>
                  </div>
                </a>
              </div>
            </motion.div>
            </div>
          <div className="polaroid__container--center">
            <div className="polaroid--main">
              <img
                className="polaroid__image--main"
                src="https://octodex.github.com/images/femalecodertocat.png"
                alt="GitHub Logo"
              />
              <p className="intro">
                Hi! I'm Sara.
              </p>
              <p className="description" style={{marginTop: 0}}> I solve problems and make cool stuff.</p>
              
                <a className="button" style={{color: "white"}} href="mailto:saraesalazar@icloud.com">CONTACT</a>
              
            </div>
          </div>
          <div className="col">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div className="polaroid__container--right">
                <a href="/files/Sara_Salazar.pdf" download="Sara_Salazar.pdf">
                  <div className="polaroid polaroid--blue">
                    {" "}
                    <img
                      className="polaroid__image"
                      src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      alt="Work Desk Setup"
                    ></img>
                    <p className="paragraph" >Resume {""}	
                    <span className="down-arrow">↓</span></p>
                  </div>
                </a>
              </div>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div className="polaroid__container" style={{ margin: "0" }}>
                <a
                  href="https://github.com/saritasalazar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="polaroid polaroid--aqua">
                    {" "}
                    <img
                      className="polaroid__image"
                      src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
                      alt="Github"
                    ></img>
                    <p className="paragraph">Github</p>
                  </div>
                </a>
              </div>
            </motion.div>
            </div>
    </section>
    </main>
  );
};

export default Home;
