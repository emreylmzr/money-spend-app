import React from 'react'
import BasketItem from './BasketItem'

function Basket({ basket, products, total, resetBasket }) {
    return (
        <>

            {basket.map(item => (

                <BasketItem item={item} product={products.find(p => p.id === item.id)} />
            ))}

            <h4>Toplam: ${total}</h4>
            <button onClick={resetBasket}>Sepeti Sıfırla</button>

        </>
    )
}

export default Basket