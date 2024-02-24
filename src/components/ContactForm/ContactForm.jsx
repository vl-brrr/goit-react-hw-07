import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('This field is required.'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required.'),
});
export const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, actions) => {
        dispatch(addContact({ id: nanoid(), ...values }));
        actions.resetForm();
      }}
      validationSchema={contactSchema}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.fieldBox}>
          <label htmlFor={nameFieldId}>Name </label> <br />
          <Field className={css.input} name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.fieldBox}>
          <label htmlFor={numberFieldId}>Number </label> <br />
          <Field
            className={css.input}
            name="number"
            id={numberFieldId}
            placeholder="Exp.: 642-56-24"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
