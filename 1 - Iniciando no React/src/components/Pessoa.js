/* 
Antes:

function Pessoa(props) {
    return (
        <div>
            <img src={props.foto} alt={props.desc} />
        </div>
    )
}

export default Pessoa;
*/

function Pessoa({ foto, desc }) {
    return (
        <div>
            <img src={foto} alt={desc} />
        </div>
    )
}

export default Pessoa;