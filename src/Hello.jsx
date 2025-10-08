function Hello(props) {
    return (
        <>
        <h1>Vite + React</h1>
        <h1>Szia {props.user}, te {props.age+1} éves vagy</h1>
        </>
    );
}

export default Hello;