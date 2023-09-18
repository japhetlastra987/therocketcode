import { useState } from "react";
import ContactName from "./ContactName";
import BirtDate from "./Birthdate";
import Info from "./Info";

function Chat() {
  const [formNumber, setFormNumber] = useState(0);
  let fechaNacimiento;
  let fullName;
  let email;
  let phone;

  function loadData() {
    fechaNacimiento = localStorage.getItem("fechaNacimiento");
    fullName = localStorage.getItem("fullName");
    email = localStorage.getItem("email");
    phone = localStorage.getItem("phone");
    return true;
  }
  const iniciarChat = async () => {
    try {
      let data = {
        nombre: localStorage.getItem("nombre"),
        segundoNombre: localStorage.getItem("segundoNombre"),
        apellidoPaterno: localStorage.getItem("apellidoPaterno"),
        apellidoMaterno: localStorage.getItem("apellidoMaterno"),
        fechaDeNacimiento: new Date(localStorage.getItem("fechaNacimiento")),
        email: localStorage.getItem("email"),
        telefono: localStorage.getItem("phone")


      }
      const response = await fetch('https://localhost:7257/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Ajusta los encabezados según tu API
        },
        body: JSON.stringify(data), // Datos que deseas enviar en el cuerpo de la solicitud
      });

      if (response.ok) {
          console.log('usuario agregado correctamente')
      } else {
        // Manejo de errores
        console.error('Error en la solicitud');
      }
    } catch (error) {
      console.error('Error en la solicitud', error);
    }
  };


  return (
    <div className="chat-container">
      <br />
      {formNumber >= 0 ? (
        <ContactName
          changeForm={() => setFormNumber(formNumber + 1)}
        ></ContactName>
      ) : (
        <></>
      )}
      {formNumber > 0 ? (
        <BirtDate changeForm={() => setFormNumber(formNumber + 1)}></BirtDate>
      ) : (
        <></>
      )}
      {formNumber > 1 ? (
        <Info changeForm={() => setFormNumber(formNumber + 1)}></Info>
      ) : (
        <></>
      )}
      {formNumber > 2 && loadData() ? (
        <div className="chat-messages">
          <div className="message-bubble left">
            Si tus datos son correctos por favor continuamos
          </div>
          <div className="start-button" id="start-button">
            <button onClick={iniciarChat}>Iniciar</button>
          </div>
          <div className="message-bubble user">
            <div>Fecha de Nacimiento : {fechaNacimiento}</div>
            <div>Correo Electronico : {email}</div>
            <div>Telefono Celular : {phone}</div>
            <div>Nombre : {fullName}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Chat;
