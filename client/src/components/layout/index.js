import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">RANA</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Nosotros</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Servicios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section className="header d-flex flex-column justify-content-center">
                    <div className="container">
                        <div className="contenido-header d-flex">
                            <div className="rana-header d-flex justify-content-center">
                                <img src="vendor/custom/images/rana_aventurera.png" className="img-fluid" width="350" />
                            </div>
                            <div className="texto-header">
                                <h1>Aliquam feugiat metus ac ipsum tempor, ac eleifend massa hendrerit.</h1>
                                <p>Quisque varius pharetra magna eleifend vulputate.
                                    Curabitur rutrum nisi tristique erat scelerisque, accumsan volutpat felis venenatis. Mauris vitae sapien eros.
                    Sed non arcu libero.</p>
                                <Link to="/login" className="btn btn-header">Busca tu viaje</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="nosotros py-5">
                    <div className="container">
                        <h1 className="text-center title-nosotros">¿Quiénes somos?</h1>
                        <div className="cont-nosotrod mt-5">
                            <div className="row">
                                <div className="col-sm-6 d-flex flex-column justify-content-center">
                                    <p>Maecenas vitae dui et tellus bibendum gravida sed et augue.
                                   Praesent sit amet arcu sed enim auctor ornare a a turpis.
                                   In eget nulla placerat, malesuada felis non, facilisis nisi.
                                   Curabitur fringilla ligula maximus libero auctor semper.
                                   Donec imperdiet augue lacinia egestas porttitor.
                        Fusce sem nisl, accumsan sed eros at, fermentum aliquam erat.</p>
                                </div>
                                <div className="col-sm-6">
                                    <img src="vendor/custom/images/forest-310072_960_720.png" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="servicios py-5">
                    <div className="container">
                        <h1 className="text-center title-servicios">Encontramos el viaje que <br /> siempre quisiste</h1>
                        <div className="cont-servicios mt-5">
                            <div className="row">
                                <div className="col-sm-6">
                                    <img src="vendor/custom/images/viajeros.png" className="img-fluid" width="450" />
                                </div>
                                <div className="col-sm-6 d-flex flex-column justify-content-center">
                                    <p>Maecenas vitae dui et tellus bibendum gravida sed et augue.
                                    Praesent sit amet arcu sed enim auctor ornare a a turpis.
                                    In eget nulla placerat, malesuada felis non, facilisis nisi.
                                    Curabitur fringilla ligula maximus libero auctor semper.
                                    Donec imperdiet augue lacinia egestas porttitor.
                        Fusce sem nisl, accumsan sed eros at, fermentum aliquam erat.</p>
                                    <p>Maecenas vitae dui et tellus bibendum gravida sed et augue.
                                    Praesent sit amet arcu sed enim auctor ornare a a turpis.
                                    In eget nulla placerat, malesuada felis non, facilisis nisi.
                        Curabitur fringilla ligula maximus libero auctor semper. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ranas py-5">
                    <div className="container">
                        <h1 className="text-center title-ranas">¿Qué Rana viajera eres?</h1>
                        <div className="cont-ranas mt-5">
                            <div className="row">
                                <p className="text-center">
                                    Fusce augue ante, molestie in tortor et, consequat finibus libero.
                                    Aliquam erat volutpat. Cras vel elit non eros molestie maximus.
                                    Etiam luctus eleifend mi, ut ullamcorper nisi. Maecenas porta cursus mauris non congue.
                                    Etiam volutpat at ipsum bibendum lacinia. Sed lectus velit, tristique et mauris ut, consequat euismod urna.
                    </p>
                                <div className="col-md-4">
                                    <div className="tarjeta-rana aventurera">
                                        <h2>Rana Aventurera</h2>
                                        <img src="vendor/custom/images/rana_aventurera.png" className="img-fluid my-3" width="155" />
                                        <div className="line mx-auto"></div>
                                        <div className="caracteristicas-rana">
                                            <h2 className="py-3 tit-cara position-relative">Presupuesto</h2>
                                            <div className="presupuesto d-flex justify-content-between">
                                                <i className="fas fa-hand-holding-usd"></i>
                                                <h2>$0 - $5,000</h2>
                                            </div>
                                            <h2 className="py-3 tit-cara position-relative">Hotel/Hostal</h2>
                                            <div className="hotel d-flex justify-content-between">
                                                <i className="fas fa-hotel"></i>
                                                <h2>Economico</h2>
                                            </div>
                                            <h2 className="py-3 tit-cara position-relative">Transporte</h2>
                                            <div className="transporte d-flex justify-content-between">
                                                <i className="fas fa-bus"></i>
                                                <h2>Camión</h2>
                                            </div>
                                            <h2 className="py-3 tit-cara position-relative">Tóur</h2>
                                            <div className="tour d-flex justify-content-between">
                                                <i className="fas fa-map-signs"></i>
                                                <h2>Básico</h2>
                                            </div>
                                            <h2 className="py-3 tit-cara position-relative">Guía</h2>
                                            <div className="guia d-flex justify-content-between">
                                                <i className="fas fa-map-marked-alt"></i>
                                                <h2>Guía de Turista</h2>
                                            </div>
                                            <h2 className="py-3 tit-cara position-relative">Kit</h2>
                                            <div className="kit d-flex justify-content-between">
                                                <i className="fas fa-box-open"></i>
                                                <h2>Kit Básico</h2>
                                            </div>
                                            <a href="" className="btn mt-4" data-toggle="modal" data-target="#modalAventurera">Ver más</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal fade" id="modalAventurera" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <img src="vendor/custom/images/rana_aventurera.png" className="img-fluid mr-3" width="30" />
                                                <h5 className="modal-title" id="exampleModalLabel">Rana Aventurera</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <p className="text-justify">
                                                    Ser aventado e intrépido define tu personalidad, estás dispuesto a vivir cualquier experiencia como un reto nuevo para ti, no le temes a lo desconocido, destacas socialmente, te es fácil hacer amigos en cualquier lugar.
                                    </p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tarjeta-rana hipster">
                                        <h2>Rana Hípster</h2>
                                        <img src="vendor/custom/images/rana_hipster.png" className="img-fluid my-3" width="175" />
                                        <div className="line mx-auto"></div>
                                        <div className="caracteristicas-rana">
                                            <h2 className="py-3 tit-cara position-relative">Presupuesto</h2>
                                            <div className="presupuesto d-flex justify-content-between">
                                                <i className="fas fa-hand-holding-usd"></i>
                                                <h2>$5,0001 - $7,500</h2>
                                            </div>
                                            <h2 className="py-3 tit-cara position-relative">Hotel/Hostal</h2>
                                            <div className="hotel d-flex justify-content-between">
                                                <i className="fas fa-hotel"></i>
                                                <h2>Calidad</h2>
                                            </div>
                                            <h2 className="py-3 tit-cara position-relative">Transporte</h2>
                                            <div className="transporte d-flex justify-content-between">
                                                <i className="fas fa-plane"></i>
                                                <h2>Camión/Avión</h2>
                                            </div>
                                            <h2 className="py-3 tit-cara position-relative">Tóur</h2>
                                            <div className="tour d-flex justify-content-between">
                                                <i className="fas fa-map-signs"></i>
                                                <h2>Colectivo</h2>
                                            </div>
                                            <h2 className="py-3 tit-cara position-relative">Guía</h2>
                                            <div className="guia d-flex justify-content-between">
                                                <i className="fas fa-map-marked-alt"></i>
                                                <h2>Guía de Turista</h2>
                                            </div>
                                            <h2 className="py-3 tit-cara position-relative">Kit</h2>
                                            <div className="kit d-flex justify-content-between">
                                                <i className="fas fa-box-open"></i>
                                                <h2>Kit Medio</h2>
                                            </div>
                                            <a href="" className="btn mt-4" data-toggle="modal" data-target="#modalHipster">Ver más</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal fade" id="modalHipster" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <img src="vendor/custom/images/rana_hipster.png" className="img-fluid mr-3" width="30" />
                                                <h5 className="modal-title" id="exampleModalLabel">Rana Hipster</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <p className="text-justify">
                                                    Viajas frecuentemente, tienes un estilo de moda vintage,  actitud súper cool orientada hacia lugares bohemios, buscas el ángulo perfecto para tener la mejor foto para tus redes sociales y nunca te falta tu café mañanero.
                                    </p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="tarjeta-rana fresa">
                                        <h2>Rana Fresa</h2>
                                        <img src="vendor/custom/images/rana_fresa.png" className="img-fluid my-3" width="200" />
                                        <div className="line mx-auto"></div>
                                        <div className="caracteristicas-rana">
                                            <h2 className="py-3 tit-cara position-relative">Presupuesto</h2>
                                            <div className="presupuesto d-flex justify-content-between">
                                                <i className="fas fa-hand-holding-usd"></i>
                                                <h2>$7,5001 - Sin límite</h2>
                                            </div>
                                            <h2 className="py-3 tit-cara position-relative">Hotel/Hostal</h2>
                                            <div className="hotel d-flex justify-content-between">
                                                <i className="fas fa-hotel"></i>
                                                <h2>Completo</h2>
                                            </div>
                                            <h2 className="py-3 tit-cara position-relative">Transporte</h2>
                                            <div className="transporte d-flex justify-content-between">
                                                <i className="fas fa-plane"></i>
                                                <h2>Avión o Camión</h2>
                                            </div>
                                            <h2 className="py-3 tit-cara position-relative">Tóur</h2>
                                            <div className="tour d-flex justify-content-between">
                                                <i className="fas fa-map-signs"></i>
                                                <h2>Completo</h2>
                                            </div>
                                            <h2 className="py-3 tit-cara position-relative">Guía</h2>
                                            <div className="guia d-flex justify-content-between">
                                                <i className="fas fa-map-marked-alt"></i>
                                                <h2>Guía de Turista</h2>
                                            </div>
                                            <h2 className="py-3 tit-cara position-relative">Kit</h2>
                                            <div className="kit d-flex justify-content-between">
                                                <i className="fas fa-box-open"></i>
                                                <h2>Kit Premium</h2>
                                            </div>
                                            <a href="" className="btn mt-4" data-toggle="modal" data-target="#modalFresa">Ver más</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal fade" id="modalFresa" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <img src="vendor/custom/images/rana_fresa.png" className="img-fluid mr-3" width="30" />
                                                <h5 className="modal-title" id="exampleModalLabel">Rana Fresa</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <p className="text-justify">
                                                    Buscas viajar cómodo pero sin dejar de lado las nuevas experiencias y la aventura?        Llevas siempre el outfit perfecto para la ocasión, a la moda y actualizado con las tendencias para brillar más que el sol? Este es tu perfil indicado.
                                    </p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="testimonios py-5">
                    <h1 className="text-center title-testimonios">Otras ranas dicen</h1>
                    <div className="slick-carousel position-relative mt-5">
                        <div className="item item-1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="testimonio">
                                            <div className="imagen-viajero mb-3">
                                                <img src="vendor/custom/images/viajero.jpg" alt="" className="img-fluid rounded-circle" width="140" />
                                            </div>
                                            <div className="nombre-viajero mb-3">
                                                <h2>Luis Eduardo Vega</h2>
                                            </div>
                                            <div className="calificacion-viajero mb-3">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="comentario-viajero">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos voluptatibus autem similique dolorum tempora quam numquam aperiam nobis beatae temporibus, saepe officiis laudantium necessitatibus! Optio enim ratione dolor sunt?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 d-flex flex-column justify-content-center">
                                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Vn1Om3wsPa0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item item-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="testimonio">
                                            <div className="imagen-viajero mb-3">
                                                <img src="vendor/custom/images/viajero.jpg" alt="" className="img-fluid rounded-circle" width="140" />
                                            </div>
                                            <div className="nombre-viajero mb-3">
                                                <h2>Jessica Leyva</h2>
                                            </div>
                                            <div className="calificacion-viajero mb-3">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="comentario-viajero">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos voluptatibus autem similique dolorum tempora quam numquam aperiam nobis beatae temporibus, saepe officiis laudantium necessitatibus! Optio enim ratione dolor sunt?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 d-flex flex-column justify-content-center">
                                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Vn1Om3wsPa0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item item-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="testimonio">
                                            <div className="imagen-viajero mb-3">
                                                <img src="vendor/custom/images/viajero.jpg" alt="" className="img-fluid rounded-circle" width="140" />
                                            </div>
                                            <div className="nombre-viajero mb-3">
                                                <h2>Juan L. Briseño</h2>
                                            </div>
                                            <div className="calificacion-viajero mb-3">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="comentario-viajero">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos voluptatibus autem similique dolorum tempora quam numquam aperiam nobis beatae temporibus, saepe officiis laudantium necessitatibus! Optio enim ratione dolor sunt?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 d-flex flex-column justify-content-center">
                                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Vn1Om3wsPa0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="registro py-5">
                    <div className="container">
                        <h1 className="text-center title-registro">Únete a nosotros</h1>
                        <div className="cont-registro mt-5">
                            <div className="row">
                                <div className="col-sm-6">
                                    <img src="vendor/custom/images/rana_fresa.png" className="img-fluid" width="450" />
                                </div>
                                <div className="col-sm-6 d-flex flex-column justify-content-center">
                                    <p>Sabias qué? Al registrarte con nosotros conocemos más de ti
                                        como viajero y nos ayudas a elegir tu próximo destino y así
                            puedas vivir al máximo tu aventura.</p>
                                    <Link to="/registro" className="btn">Registrate ahora</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="footer pt-5">
                    <div className="scroll-up d-flex justify-content-center align-items-center">
                        <i className="fas fa-angle-up fa-2x"></i>
                    </div>
                    <div className="container">
                        <div className="d-flex flex-column align-items-center">
                            <div className="redes-footer d-flex">
                                <div className="redes facebook d-flex justify-content-center align-items-center">
                                    <a href="#"><i className="fab fa-facebook-f fa-1x"></i></a>
                                </div>
                                <div className="redes twitter d-flex justify-content-center align-items-center">
                                    <a href="#"><i className="fab fa-twitter fa-1x"></i></a>
                                </div>
                                <div className="redes instagram d-flex justify-content-center align-items-center">
                                    <a href="#"><i className="fab fa-instagram fa-1x"></i></a>
                                </div>
                            </div>
                            <div className="lista d-flex mt-3">
                                <ul className="list-inline m-0">
                                    <li className="list-inline-item"><a href="#">INICIO</a></li>
                                    <li className="list-inline-item"><a href="#">NOSOTROS</a></li>
                                    <li className="list-inline-item"><a href="#">SERVICIOS</a></li>
                                    <li className="list-inline-item"><a href="#">REGISTRO</a></li>
                                    <li className="list-inline-item"><a href="#">CONTACTO</a></li>
                                </ul>
                            </div>
                            <div className="contacto my-3">
                                <h3>Contactanos en:</h3>
                                <a href="mailto:contacto@rana.mx" target="_top"> <i className="far fa-envelope-open mr-3"></i> contacto@rana.mx</a>
                            </div>
                        </div>
                    </div>
                    <div className="derechos py-3">
                        <div className="container text-center">
                            <h2>© Rana | Todos los derechos reservados.</h2>
                            <p className="m-0">
                                <a href="#"> Aviso de privacidad.</a> | <a href="#">Términos y condiciones.</a>
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Landing;
