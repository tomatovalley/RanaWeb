import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';

import { loginUser } from '../../actions/authActions';



class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }

        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userData);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <section className="form-login">
                    <div className="container gen d-flex flex-column align-items-center justify-content-center">
                        <form onSubmit={this.onSubmit} className="d-flex flex-column">
                            <img src="vendor/custom/images/rana_aventurera.png" width="120" alt="logo_rana" className="img-fluid align-self-center" />
                            <div className="container">
                                <h2 className="text-center">Ingresar</h2>
                                <div className="inputs-cont d-flex flex-column">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fas fa-user"></i></div>
                                        </div>
                                        <input
                                            type="email"
                                            className={classnames("form-control", { "is-invalid": errors.email })}
                                            id="InputCorreo"
                                            placeholder="Correo"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChange} />
                                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                                    </div>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fas fa-unlock-alt"></i></div>
                                        </div>
                                        <input
                                            type="password"
                                            className={classnames("form-control", { "is-invalid": errors.password })}
                                            id="InputContraseña"
                                            placeholder="Contraseña"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.onChange} />
                                        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Ingresar</button>
                                    <Link to="#" className="text-right mt-3 align-self-end">Olvidaste la contraseña?</Link>
                                </div>
                            </div>
                        </form>
                        <div className="separador my-4"></div>
                        <p className="inv">Aún no tienes una cuenta? <Link to="/registro">REGISTRATE AQUÍ</Link></p>
                    </div>
                </section>

                <section className="footer pt-5">
                    <div className="container">
                        <div className="d-flex flex-column align-items-center">
                            <div className="redes-footer d-flex">
                                <div className="redes facebook d-flex justify-content-center align-items-center">
                                    <Link to="#"><i className="fab fa-facebook-f fa-1x"></i></Link>
                                </div>
                                <div className="redes twitter d-flex justify-content-center align-items-center">
                                    <Link to="#"><i className="fab fa-twitter fa-1x"></i></Link>
                                </div>
                                <div className="redes instagram d-flex justify-content-center align-items-center">
                                    <Link to="#"><i className="fab fa-instagram fa-1x"></i></Link>
                                </div>
                            </div>
                            <div className="lista d-flex mt-3">
                                <ul className="list-inline m-0">
                                    <li className="list-inline-item"><Link to="#">INICIO</Link></li>
                                    <li className="list-inline-item"><Link to="#">NOSOTROS</Link></li>
                                    <li className="list-inline-item"><Link to="#">SERVICIOS</Link></li>
                                    <li className="list-inline-item"><Link to="/registro">REGISTRO</Link></li>
                                    <li className="list-inline-item"><Link to="#">CONTACTO</Link></li>
                                </ul>
                            </div>
                            <div className="contacto my-3">
                                <h3>Contactanos en:</h3>
                                <Link to="mailto:contacto@rana.mx" target="_top">
                                    <i className="far fa-envelope-open mr-3"></i> contacto@rana.mx</Link>
                            </div>
                        </div>
                    </div>
                    <div className="derechos py-3">
                        <div className="container text-center">
                            <h2>© Rana | Todos los derechos reservados.</h2>
                            <p className="m-0">
                                <Link to="#"> Aviso de privacidad.</Link> |
                    <Link to="#">Términos y condiciones.</Link>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);