"use client";
import React, { useState } from "react";
import MainLayout from "../layouts/main";
import { useFormik } from "formik";
import loginFormSchema from "../lib/schema/login-form";
import { authUser, fetchUserAvatar } from "../../auth/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../lib/features/user/user-slice";
import { Bounce, toast } from "react-toastify";
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loginForm = useFormik({
    validationSchema: loginFormSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      authUser(values.email, values.password, false)
        .then(async (credentials) => {
          const imgUrl = await fetchUserAvatar(credentials.user!.uid);
          dispatch(
            setUser({
              username: credentials.user!.displayName!,
              email: credentials.user!.email!,
              imgURL: imgUrl,
              token: "",
            })
          );
          ;
          router.push('/');
        })
        .catch((err) => {
            toast.error('Invalid email or password');
        });
    },
  });

  return (
    <MainLayout>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Max store"
            src="/images/max-logo.png"
            className="mx-auto h-[80px] w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={loginForm.values.email}
                  onChange={loginForm.handleChange}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />
                {loginForm.errors.email && (
                  <p className="text-red-500 text-sm">
                    {loginForm.errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={loginForm.values.password}
                  onChange={loginForm.handleChange}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />
                {loginForm.errors.password && (
                  <p className="text-red-500 text-sm">
                    {loginForm.errors.password}
                  </p>
                )}
              </div>
            </div>
          </form>
          <div className="mt-4">
            <button
              type="submit"
              onClick={() => loginForm.handleSubmit()}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create account
            </a>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
