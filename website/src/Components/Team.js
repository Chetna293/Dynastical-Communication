import React from "react";
import "./Team.css";
import team1 from "./Images/team1.png";
import {motion} from "framer-motion";

const Team = () =>{
    const [rotate, setRotate] = React.useState(false);

      return( 
        <section id="team">
            <div className="team-section">
                <div className="container">
                    <div className="row">
                        <motion.div 
                        animate={{ rotate: rotate ? 360 : 0 }} 
                        onClick={() => {
                            setRotate(!rotate);
                        }}
                        className="title">
                            <h3>Heros Behind The Company</h3>
                            <h1>Creative Team</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </motion.div>
                    </div>
                    <div className="team-card">
                        <div className="card">
                            <div className="image-section">
                                <img src={team1} alt="team1" />
                            </div>
                            <div className="content">
                                <h3>ABC</h3>
                                <h4>Web Developer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image-section">
                                <img src={team1} alt="team1" />
                            </div>
                            <div className="content">
                                <h3>LMN</h3>
                                <h4>Web Developer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image-section">
                                <img src={team1} alt="team1" />
                            </div>
                            <div className="content">
                                <h3>XYZ</h3>
                                <h4>Web Developer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );  
};
export default Team;                                                                                                                                      