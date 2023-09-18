import { useState } from "react";

function BirtDate(props) {
  const [data, setData] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleDay = (e) => {
    setDay(e.target.value);
  };

  const handleMonth = (e) => {
    setMonth(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  function mostrarRespuesta() {
    setData(day + " " + month + " " + year);
    let date = new Date(year,month, day)
    console.log(date);
    localStorage.setItem('fechaNacimiento',date);

    props.changeForm();
  }
  return (
    <div>
      <div className="chat-messages" id="chat-messages">
        <div className="message">
        <div  className='profile'>
            <img src="favicon.ico"></img>
        </div>
          <div className="message-bubble bot">
            <p className="message-text">Pregunta 1: ¿Cuál es tu nombre?</p>
            <input
              type="number"
              min={1}
              max={31}
              placeholder="Dia"
              value={day}
              onChange={handleDay}
            />
            <select placeholder="Dia" value={month} onChange={handleMonth}>
              <option value="" disabled hidden>
                Mes{" "}
              </option>
              <option value="0">Enero</option>
              <option value="1">Febrero</option>
              <option value="2">Marzo</option>
              <option value="3">Abril</option>
              <option value="4">Mayo</option>
              <option value="5">Junio</option>
              <option value="6">Julio</option>
              <option value="7">Agosto</option>
              <option value="8">Septiembre</option>
              <option value="9">Octubre</option>
              <option value="10">Noviembre</option>
              <option value="11">Diciembre</option>
            </select>
            <input
              type="number"
              min={1900}
              max={2100}
              placeholder="Año"
              value={year}
              onChange={handleYear}
            />
          </div>
        </div>
      </div>

      {data ? (
        <div className="message-bubble user">
          {day} {month} {year}
        </div>
      ) : day && month && year ? (
        <div className="message-input">
          <button onClick={mostrarRespuesta}>Enviar</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default BirtDate;
