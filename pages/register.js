import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../utils/validationSchemas";
import AuthTemplate from "../templates/auth.template";
import ShowPassword from "../organisms/ShowPassword";
import HidePassword from "../organisms/HidePassword";
import { useRouter } from "next/router";

function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = (data, e) => {
    //console.log(data);
    fetch(
      `/api/register`,
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      },
      setLoading(true)
    )
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setLoading(false);
        if (data.status === 200) {
          //setSuccessMessage("Registration successful!");
          router.push("/index");
        }
        setTimeout(function () {
          setSuccessMessage("");
        }, 10000);
        e.target.reset();
      });
  };

  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      {/*  */}
      <div className="container">
        <h1 className="display-4 text-center">Register</h1>
        <div className="row">
          <form className="col- mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input
                    name="firstname"
                    type="text"
                    className={`form-control ${
                      errors.firstname && `is-invalid`
                    }`}
                    placeholder="First name"
                    ref={register}
                  />
                  {errors.firstname && (
                    <small id="firstname" className="form-text text-danger">
                      {errors.firstname.message}
                    </small>
                  )}
                </div>
                <div className="col">
                  <input
                    name="lastname"
                    type="text"
                    className={`form-control ${
                      errors.lastname && `is-invalid`
                    }`}
                    placeholder="Last name"
                    ref={register}
                  />
                  {errors.lastname && (
                    <small id="lastname" className="form-text text-danger">
                      {errors.lastname.message}
                    </small>
                  )}
                </div>
              </div>
            </div>

            <div className="form-group">
              <input
                name="email"
                type="email"
                className={`form-control ${errors.email && `is-invalid`}`}
                aria-describedby="emailHelp"
                placeholder="Enter email"
                ref={register}
              />
              {errors.email && (
                <small id="email" className="form-text text-danger">
                  {errors.email.message}
                </small>
              )}
            </div>

            <div className="form-group">
              <div className="input-group">
                <input
                  type={isShow ? "text" : "password"}
                  name="password"
                  ref={register}
                  className={`form-control ${
                    errors.password && `is-invalid`
                  }  `}
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <button
                    onClick={() => setIsShow(!isShow)}
                    className="btn btn-dark"
                    type="button"
                  >
                    {isShow ? <HidePassword /> : <ShowPassword />}
                  </button>
                </div>
                {errors.password && (
                  <small id="password" className="form-text text-danger">
                    {errors.password.message}
                  </small>
                )}
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              REGISTER →
            </button>
            <Link href="/login">
              <a className="my-4 btn btn-link btn-sm btn-block">
                Already have and account? login
              </a>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
Register.Template = AuthTemplate;
