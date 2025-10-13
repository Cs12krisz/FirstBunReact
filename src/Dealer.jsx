function Dealer(data) {
    const {name, location, zip} = data;
    return(
        <>
        <p>A dealer neve: {name}, helyszíne: {location}, zip: {zip}</p>
        </>
    )
}
export default Dealer;