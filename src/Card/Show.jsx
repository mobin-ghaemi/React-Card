import { BiTrash } from "react-icons/bi";

const Show = (props) => {
    return (
        <div className="show">
            
            <p>{props.title}</p> <p>{props.count}</p>
            <span onClick={props.delHandler} className="icon"><BiTrash /></span>

        </div>
    )
}

export default Show