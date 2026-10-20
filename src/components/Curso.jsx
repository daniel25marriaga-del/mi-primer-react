function Curso(props) {

    function mostrarmensaje() {
        alert("Bienvenido al curso de $(props.nombre)! ")
    }
    return (
        <div>
            <h3>{props.nombre}</h3>
            <p>{props.descripcion}</p>

            <button onClick={mostrarmensaje}>
                ver informacion
            </button>
        </div>
    );
}

export default Curso;