import React from 'react'
import { Button } from '../ui/button'
import { LuShoppingCart } from "react-icons/lu";
import Link from 'next/link'

const CartButton = async () => {

  //temp
  const numberItemsInCart = 9

  return (
    <Button
      asChild
      variant='outline'
      size={'icon'}
      className='flex justify-center items-center relative'
    >
      <Link href={'/cart'}>
        <LuShoppingCart className='w-6 h-6'/>
      <span className='absolute -top-3 -right-3 bg-primary text-white rounded-full w-6 h-6 flex justify-center items-center text-xs'>
        {numberItemsInCart}
      </span>
      </Link>
    </Button>
  )
}

export default CartButton