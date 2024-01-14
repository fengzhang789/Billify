import '../assets/stylesheets/form.css';
import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';


const SOAPNotesForm = () => {
  const [soapNotes, setSoapNotes] = useState('')

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
          const soapNotes = values.subjective + '\n' + values.objective + '\n' + values.assessment + '\n' + values.plan

          console.log(soapNotes);
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
