import './soap.css';
import React from 'react';
import { Formik, Form, Field } from 'formik';


const SOAPNotesForm = () => {
  return (
    <div className="soap-notes-form-container">
      <Formik
        initialValues={{
          subjective: '',
          objective: '',
          assessment: '',
          plan: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="soap-notes-form">
          <div className="form-group">
            <p>Input your subjective notes</p>
            <Field type="text" name="subjective" className="soap-input" />
          </div>

          <div className="form-group">
            <p>Input your objective notes</p>
            <Field type="text" name="objective" className="soap-input" />
          </div>

          <div className="form-group">
            <p>Input your assessment notes</p>
            <Field type="text" name="assessment" className="soap-input" />
          </div>

          <div className="form-group">
            <p>Input your plan notes</p>
            <Field type="text" name="plan" className="soap-input" />
          </div>

          <button type="submit" className="submit-button">Submit for Bill</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SOAPNotesForm;
