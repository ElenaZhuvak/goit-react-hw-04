import { Field, Form, Formik } from "formik"

const SearchBar = ({onChangeQuery}) => {
    const initialValues = {
        query: '',
    }
    const handleSubmit = (value, actions) => {
        console.log(value)
        onChangeQuery(value.query)
        actions.resetForm()
    }

  return (
    <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <Field name='query' placeholder='Search images and photos'></Field>
                <button type='submit'>Search</button>
            </Form>
        </Formik>
    </div>
  )
}

export default SearchBar