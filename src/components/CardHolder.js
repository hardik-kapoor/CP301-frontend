import React from "react";
import Card from "./Card";
import { complaintUrl, bookUrl, courseUrl } from "../imageUrl";

const CardHolder = () =>{
    return (
      <div className="mainHead ui three column stackable grid" style={{marginTop:'5vh', paddingBottom:'50vh', marginLeft:'1vw',marginRight:'1vw'}}>
          <Card imgSource={complaintUrl} imgAlt="complaint portal" header="Complaint Portal"/>
          <Card imgSource={bookUrl} imgAlt="complaint portal" header="Book Exchange Portal"/>
          <Card imgSource={courseUrl} imgAlt="complaint portal" header="Course Discussion Portal"/>
      </div>   
    );
};

export default CardHolder;