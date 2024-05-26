import React from 'react';
import Feature from "../../components/feature/Feature";

import "./whatapt3.css";

export default function about() {
  return (
    <div  className="section_margin whatapt3" id='wapt3'>
      <div className="whatapt3-feature">
        <Feature title={"What is GPT-3"} text={"We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."}></Feature>
      </div>
      <div className="whatapt3-heading">
        <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
        <p><a href="#blog">Explore The Library</a></p>
      </div>
      <div className="whatapt3-container">
        <Feature title={"Chatbots"} text={"We so opinion friends me message as delight. Whole front do of plate heard oh ought. "}></Feature>
        <Feature title={"Knowledgebase"} text={"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"}></Feature>
        <Feature title={"Education"} text={"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"}></Feature>
      </div>
    </div>
  )
}

