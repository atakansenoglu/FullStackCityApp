import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
//import * as Yup from "yup";
import axios from "axios"

function Home() {
  const initialValues = {
    name: "",
  };

  /* const validationSchema = Yup.object().shape({
    longitude: Yup.string().min(2).max(10).required(),
    latitude: Yup.string().required(),
    name: Yup.string().required(),
    weather: Yup.string().required(),
  }); */

  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://localhost:3001/", data).then((response) => {
      console.log("axios post çalıştı"+ response);
    });
  };

  return (
    <div className="homepage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        //validationSchema={validationSchema}
      >
        <Form>
          <label>Search: </label>
          <ErrorMessage name="name" element="span" />
          <Field
            autoComplete="off"
            id="input"
            name="name"
            placeholder="City Name"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Home;
