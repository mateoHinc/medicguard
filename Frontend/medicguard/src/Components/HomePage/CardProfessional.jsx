import { useState } from "react";
import { Button, Card, Form, Image, Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import profile from "../css/imageProfiles/profile.jpg";
import profile2 from "../css/imageProfiles/profile2.jpg";

const CardProfessional = () => {
  const [showAddProfile, setShowAddProfile] = useState(false);

  const addProfileClose = () => setShowAddProfile(false);
  const addProfileShow = () => setShowAddProfile(true);

  // Cargar Imagen
  // const [, setImage] = useState("");

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file && file.type.substring(0, 5) === "image") {
  //     setImage(file);
  //   } else {
  //     setImage(null);
  //   }
  // };

  // const handleImageClick = () => {
  //   document.getElementById("file-input").click();
  // };

  // Modal Dar de Baja
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Modal Editar Perfil
  const [showEditProfile, setShowEditProfile] = useState(false);

  const editClose = () => setShowEditProfile(false);
  const editShow = () => setShowEditProfile(true);

  // Cargar Imagen
  const [setImage] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  const handleImageClick = () => {
    document.getElementById("file-input").click();
  };

  return (
    <>
      <div className="row">
        <div className="col-md-9 col-lg-9">
          <ul className="accordion">
            <li>
              <input type="radio" name="accordion" id="first" />
              <label htmlFor="first" className="labelName">
                <Image src={profile2} className="profile-img" />
                José Andrada
              </label>
              <div className="content">
                <Card.Body>
                  <div className="row">
                    <div className="col-md-8 col-sm-8">
                      <Card.Title>Fecha de Nacimiento:</Card.Title>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <Card.Text>18/04/1992</Card.Text>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8 col-sm-8">
                      <Card.Title>D.N.I:</Card.Title>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <Card.Text>37586972</Card.Text>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8 col-sm-8">
                      <Card.Title>Matrícula:</Card.Title>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <Card.Text>98785</Card.Text>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8 col-sm-8">
                      <Card.Title>Antiguedad en la institución:</Card.Title>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <Card.Text>5 años</Card.Text>
                    </div>
                  </div>
                </Card.Body>
                <div className="pt-5">
                  <Button className="btnDardeBaja" onClick={handleShow}>
                    Dar de Baja
                  </Button>{" "}
                  <Button className="btnEditarPerfil" onClick={editShow}>
                    Editar Perfil
                  </Button>
                </div>
              </div>
            </li>
            <li>
              <input type="radio" name="accordion" id="second" />
              <label htmlFor="second" className="labelName">
                <Image src={profile2} className="profile-img" />
                José Andrada
              </label>
              <div className="content">
                <Card.Body>
                  <div className="row">
                    <div className="col-md-8 col-sm-8">
                      <Card.Title>Fecha de Nacimiento:</Card.Title>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <Card.Text>18/04/1992</Card.Text>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8 col-sm-8">
                      <Card.Title>D.N.I:</Card.Title>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <Card.Text>37586972</Card.Text>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8 col-sm-8">
                      <Card.Title>Matrícula:</Card.Title>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <Card.Text>98785</Card.Text>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8 col-sm-8">
                      <Card.Title>Antiguedad en la institución:</Card.Title>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <Card.Text>5 años</Card.Text>
                    </div>
                  </div>
                </Card.Body>
                <div className="pt-5">
                  <Button className="btnDardeBaja" onClick={handleShow}>
                    Dar de Baja
                  </Button>{" "}
                  <Button className="btnEditarPerfil" onClick={editShow}>
                    Editar Perfil
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-lg-3">
          <div className="mx-2">
            <Button className="btnAddProfile" onClick={addProfileShow}>
              Agregar Perfil
            </Button>
          </div>
        </div>
      </div>

      <Modal
        show={showAddProfile}
        onHide={addProfileClose}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="grid-example">
          <Form>
            <Container>
              <Row>
                <Col xs={12} md={12} lg={12}>
                  {/* .col-xs-6 .col-md-6 */}
                  <div className="justify-content-md-center">
                    <div
                      className="image-container mt-4"
                      onClick={handleImageClick}
                    >
                      <Image className="imageProfile" src={profile} />
                    </div>
                    <Form.Group>
                      <Form.Control
                        id="file-input"
                        type="file"
                        accept="/image/*"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Label>Subir Nueva Foto de Perfil</Form.Label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6} lg={6}>
                  <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" autoFocus></Form.Control>
                  </Form.Group>
                </Col>
                <Col xs={6} md={6} lg={6}>
                  <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" autoFocus></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6} lg={6}>
                  <Form.Group>
                    <Form.Label>D.N.I</Form.Label>
                    <Form.Control type="text" autoFocus></Form.Control>
                  </Form.Group>
                </Col>
                <Col xs={6} md={6} lg={6}>
                  <Form.Group>
                    <Form.Label>Matrícula</Form.Label>
                    <Form.Control type="text" autoFocus></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12} lg={12}>
                  <Form.Group>
                    <Form.Label>Domicilio</Form.Label>
                    <Form.Control type="text" autoFocus></Form.Control>
                  </Form.Group>
                </Col>
                <Col xs={12} md={12} lg={12}>
                  <Form.Group>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" autoFocus></Form.Control>
                  </Form.Group>
                </Col>

                <Col xs={12} md={12} lg={12}>
                  <Form.Group>
                    <Form.Label>Nombre de Usuario</Form.Label>
                    <Form.Control type="text" autoFocus></Form.Control>
                  </Form.Group>
                </Col>
                <Col xs={12} md={12} lg={12}>
                  <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" autoFocus></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btnCancelarPerfil" onClick={addProfileClose}>
            Cancelar
          </Button>{" "}
          <Button className="btnAgregarPerfil" onClick={addProfileClose}>
            Agregar Perfil
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="py-5">
            <h3 className="txtAviso">¿Deseas dar de baja a este perfil?</h3>
          </div>
          <div>
            <Button className="btnCancelar" onClick={handleClose}>
              Cancelar
            </Button>{" "}
            <Button className="btnAceptarBaja" onClick={handleClose}>
              Aceptar
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={showEditProfile}
        onHide={editClose}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Editar Perfil
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Form>
            <Container>
              <Row>
                <Col xs={6} md={6}>
                  {/* .col-xs-6 .col-md-6 */}
                  <div className="justify-content-md-center">
                    <div
                      className="image-container mt-4"
                      onClick={handleImageClick}
                    >
                      <Image className="imageProfile" src={profile} />
                    </div>
                    <Form.Group>
                      <Form.Control
                        id="file-input"
                        type="file"
                        accept="/image/*"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Label>Subir Nueva Foto de Perfil</Form.Label>
                  </div>
                </Col>
                <Col xs={6} md={6}>
                  <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" autoFocus></Form.Control>
                  </Form.Group>
                  <Row>
                    <Col xs={6} md={6}>
                      <Form.Group>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" autoFocus></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={6}>
                      <Form.Group>
                        <Form.Label>D.N.I</Form.Label>
                        <Form.Control type="text" autoFocus></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={6}>
                      <Form.Group>
                        <Form.Label>Matrícula</Form.Label>
                        <Form.Control type="text" autoFocus></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12} lg={12}>
                  <Form.Group>
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" autoFocus></Form.Control>
                  </Form.Group>
                </Col>
                <Col xs={12} md={12} lg={12}>
                  <Form.Group>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" autoFocus></Form.Control>
                  </Form.Group>
                </Col>
                <Row>
                  <Col xs={6} md={6} lg={6}>
                    <Form.Group>
                      <Form.Label>Nombre de Usuario</Form.Label>
                      <Form.Control type="text" autoFocus></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={6} lg={6}>
                    <Form.Group>
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control type="password" autoFocus></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btnCancelar" onClick={editClose}>
            Cancelar
          </Button>{" "}
          <Button className="btnEditarPerfil" onClick={editShow}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CardProfessional;
