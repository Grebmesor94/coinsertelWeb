import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

type Values = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};
const mailer: HTMLAnchorElement | null = document.querySelector(".invisible");

const handleSubmit = (values: Values) => {
  const { email, firstName, lastName, message } = values;

  mailer!.setAttribute(
    "href",
    `mailto:yrome1@coinsertel.com.ve?&subject=${firstName} ${lastName} ${email}&cc=${email}&body=${message}`
  );

  console.log(mailer!.href);
  mailer!.click();
};

const validations = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Debe escribir al menos 2 caracteres")
    .max(50, "Muy Largo")
    .required("Su nombre es requerido"),
  lastName: Yup.string()
    .min(2, "Debe escribir al menos 2 caracteres")
    .max(50, "Muy Largo")
    .required("Su apellido es requerido"),
  email: Yup.string()
    .email("Correo no valido")
    .required("Su correo es requerido"),
  phone: Yup.string()
    .min(10, "minimo 10 caracteres")
    .matches(
      /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
      "Ejemplo valido: 416 605 9373"
    )
    .required("Su telefono es requerido"),
  message: Yup.string()
    .min(1, "Debe escribir al menos 1 caracter")
    .required("El mensaje es requerido"),
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
          phone: "",
          message: "",
        }}
        validationSchema={validations}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form className="formBox">
            <div className="inputBox w50">
              <Field id="firstName" name="firstName" />
              <label htmlFor="firstName">Nombre</label>
              {errors.firstName && touched.firstName ? (
                <div className="error">{errors.firstName}</div>
              ) : null}
            </div>

            <div className="inputBox w50">
              <Field id="lastName" name="lastName" />
              <label htmlFor="lastName">Apellido</label>
              {errors.lastName && touched.lastName ? (
                <div className="error">{errors.lastName}</div>
              ) : null}
            </div>

            <div className="inputBox w50">
              <Field id="email" name="email" type="email" />
              <label htmlFor="email">Email</label>
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
            </div>
            <div className="inputBox w50">
              <Field id="phone" name="phone" />
              <label htmlFor="phone">Telefono</label>
              {errors.phone && touched.phone ? (
                <div className="error">{errors.phone}</div>
              ) : null}
            </div>

            <div className="inputBox w100">
              <Field id="message" name="message" as="textarea" wrap="false" />
              <label htmlFor="email">Escribanos su mensaje</label>
              {errors.message && touched.message ? (
                <div className="error">{errors.message}</div>
              ) : null}
            </div>

            <div className="inputBox w100">
              <button type="submit">Enviar</button>
            </div>
            <a href="mailto:yrome1@coinsertel.com.ve" className="invisible">
              email
            </a>
          </Form>
        )}
      </Formik>
    </div>
  );
};
