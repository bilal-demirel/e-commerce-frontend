// src/components/SignupForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

export default function SignupForm() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Form verilerini burada işleyebilirsiniz.
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Name Field */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        id="name"
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: 'Email is not valid'
                            }
                        })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="password"
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long'
                            }
                        })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>

                {/* Confirm Password Field */}
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        {...register('confirmPassword', {
                            required: 'Confirm Password is required',
                            validate: value =>
                                value === watch('password') || 'Passwords do not match'
                        })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}
