import { useState } from "react"

function Gomb1() {
    const [ertek, KettovelNovelve] = useState(0)

    return(
        <>
        <button type="button" onClick={() => KettovelNovelve((ertek) => ertek + 2)}> Növeld kettővel {ertek}</button>
        </>
    )
}
export default Gomb1;