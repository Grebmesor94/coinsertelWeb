import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

type Values = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const handleSubmit = (values: Values) => {
  console.log(values);
};

const validations = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Debe escribir al menos 2 caracteres")
    .max(50, "Muy Largo")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Debe escribir al menos 2 caracteres")
    .max(50, "Muy Largo")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().min(1, "Debe escribir algo").required(),
});

export const FormComponent = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Envianos un mensaje</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        }}
        validationSchema={validations}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form className="formBox">
          <div className="inputBox w50">
            <Field id="firstName" name="firstName" />
            <label htmlFor="firstName">Nombre</label>
          </div>

          <div className="inputBox w50">
            <Field id="lastName" name="lastName" />
            <label htmlFor="lastName">Apellido</label>
          </div>

          <div className="inputBox w50">
            <Field id="email" name="email" type="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="inputBox w50">
            <Field id="phone" name="phone" />
            <label htmlFor="email">Telefono</label>
          </div>

          <div className="inputBox w100">
            <Field id="message" name="message" as="textarea" wrap="false" />
            <label htmlFor="email">Escribanos su mensaje</label>
          </div>

          <div className="inputBox w100">
            <button type="submit">Enviar</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
