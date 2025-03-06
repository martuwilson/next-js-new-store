import React from 'react'
import { Button } from '../ui/button'
import { SiStylus } from "react-icons/si";
import Link from 'next/link'

const Logo = () => {
  return (
    <Button size='icon' asChild>
      <Link href={'/'}>
        <SiStylus className='w-6 h-6'/>
      </Link>
    </Button>
  )
}

export default Logo