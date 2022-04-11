import React, { useState, useEffect } from "react";
import firebase from "./firebase";

const Login = () => {
  const [schools, setSchools] = useState();
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("schools");
  // console.log(ref);
  function getschools() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      console.log("Fire Base data ", items);
      setSchools(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getschools();
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {schools?.map((school) => (
        <div key={school.id}>
          <h2>{school.title}</h2>
          <p>{school.desc}</p>
        </div>
      ))}
    </div>
  );
};
export default Login;
