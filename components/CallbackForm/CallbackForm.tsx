import { Formik, Field, Form } from "formik";
import Button from "../Button/Button";
import * as Yup from "yup";
import classes from "../../styles/form.module.scss";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";

interface Values {
  name: string;
  phone: string;
}

function CallbackForm() {
  const messageRef = useRef(null);
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    lottie.loadAnimation({
      container: messageRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../assets/lotties/message-sent.json"),
    });
  }, [messageSent]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Поле обязательное"),
    phone: Yup.string()
      .max(13)
      .min(13, "Минимальное количество символов - 13")
      .required("Поле обязательное"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
      }}
      validateOnBlur
      onSubmit={(values: Values) => {
        setMessageSent(true);
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        setFieldValue,
        isSubmitting,
      }) => (
        <>
          <Form className={classes.form}>
            <div>
              <label className={classes.label} htmlFor={"name"}>
                Имя
              </label>
              <Field
                type="text"
                name="name"
                disabled={isSubmitting}
                inputMode="text"
                placeholder="Как Вас зовут?"
                className={classes.input}
              />
              {touched.name && errors.name && (
                <span className={classes.error}>{errors.name}</span>
              )}

              <label className={classes.label} htmlFor={"phone"}>
                Телефон
              </label>
              <Field
                type="tel"
                name="phone"
                placeholder="Номер телефона +375XXXXXXXXX"
                inputMode="tel"
                disabled={isSubmitting}
                maxLength="13"
                className={classes.input}
                onFocus={() =>
                  values.phone.length < 1
                    ? setFieldValue("phone", "+375")
                    : null
                }
              />
              {touched.phone && errors.phone && (
                <span className={classes.error}>{errors.phone}</span>
              )}
            </div>
            <Button
              type="submit"
              onClick={handleSubmit}
              className={classes.button}
              disabled={isSubmitting}
            >
              Отправить
            </Button>
            {isSubmitting ? (
              <div className={classes.sent} ref={messageRef}>
                <p>Сообщение отправлено</p>
              </div>
            ) : null}
          </Form>
        </>
      )}
    </Formik>
  );
}

export default CallbackForm;
