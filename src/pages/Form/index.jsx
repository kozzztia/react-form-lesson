import React from 'react';
import styles from './styles.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, 'First name must be at least 3 characters long')
    .required('First name is required'),
  lastName: Yup.string()
    .min(3, 'Last name must be at least 3 characters long')
    .required('Last name is required'),
  birthday: Yup.date()
    .max(new Date(), 'Birthday cannot be in the future')
    .required('Birthday is required'),
  gender: Yup.string()
    .oneOf(['male', 'female'], 'Choose gender')
    .required('Gender is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .required('Phone number is required'),
  option: Yup.string()
    .required('Country is required'),
});


const ReactForm = () => {
  return (
    <section className={styles.formContainer}>
      <h2>Registration Form</h2>

      <Formik
        initialValues={{ firstName: '', lastName: '', birthday: '', gender: '', email: '', phoneNumber: '', option: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm()
          console.log(values)
        }}>
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <label>
              <legend>first name</legend>
              <Field type="text" name="firstName" placeholder="first name" />
              <ErrorMessage name="firstName" component="div" className={styles.error} />
            </label>
            <label>
              <legend>last name</legend>
              <Field type="text" name="lastName" placeholder="last name" />
              <ErrorMessage name="lastName" component="div" className={styles.error} />
            </label>
            <label>
              <legend>birthday</legend>
              <Field type="date" name="birthday" />
              <ErrorMessage name="birthday" component="div" className={styles.error} />
            </label>
            <div>
              <legend>Gender</legend>
              <label>
                <Field type="radio" name="gender" value="male" />
                male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" />
                female
              </label>
              <ErrorMessage name="gender" component="div" className={styles.error} />
            </div>
            <label>
              <legend>email</legend>
              <Field type="email" name="email" placeholder="email" />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </label>
            <label>
              <legend>phone number</legend>
              <Field type="tel" name="phoneNumber" placeholder="phone number" />
              <ErrorMessage name="phoneNumber" component="div" className={styles.error} />
            </label>
            <label>
              <legend>options</legend>
              <Field as="select" name="option">
                <option value="">Select option</option>
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
                <option value="4">option 4</option>
                <option value="5">option 5</option>
              </Field>
              <ErrorMessage name="country" component="div" className={styles.error} />
            </label>

            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </section>
  )
}

export default ReactForm