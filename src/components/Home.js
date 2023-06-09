import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
        
    })
 

    // const [data,setData] = useState([]);
    // console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);  // -> change on Console whatever you type


        const { value, name } = e.target;
        // console.log(value,name);   //->  for store value


        //user type it show in console
        setInpval(() => {
            return {
                ...inpval,  // used spread operator
                [name]: value
            }
        })

    }
   

    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password } = inpval;   

        if (name === "") {
            // toast.error(' name field is requred!',{
            //     position: "top-center",
            // });
            alert(" name field is requred!")
        } else if (email === "") {
            //  toast.error('email field is requred',{
            //     position: "top-center",
            // });
            alert(" name field is requred!")
        } else if (!email.includes("@")) {
            //  toast.error('plz enter valid email addres',{
            //     position: "top-center",
            // });
            alert("plz enter valid email addres")
        } else if (date === "") {
            //  toast.error('date field is requred',{
            //     position: "top-center",
            // });
            alert("date field is requred")
        } else if (password === "") {
            //  toast.error('password field is requred',{
            //     position: "top-center",
            // });
            alert("password field is requred")
        } else if (password.length < 5) {
            //  toast.error('password length greater five',{
            //     position: "top-center",
            // });
            alert("password length greater five")
        } else {
            console.log("data added succesfully");
            history("/login")
            // localStorage.setItem("useryou",JSON.stringify([...data,inpval]));

        }

    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control onChange={getdata} name='date' type="date" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Sign Up
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">Login</NavLink></span> </p>
                    </div>
                    <Sign_img />
                </section>
                {/* <ToastContainer /> */}
            </div>
        </>
    )
}

export default Home