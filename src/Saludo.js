function Saludo(props) {
  return (
    <>
        <h1>Hola {props.nombre}</h1>
        <h2>Edad: {props.edad}</h2>
    </>
    );
}

export default Saludo;