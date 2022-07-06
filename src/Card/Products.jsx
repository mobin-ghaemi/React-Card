import { useState } from "react"
import Product from "./Product"
import Show from "./Show"

const Products = () => {
    const [products , setProducts] = useState([
        {title : "HP 4540s" , count : 0 , id : 1},
        {title : "Dell XPS" , count : 0 , id : 2},
    ])
    const [counter , setCounter ] = useState([
        // {title : "One" , quantity : 0 , id : 1},
        // {title : "Two" , quantity : 0 , id : 2}
    ])

    const plusHandler = (id) => {
        const index = products.find(product => product.id === id)
        const newArray = [...products]
        index.count++
        setProducts(newArray)
    }   
    const minusHandler = (id) => {
        const index = products.find(product => product.id === id)
        const newArray = [...products]
        index.count--
        setProducts(newArray)
    }
    const buyHandler = (id) => {
        const filterd = products.filter(index => index.id === id);

        let obj = {
            title : filterd[0].title ,
            quantity : filterd[0].count,
            id : filterd[0].id
        }

        const copyCounter = [...counter]
        const desireIndex = copyCounter.findIndex( hi => hi.id === obj.id)
        console.log(desireIndex);

        if(desireIndex !== -1){
            copyCounter[desireIndex] = obj
        } else {
            copyCounter.push(obj)
        }


        setCounter(copyCounter)

    }
    const deleteHandler = (id) => {
        console.log(id);
        const filterd = counter.filter(index => index.id !== id)
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
            {counter.map((product , index) => {
                return <Show key={index} 
                title={product.title} 
                quantity={product.quantity} 
                delHandler={() => deleteHandler(product.id)}/>
            })}
        </div>
        </>
    )
}

export default Products