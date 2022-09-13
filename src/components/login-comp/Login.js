import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

import { useMyLoginContext } from "../../context/loginContext";
import './login.css';

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
                // orderHistory: [],
                // address: null,
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
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" required />
                    </Form.Group>

                    {/* If Register is true show content below if not null */}
                    {register ?
                        <Form.Group className="mb-3" controlId="basic-addon2" id="fullname">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control placeholder="Enter full name" name="fullname" />
                        </Form.Group> : null}
                    {register ?
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="phoneNumber" placeholder="Phone Number" name="phone" />
                        </Form.Group> : null}
                    {error && <div>{error}</div>}
                    <Form.Label onClick={changeState}>{register ? "Already a user? Login here" : "Not a user? Sign up here"}</Form.Label>
                    <Form.Group>

                        <Button variant="secondary" onClick={changeModal}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit'>
                            {register ? "Register" : "Login"}
                        </Button>
                    </Form.Group>
                </Form>

            </Modal.Body>
        </Modal>
    );
}