import { MdAccountCircle } from 'react-icons/md';
import { MdLocalPhone } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contactField}>
      <div>
        <p className={css.fieldInfo}>
          <MdAccountCircle size={20} className={css.icon} />
          {name}
        </p>
        <p className={css.fieldInfo}>
          <MdLocalPhone size={20} className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};
