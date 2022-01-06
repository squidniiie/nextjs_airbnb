import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
// import '../static/Create.css'

const Form = () => {

    const history = useHistory()
    const [errors, setErrors] = useState([]);
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = e => {
        e.preventDefault();
        const postData = {
            firstName,
            lastName,
            email,
            password
        }
        axios.post('http://localhost:8000/api/new_user', postData)
            .then(res => {
                console.log(postData)
                history.push("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                console.log(errorResponse);
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                console.log(err)
            }
            )
    }

    return (
        <div className="flex justify-center">
            <div className="create w-72 container my-4 p-6 bg-white  rounded-xl space-x-4 text-gray-500">
                <div>
                    <h1 className="text-3xl font-bold flex justify-center font-Montserrat">Add New User</h1>
                    <form className="m-4" onSubmit={submitHandler}>
                        {errors.map((err, index) => <p key={index}>{err}</p>)}
                        <p className="flex justify-center">
                            <input className="create m-2 flex justify-center rounded-full bg-white text-center p-1"
                                type="text" placeholder="First Name"
                                onChange={e => setFirstName(e.target.value)} value={firstName} />
                        </p>
                        <p className="flex justify-center">
                            <input className="create m-2 rounded-full space-x-4 bg-white text-center  p-1"
                                type="text" placeholder="Last Name"
                                onChange={e => setLastName(e.target.value)} value={lastName} />
                        </p>
                        <p className="flex justify-center">
                            <input className="create m-2 rounded-full space-x-4 bg-white text-center  p-1"
                                type="email" placeholder="Email Address"
                                onChange={e => setEmail(e.target.value)} value={email} />
                        </p>
                        <p className="flex justify-center">
                            <input className="create m-2 rounded-full space-x-4 bg-white text-center p-1"
                                type="password" placeholder="Password"
                                onChange={e => setPassword(e.target.value)} value={password} />
                        </p>
                        <p className="flex justify-center">
                            <input className="create m-2 flex font-Montserrat justify-center rounded-xl bg-gray-400 space-x-4 p-2 px-4 text-gray-50 hover:bg-gray-500" role="btn" type="submit" value="Create User" />
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Form;