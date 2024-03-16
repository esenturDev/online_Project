import { useNavigate } from 'react-router';
import scss from './LoginPages.module.scss';
import { Field, Form, Formik } from "formik";

const LoginPages = () => {
  const navigate =  useNavigate();
  return (
    <div className={scss.loginPages}>
      <div className="container">
        <div className={scss.content}>
          <Formik>
            <Form>
              <Field 
              id={"email"}
              name={"email"}
              type="email"
              placeholder="Email"
              />
              <Field 
              id={"email"}
              name={"email"}
              type="email"
              placeholder="Email"
              />
            </Form>
          </Formik>
          <button onClick={() => navigate('/registr')}>Register</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPages