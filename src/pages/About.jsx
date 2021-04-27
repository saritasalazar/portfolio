import React from "react";
    import "./About.scss";
    const About = () => {
      return (
 <div className="container" style={{flexDirection: "row", alignItems:"center", justifyContent: "center"}}>
    <div><img
            className="me"
            src="https://octodex.github.com/images/femalecodertocat.png"
            alt="cup of coffee"
            />
        <p className="paragraph" id="hello"> Hi! I'm Sara. </p>
        </div>
              <div className="about">
                <h2> 📍: Miami, FL 🌴</h2>
                <p>
                  When I'm not coding, you can usually find me at the beach, in a
                  coffee shop, or doing something musical.{" "}
                </p>
    
                <h2>Skills: </h2>
                <p>
                  HTML | CSS | JavaScript | React | React Native | Node | Express | Knex | Bookshelf | MongoDB | Mongoose | mySQL| Heroku | AWS Amplify| Framer Motion | Adobe Creative Cloud 
                </p>
                <h2>Currently Reading: </h2>
                <p>"A Programmer's Guide to Computer Science" by: William M. Springer II </p>
              
              </div>
              </div>
    
      );
    };
    
export default About;
    
