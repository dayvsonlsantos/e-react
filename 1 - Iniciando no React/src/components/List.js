import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <li><Item marca="Ferrari"/></li>
                <li><Item marca="Fiat"/></li>
                <li><Item marca="Renault"/></li>
            </ul>
        </>
    )
}

export default List;