import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { settingsSchema } from "../utils/validationSchemas";
import { useRouter } from "next/router";

export default function Settings({ user }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(settingsSchema),
  });
  const onSubmit = (data) => {
    fetch(
      `https://testifyio.herokuapp.com/users/${user.id}`,
      {
        method: "put",
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
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setLoading(false);
        if (data.status === 200) {
          router.push(`/${data.username}`);
        }
        setTimeout(function () {
          setSuccessMessage("");
        }, 10000);
      });
  };

  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      {/*  */}
      <div className="container">
        <Link href="/">
          <a>
            <h1 className="text-center">
              <b>Nextrap</b>
            </h1>
          </a>
        </Link>
        <h3 className="text-center text-primary">Settings</h3>
        <div className="row">
          <form
            className="col-12 col-sm-10 col-md-6 col-lg-5 mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input
                    name="firstname"
                    defaultValue={user.firstname}
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
                    defaultValue={user.lastname}
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
                defaultValue={user.username}
                name="username"
                type="text"
                className={`form-control ${errors.username && `is-invalid`}`}
                //aria-describedby="emailHelp"
                placeholder="Enter username"
                ref={register}
              />
              {errors.username && (
                <small id="username" className="form-text text-danger">
                  {errors.username.message}
                </small>
              )}
            </div>
            <div className="form-group">
              <input
                defaultValue={user.email}
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
            <button type="submit" className="btn btn-primary btn-block">
              SAVE →
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

Settings.getInitialProps = async (ctx) => {
  if (ctx.req.headers.cookie) {
    let token = ctx.req.headers.cookie.replace("_SESSIONID_=", "");
    const res = await fetch("https://testifyio.herokuapp.com/users/me", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await res.json();
    return { user: json };
  } else {
    return { user: "" };
  }
};
