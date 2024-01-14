import '../assets/stylesheets/form.css';
import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SOAPNotesForm = ({soapNotes, setSoapNotes}) => {
  const navigate = useNavigate();

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
          var newSoapNotes = {
            subjective: values.subjective,
            objective: values.objective,
            assessment: values.assessment,
            plan: values.plan,
          }
          setSoapNotes(newSoapNotes);
          navigate('/submit');
        }}
      >
        <Form className="soap-notes-form">
          <div className="form-group">
            <p>Input your subjective notes</p>
            <Field component="textarea" name="subjective" className="soap-input" />
          </div>

          <div className="form-group">
            <p>Input your objective notes</p>
            <Field component="textarea" name="objective" className="soap-input" />
          </div>

          <div className="form-group">
            <p>Input your assessment notes</p>
            <Field component="textarea" name="assessment" className="soap-input" />
          </div>

          <div className="form-group">
            <p>Input your plan notes</p>
            <Field component="textarea" name="plan" className="soap-input" />
          </div>

          <button type="submit" className="submit-button">Submit for Analysis</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SOAPNotesForm;
