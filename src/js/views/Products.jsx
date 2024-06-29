import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const URLBASE = "https://rickandmortyapi.com/api/character"

const Products = () => {
    const [character, setCharacter] = useState([])

    const getAllCharacter = async () => {
        try {
            let response = await fetch(URLBASE)
            let data = await response.json()
            setCharacter(data.results)

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getAllCharacter()
    }, [])


    return (
        <div className="container">
            <div className="row">
                {
                    character.map((item) => {
                        return (
                            <div key={item.id} className="col-12 col-md-4">
                                <div className="card">
                                    <img src={item.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>

                                        <Link to={`/product/${item.id}`} className="btn btn-primary">Ver detalle</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}


export default Products;