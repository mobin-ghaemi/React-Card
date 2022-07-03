import { BiShoppingBag , BiPlusMedical , BiMinus } from "react-icons/bi";

const Product = (props) => {
    return (
        <div className="card">
            <div>
            <h2>{props.title} {" "}
                <span className="counter">{props.count}</span>    
            </h2>
            </div>
            <div>
                <button>
                    <BiMinus onClick={props.minusHandler} />
                </button>
                <button onClick={props.plusHandler}>
                    <BiPlusMedical />
                </button>
                <button>
                    <BiShoppingBag onClick={props.buyHandler} />
                </button>
            </div>
        </div>
    )
}

export default Product