import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { useMyCtxProvider } from "../../context/mycontext";
import './login.css';

export default function LoginModal(props) {

    // Use my context provider to handle Modal show / Hide
    const { closeModal, register, signin, signup } = useMyCtxProvider();

    function changeState(registerStatus) {

        if (registerStatus === true) {
            signin();
        } else if (registerStatus === false) {
            signup();
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
                <Form className="modal-container">
                    {register ?
                        <Form.Group className="mb-3" controlId="formBasicEmail" id="fullname">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="email" placeholder="Enter full name" />
                        </Form.Group> : null }


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Label onClick={() => changeState(register)}>{register ? "Already a user? " : "Not a user? "}</Form.Label>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={closeModal}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}