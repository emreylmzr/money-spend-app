import React from 'react'

function BasketItem({ item, product }) {
    return (
        <>
            <h5>{product.title} x {item.amount}</h5>

        </>
    )
}

export default BasketItem