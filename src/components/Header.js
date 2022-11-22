import React from 'react'
import { moneyFormat } from './helpers'

function Header({ money, total }) {
    return (

        <>
            <div>

                {
                    total > 0 && money - total !== 0 && (
                        <>
                            <h5>  Harcayacak ${moneyFormat(money - total)} paranız kaldı.</h5>
                        </>
                    )

                }



                {total === 0 && (
                    <>
                        <h5>Harcamak için {moneyFormat(money)}$ paranız var!</h5>
                    </>
                )
                }

                {money - total === 0 && (
                    <>
                        <h5>Paranız bitti.</h5>
                    </>
                )
                }


            </div>

        </>
    )
}

export default Header