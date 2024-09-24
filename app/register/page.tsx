'use client';
import React, { useState } from 'react';
import MainLayout from '../layouts/main';
import { useFormik } from 'formik';
import registerFormSchema from '../lib/schema/register-form';
import { authUser } from '../../auth/firebase';

const RegisterPage: React.FC = () => {

    const registerForm = useFormik({
        validationSchema: registerFormSchema,
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            authUser(values.email, values.password, true);
        }
    })

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
                        Create to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={registerForm.values.email}
                                    onChange={registerForm.handleChange}
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                                />
                                {registerForm.errors.email && (
                                    <p className="text-red-500 text-sm">{registerForm.errors.email}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={registerForm.values.password}
                                    onChange={registerForm.handleChange}
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                                />
                                {registerForm.errors.password && (
                                    <p className="text-red-500 text-sm">{registerForm.errors.password}</p>
                                )}
                            </div>
                        </div>

                    </form>
                        <div>
                            <button
                                type='submit'
                                onClick={() => registerForm.handleSubmit()}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Create account
                        </a>
                    </p>
                </div>
            </div>

        </MainLayout>
    );
};

export default RegisterPage;