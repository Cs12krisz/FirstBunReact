import { useState } from "react";

function Gomb2() {
    const [ertek, szorozzukKettovel] = useState(1)

    return(
        <>
        <button type="button" onClick={() => szorozzukKettovel((ertek) => ertek * 2)}>Szorozd kettővel {ertek}</button>
        </>
    )
}

export default Gomb2;