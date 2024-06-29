import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"

const URLBASE = "https://rickandmortyapi.com/api/character"

const ProductDetail = () => {
    const [product, setProduct] = useState(null)

    const { id } = useParams()
    const navigate = useNavigate()

    const getProduct = async () => {
        try {
            let responde = await fetch(`${URLBASE}/${id}`)
            let data = await responde.json()
            setProduct(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="con">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <div className="card">
                        <img src={product?.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            {/* <h5 className="card-title">{product == null ? "" : product.name}</h5> */}
                            <h5 className="card-title">{product?.name}</h5>
                            <p className="card-text">{product?.species}</p>
                            <p className="card-text">{product?.status}</p>
                            <button onClick={() => navigate(-1)} className="btn btn-primary">Volver a product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductDetail;