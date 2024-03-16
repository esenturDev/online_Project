import { useNavigate } from 'react-router';
import scss from './LoginPages.module.scss';
import { Field, Form, Formik } from "formik";
import Button, {ButtonProps} from '../../Ul/button/Button';
import { LoginInputResult } from '../../../utils/LoginValidetes';
import { usePostLoginUsersMutation } from '../../../redux/api/auth';
const LoginPages = () => {
  const [postLogin] =  usePostLoginUsersMutation();
  const navigate =  useNavigate();
  const handleLoginUsers = async (values: string) => {
    const {email, password} = values;
    const result = await postLogin({email, password});
    if(result) {
      
      navigate("/home");
    }
  }
  return (
    <div className={scss.loginPages}>
      <div className="container">
        <div className={scss.content}>
          <Formik initialValues={{email: "", password: ""}}
          onSubmit={handleLoginUsers}
          validationSchema={LoginInputResult}

          >{({errors, touched}) => {
            return (
              <Form>
                <Field 
                id={"email"}
                name={"email"}
                type="email"
                placeholder="Email"
                />
                <Field 
                id={"password"}
                name={"password"}
                type="password"
                placeholder="Password"
                />
              </Form>
            )
          }}

          </Formik>
          
        </div>
      </div>
    </div>
  )
}

export default LoginPages