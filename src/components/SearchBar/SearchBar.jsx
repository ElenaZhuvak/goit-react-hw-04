import { Field, Form, Formik } from "formik"
import css from './SearchBar.module.css'

const SearchBar = ({onChangeQuery}) => {
    const initialValues = {
        query: '',
    }
    const handleSubmit = (values, actions) => {
        console.log(values)
        onChangeQuery(values.query)
        actions.resetForm()
    }

  return (
    <div className={css.searchContainer}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={css.form}>
                <Field className={css.input} name='query' placeholder='Search images and photos'></Field>
                <button className={css.btn} type='submit'>Search</button>
            </Form>
        </Formik>
    </div>
  )
}

export default SearchBar