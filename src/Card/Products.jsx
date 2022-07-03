import { useState } from "react"
import Product from "./Product"
import Show from "./Show"

const Products = () => {
    const [products , setProducts] = useState([
        {title : "HP 4540s" , count : 0 , id : 1},
        {title : "Dell XPS" , count : 0 , id : 2},
    ])
    const [counter , setCounter ] = useState([
        // {title : "One" , count : 0 , id : 1},
        // {title : "Two" , count : 0 , id : 2}
    ])



    const plusHandler = (id) => {
        const onlyThis = products.find(product => product.id === id)
        const array = [onlyThis]
        onlyThis.count++
        setProducts(array)
    }   
    const minusHandler = (id) => {
        const onlyThis = products.find(product => product.id === id)
        const array = [onlyThis]
        onlyThis.count--
        onlyThis.count < 0 ? onlyThis.count = 1:
        setProducts(array)
    }
    const buyHandler = (id) => {
        let filterd = products.filter(index => index.id === id);
        filterd = filterd[0];

        const [title , count , ID] = 
        [filterd.title , filterd.count , filterd.id];

        if (count < 1) {
            alert("Buy Something Stupid !")
        } else {
            setCounter([{ title : title , count : count , ID}])
        }
    }
    const deleteHandler = (id) => {
        const filterd = counter.filter(index => index.ID !== id)
        setCounter(filterd)
    }

    return (
        <>
        <div>
            {products.map(product => {
                return <Product key={product.id} 
                title={product.title} count={product.count} 
                plusHandler={() => plusHandler(product.id)}
                minusHandler={() => minusHandler(product.id)}
                buyHandler={() => buyHandler(product.id)}/>
            })}
        </div>
        <div>Result :
            {counter.map(product => {
                return <Show key={product.ID} 
                title={product.title} 
                count={product.count} 
                delHandler={() => deleteHandler(product.ID)}/>
            })}
        </div>
        </>
    )
}

export default Products