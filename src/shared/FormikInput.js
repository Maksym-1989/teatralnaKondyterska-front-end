import { useMemo } from "react";
///////////////////////////////Formik, YUP /////////////////////////////////////////////////
import { ErrorMessage, useField } from "formik";

export const FormikInput = ({ label, ...props }) => {
  const id = useMemo(() => Math.floor(Math.random() * 99999).toString(), []);
  const [field, meta] = useField(props);
  return (
    <div>
      <label className="label" htmlFor={id}>
        {label}
        <input
          id={id}
          className={meta.error && meta.touched ? "input input-error" : "input"}
          {...field}
          {...props}
        />
        <ErrorMessage
          name={field.name}
          component="p"
          className="error-message"
        />
      </label>
    </div>
  );
};
export const FormikTextarea = ({ label, ...props }) => {
  const id = useMemo(() => Math.floor(Math.random() * 99999).toString(), []);
  const [field, meta] = useField(props);
  return (
    <div>
      <label className="label" htmlFor={id}>
        {label}
        <textarea
          id={id}
          className={
            meta.error && meta.touched ? "textarea textarea-error" : "textarea"
          }
          {...field}
          {...props}
        />
      </label>
    </div>
  );
};
