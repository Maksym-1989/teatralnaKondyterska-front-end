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
          className={meta.error && meta.touched ? "input-error" : "input"}
          {...field}
          {...props}
        />
        <div className="box_error_message">
          {meta.error && meta.touched && (
            <p className="error_message_text">{meta.error}</p>
          )}
        </div>{" "}
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
        <div className="box_error_message">
          {meta.error && meta.touched && (
            <p className="error_message_text">{meta.error}</p>
          )}
        </div>{" "}
      </label>
    </div>
  );
};
