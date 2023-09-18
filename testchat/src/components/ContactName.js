import { useState } from "react";

function ContactName(props) {
  const [firstName, setFirstName] = useState("");
  const [data, setData] = useState("");
  const [secondName, setSecondName] = useState("");
  const [lastName, setLastName] = useState("");
  const [secondSurname, setSecondSurname] = useState("");

  const handlefirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleSecondName = (e) => {
    setSecondName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleSecondSurname = (e) => {
    setSecondSurname(e.target.value);
  };

  function mostrarRespuesta() {
    setData(firstName + " " + lastName);
    localStorage.setItem('fullName', firstName + " " + lastName)
    localStorage.setItem('nombre', firstName)
    localStorage.setItem('segundoNombre', secondName)
    localStorage.setItem('apellidoPaterno', lastName)
    localStorage.setItem('apellidoMaterno', secondSurname)
    props.changeForm();
  }

  return (
    <div>
      <div className="chat-header">
        <h1>The Rocket Code</h1>
      </div>
      <div className="chat-messages" id="chat-messages">
        <div className="message">
        <div  className='profile'>
            <img src="favicon.ico"></img>
        </div>
          <div className="message-bubble bot">
            <p className="message-text">Pregunta 1: ¿Cuál es tu nombre?</p>
            <form>
              <input
                type="text"
                placeholder="Nombre"
                value={firstName}
                onChange={handlefirstName}
                readOnly={data}
                required
              />
              <input
                type="text"
                placeholder="Segundo Nombre"
                value={secondName}
                onChange={handleSecondName}
                readOnly={data}
              />
              <input
                type="text"
                placeholder="Apellido Paterno"
                value={lastName}
                onChange={handleLastName}
                readOnly={data}
              />
              <input
                type="text"
                placeholder="Apellido Materno"
                value={secondSurname}
                onChange={handleSecondSurname}
                readOnly={data}
              />
            </form>{" "}
          </div>
        </div>
      </div>

      {data ? (
        <div className="message-bubble user">
          {firstName} {lastName}
        </div>
      ) : firstName && lastName ? (
        <div className="message-input">
          <button type="submit" onClick={mostrarRespuesta}>
            Enviar
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ContactName;
