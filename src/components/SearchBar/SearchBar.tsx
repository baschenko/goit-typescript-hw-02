import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { ImSearch } from 'react-icons/im';
import s from './SearchBar.module.css';
import { SearchBarProps } from './SearchBar.types';
import { FC } from 'react';

const notify = () => toast('Не розумію що шукати!');

export const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const initalValues = {
    query: '',
  };

  const handleSubmit = (values: { query: string }): void => {
    if (values.query.trim() === '') {
      notify();
      return;
    }
    onSubmit(values.query);
  };

  return (
    <div className={s.container}>
      <Formik initialValues={initalValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <button type="submit" className={s.btn}>
            <ImSearch />
          </button>
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.inputSearch}
          />
        </Form>
      </Formik>
      <Toaster
        containerStyle={{
          top: 70,
          left: 20,
        }}
      />
    </div>
  );
};

// export default SearchBar;
