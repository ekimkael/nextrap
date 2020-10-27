import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data, e) => {
    console.log(data);
  };

  return (
    <div className="container">
      <div className="row">
        <form className="col-md-6 mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <div className="input-group">
              <input
                name="email"
                ref={register}
                type="email"
                className={`form-control ${errors.email && `is-invalid`}`}
                placeholder="Your email address"
                aria-label="Your email address"
                aria-describedby="button-addon2"
              />

              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
                >
                  Submit
                </button>
              </div>
            </div>
            {errors.email && (
              <small id="email" className="form-text text-danger">
                {errors.email.message}
              </small>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgotPassword;
