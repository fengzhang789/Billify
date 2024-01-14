import React, { useState } from 'react'
import '../assets/stylesheets/feature.css';
import Navbar from './Navbar';
import SOAPAnalysis from './SOAPAnalysis';
import '../assets/stylesheets/soapanalysis.css';
import { Formik, Form, Field } from 'formik';


const Feature = () => {
  const [soapNotes, setSoapNotes] = useState('')
  const [showForm, setShowForm] = useState(true)

  const handleFormSubmit = (values) => {
    const newSoapNotes =
      values.subjective + '\n' + values.objective + '\n' + values.assessment + '\n' + values.plan;
    setSoapNotes(newSoapNotes);
    setShowForm(false);
  };

  return (
    <div>
      <div>
        <Navbar />
        <div className="billify__feature-content">
          <h1 className="gradient__text">Input SOAP Notes</h1>
          {showForm ? (
          <div className="soap-notes-form-container">
          <Formik
            initialValues={{
              subjective: '',
              objective: '',
              assessment: '',
              plan: '',
            }}
            onSubmit={handleFormSubmit}
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
        </div>) : (
        <SOAPAnalysis text = {soapNotes}/>
        )}
        </div>
      </div>
      <Bubbles /> {/* Insert Bubbles component here */}
    </div>
  );
};

const Bubbles = () => {
  const getRandomSize = () => {
    // Sizes range from 20px to 300px
    return 20 + Math.random() * 150;
  };

  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => {
        const size = getRandomSize();
        const style = {
          width: `${size}px`,
          height: `${size}px`,
        };

        return <div key={index} className={`gradient-bubble bubble-${index}`} style={style} />;
      })}
    </>
  );
};




export default Feature