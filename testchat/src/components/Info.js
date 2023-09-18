import {useState} from 'react'


function Info(props){
    const [data, setData] = useState("");
    const [email, setEmail] = useState('')
    const [phone,setPhone]=useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
      };

      const handlePhone = (e) => {
        setPhone(e.target.value);
      };

      function mostrarRespuesta() {
        setData(phone+' '+email);
        localStorage.setItem('phone', phone)
        localStorage.setItem('email', email)
        props.changeForm();
      }

    return(
        <div>
      <div className="chat-messages" id="chat-messages">
  
        <div className="message">
        <div className='profile'>
            <img src="favicon.ico"></img>
        </div>
          <div className="message-bubble">
            <b className="message-text">Datos de contacto</b>
            <input
              type="email"
              placeholder="Correo Electronico"
              value={email}
              onChange={handleEmail}
            />
           
            <input
              type="tel"
              placeholder="Telefono Celular"              
              pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
              value={phone}
              onChange={handlePhone}
            />
          </div>
        </div>
      </div>

      {data ? (
        <div className="message-bubble user">
<div> Correo Electronico: {email}</div>
<div> Telefono Celular: {phone}</div>

        </div>
      ) : (
        email&&phone?(
        <div className="message-input">
          <button onClick={mostrarRespuesta}>Enviar</button>
        </div>):<></>
      )}
    </div>
    )
}

export default Info