import React, {useState} from 'react'
import {LockClosedIcon} from '@heroicons/react/solid'
import {Logo} from './layout'

export const LoginComponent = () => {
    const [isBusy, setBusy] = useState(false)
    const [error, setError] = useState('')

    const onSubmit = async e => {
        e.preventDefault()
        e.stopPropagation()

        if (isBusy) {
            return
        }

        setBusy(true)
        setError('')

        try {
            const form = document.querySelector('#password-form form') as HTMLFormElement

            const formData = new FormData(form)

            const res = await fetch('/api/login', {
                method: 'post',
                credentials: 'include',
                body: JSON.stringify({password: formData.get('password')}),
                headers: {'Content-Type': 'application/json'}
            })

            const {message} = await res.json()

            if (res.status === 200) {
                window.location.reload()
            } else {
                setError(message)
                setBusy(false)
            }
        } catch (e) {
            setError('An error has occured.')
            setBusy(false)
        }

        return false
    }

    return (
        <div className='h-screen' id='password-form'>
            <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 -mt-6'>
                <div className='max-w-md w-full space-y-8'>
                    <div>
                        <Logo className='w-16 m-auto' />
                        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                            Project is in progress 🚧
                        </h2>
                    </div>
                    <form className='mt-8 space-y-6' onSubmit={onSubmit}>
                        <input type='hidden' name='remember' defaultValue='true' />

                        <div className='rounded-md shadow-sm -space-y-px'>
                            <div>
                                <label htmlFor='password' className='sr-only'>
                                    Password
                                </label>
                                <input
                                    id='password'
                                    name='password'
                                    type='password'
                                    autoComplete='current-password'
                                    required
                                    className='appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                    placeholder='Password'
                                />
                            </div>
                        </div>
                        {error && (
                            <div
                                className='p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
                                role='alert'
                            >
                                {error}
                            </div>
                        )}
                        <div className='text-center'>
                            <span className='text-sm text-gray-300'>
                                If you forgot password - you are welcome to bruteforce.
                            </span>
                        </div>
                        <div>
                            <button
                                type='submit'
                                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                                    <LockClosedIcon
                                        className='h-5 w-5 text-gray-500 group-hover:text-gray-400'
                                        aria-hidden='true'
                                    />
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
