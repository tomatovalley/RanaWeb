import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registrousuario } from '../../actions/authActions';

class Registro extends Component {
    constructor() {
        super();
        this.state = {
            nombre: "",
            email: "",
            telefono: "",
            sexo: "",
            fechaNacimiento: "",
            password: "",
            password2: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            nombre: this.state.nombre,
            email: this.state.email,
            telefono: this.state.telefono,
            sexo: this.state.sexo,
            fechaNacimiento: this.state.fechaNacimiento,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registrousuario(newUser, this.props.history);
    }

    render() {
        const { errors } = this.state;

        return (
            <div>
                <section className="form-registro py-5">
                    <div className="container gen d-flex flex-column align-items-center justify-content-center">
                        <form onSubmit={this.onSubmit} className="d-flex flex-column">
                            <img src="vendor/custom/images/rana_aventurera.png" width="120" alt="logo_rana" className="img-fluid align-self-center" />
                            <div className="container">
                                <h2 className="text-center">Registate gratis!</h2>
                                <div className="inputs-cont form-row">
                                    <div className="form-group">
                                        <label for="inputNombre">Nombre Completo</label>
                                        <input onChange={this.onChange} type="text" className={classnames("form-control", { "is-invalid": errors.nombre })} value={this.state.nombre} name="nombre" id="InputNombre" placeholder="Nombre" />
                                        {errors.nombre && (<div className="invalid-feedback">{errors.nombre}</div>)}
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail4">Correo</label>
                                        <input type="email" className={classnames("form-control", { "is-invalid": errors.email })} value={this.state.email} onChange={this.onChange} name="email" id="inputCorreo" placeholder="example@example.com" />
                                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                                    </div>
                                    <div className="form-group">
                                        <label for="inputContraseña">Telefono</label>
                                        <input type="tel" className={classnames("form-control", { "is-invalid": errors.telefono })} name="telefono" value={this.state.telefono} onChange={this.onChange} id="inputTelefono" placeholder="+(12) 123-123-123" />
                                        {errors.telefono && (<div className="invalid-feedback">{errors.telefono}</div>)}
                                    </div>
                                    <div className="form-group">
                                        <label for="radioHombre">Sexo</label>
                                        <div className="row ml-1">
                                            <div className="form-check">
                                                <input className={classnames("form-check-input", { "is-invalid": errors.sexo })} type="radio" name="sexo" id="radioHombre"
                                                    value='hombre' checked={this.state.sexo === 'hombre'} onChange={this.onChange} />
                                                < label className="form-check-label" for="radioHombre">Hombre</label>
                                            </div>
                                            <div className="form-check ml-5">
                                                <input className={classnames("form-check-input", { "is-invalid": errors.sexo })} type="radio" name="sexo" id="radioMujer"
                                                    value='mujer' checked={this.state.sexo === "mujer"} onChange={this.onChange} />
                                                <label className="form-check-label" for="radioMujer">Mujer</label>
                                            </div>
                                        </div>
                                        {errors.sexo && (<div className="invalid-feedback">{errors.sexo}</div>)}
                                    </div>
                                    <div className="form-group">
                                        <label for="inputContraseña">Fecha de Nacimiento</label>
                                        <input type="date" className={classnames("form-control", { "is-invalid": errors.fechaNacimiento })} name="fechaNacimiento" onChange={this.onChange} id="inputaFecha" />
                                        {errors.fechaNacimiento && (<div className="invalid-feedback">{errors.fechaNacimiento}</div>)}
                                    </div>
                                    <div className="form-group">
                                        <label for="inputContraseña">Contraseña</label>
                                        <input type="password" className={classnames("form-control", { "is-invalid": errors.password })} value={this.state.password} onChange={this.onChange} name="password" id="InputContraseña" placeholder="Contraseña" />
                                        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                                    </div>
                                    <div className="form-group">
                                        <label for="inputContraseña">Confirmar contraseña</label>
                                        <input type="password" className={classnames("form-control", { "is-invalid": errors.password2 })} name="password2" id="InputConfirmacion" placeholder="Contraseña" value={this.state.password2} onChange={this.onChange} />
                                        {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Registrar</button>
                                </div>
                            </div>
                        </form>
                        <div className="separador my-4"></div>
                        <p className="inv">Ya tienes una cuenta? <Link to="/login">INGRESA AQUÍ</Link></p>
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
                                    <li className="list-inline-item"><Link to="#">REGISTRO</Link></li>
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

Registro.propTypes = {
    registrousuario: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registrousuario })(withRouter(Registro));
