import React, { Component } from "react";
import Link from "next/link";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    FormGroup,
    Label,
    Input,
    Button,
} from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation";

class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="account-home-btn d-none d-sm-block">
                    <Link href="/" className="text-white">
                        <a><i className="mdi mdi-home h1"></i></a>
                    </Link>
                </div>

                <section className="bg-account-pages vh-100">
                    <div className="display-table">
                        <div className="display-table-cell">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg={5}>
                                        <Card className="account-card">
                                            <CardBody>
                                                <div className="text-center mt-3">
                                                    <h3 className="font-weight-bold">
                                                        <Link
                                                            href="/layout1"
                                                        >
                                                            <a className="text-dark text-uppercase account-pages-logo">arTecBA</a>
                                                        </Link>
                                                    </h3>
                                                    <p className="text-muted">
                                                        Sign in to continue to arTecBA.
                          </p>
                                                </div>
                                                <div className="p-3">
                                                    <AvForm>
                                                        <FormGroup>
                                                            <Label htmlFor="username">Username</Label>
                                                            <AvField
                                                                type="text"
                                                                name="username"
                                                                required
                                                                className="form-control"
                                                                id="username"
                                                                placeholder="Enter username"
                                                            />
                                                        </FormGroup>

                                                        <FormGroup>
                                                            <Label htmlFor="userpassword">Password</Label>
                                                            <AvField
                                                                type="password"
                                                                name="password"
                                                                required
                                                                className="form-control"
                                                                id="userpassword"
                                                                placeholder="Enter password"
                                                            />
                                                        </FormGroup>

                                                        <div className="custom-control custom-checkbox">
                                                            <Input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customControlInline"
                                                            />{" "}
                                                            <Label
                                                                className="custom-control-label"
                                                                htmlFor="customControlInline"
                                                            >{" "}
                                                            Remember me
                                                            </Label>
                                                        </div>

                                                        <div className="d-grid mt-3">
                                                            <Button
                                                                color="none"
                                                                type="submit"
                                                                className="btn btn-primary"
                                                            >
                                                                Log In
                                                            </Button>
                                                        </div>

                                                        <div className="mt-4 mb-0 text-center">
                                                            <Link href="/auth/forgetpassword">
                                                                <a className="text-dark"><i className="mdi mdi-lock"></i> Forgot your password?</a>
                                                            </Link>
                                                        </div>
                                                    </AvForm>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Login;
