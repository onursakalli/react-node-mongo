import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';



function StartPage() {

    useEffect(() => {
        // Update the document title using the browser API
        axios.get('http://localhost:5000/users/')
        .then(response => {
          if (response.data.length > 0) {
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        })
      });

  return (
    <h1>Start Page</h1>
  );
}

export default StartPage;