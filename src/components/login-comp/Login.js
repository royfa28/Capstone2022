import React from 'react';
import { Form, Button, Modal, FloatingLabel } from 'react-bootstrap';

import { useMyLoginContext } from "../../context/loginContext";
import './login.css';

// Login or register modal
export default function LoginModal(props) {

    // Use my context provider to handle Modal show / Hide
    const { setModal, register, registerStatus, addAccount, loginAuth, error } = useMyLoginContext();

    function changeState() {
        registerStatus();
    }

    function changeModal() {
        setModal();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // Login to the website if false, otherwise register and add new account
        if (!register) {
            const userAccount = {
                emailAddress: formData.get("email"),
                password: formData.get("password"),
            }
            loginAuth(userAccount);
        } else {
            console.log("Register");
            const userAccount = {
                fullName: formData.get("fullname"),
                emailAddress: formData.get("email"),
                password: formData.get("password"),
                phoneNumber: formData.get("phone"),
            }
            addAccount(userAccount);
        }
    }

    return (
        <Modal {...props} centered >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {register ? "Register" : "Login"}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body >
                <Form className="modal-container" onSubmit={(e) => handleSubmit(e)}>

                    <Form.Group className="mb-3" controlId="formControlsEmail">
                        <FloatingLabel controlId="floatingEmail"
                            label="Email address">
                            <Form.Control type="email" placeholder="Enter email" name="email" required />
                        </FloatingLabel>

                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" name="password" required />
                        </FloatingLabel>
                    </Form.Group>

                    {/* If Register is true show content below if not null */}
                    {register ?
                        <Form.Group className="mb-3" controlId="basic-addon2" id="fullname">
                            <FloatingLabel controlId="floatingInput"
                                label="Full Name">
                                <Form.Control placeholder="Enter full name" name="fullname" />
                            </FloatingLabel>
                        </Form.Group> : null}

                    {register ?
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <FloatingLabel controlId="floatingInput"
                                label="Phone Number">
                                <Form.Control type="phoneNumber" placeholder="Phone Number" name="phone" />
                            </FloatingLabel>
                        </Form.Group> : null}
                        
                    {error && <div>{error}</div>}
                    <Form.Group className="d-grid gap-2">
                        <Button variant="primary" type='submit'
                            className="btn btn-primary btn-block">
                            {register ? "Register" : "Login"}
                        </Button>
                    </Form.Group>
                    {/* Change modal depending on register or login */}
                    <Form.Label className="register-state" onClick={changeState}>{register ? "Already a user? Login here" : "Not a user? Sign up here"}</Form.Label>

                </Form>

            </Modal.Body>
        </Modal>
    );
}