import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Modal from 'react-modal';
import './popup.css'; // Import CSS file for styling

const PopupEnquire = ({ isOpen, onClose }) => {
  const initialValues = {
    name: '',
    phone: '',
    email: '',
    state: '',
    city: '',
    message: '',
  };

  const onSubmit = (values, { resetForm }) => {
    // Handle form submission logic here (e.g., send data to backend)
    console.log(values);
    resetForm();
    onClose(); // Close the modal after form submission
  };

  const handleCloseModal = () => {
    // Reset form values when modal is closed
    onClose();
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    // Add more validation rules for other fields (phone, state, city, message) if needed

    return errors;
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={handleCloseModal} className="modal">
      <h2>Contact Form</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <Field type="text" id="phone" name="phone" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <Field type="text" id="state" name="state" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <Field type="text" id="city" name="city" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <Field as="textarea" id="message" name="message" className="form-control" />
            </div>
            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default PopupEnquire;
