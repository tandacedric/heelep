import Form from '../components/Form'

const NewUser = () => {
  const userForm = {
    name: '',
    email: '',

  }
  return <Form formId="add-user-form" petForm={userForm} />
}

export default NewUser
