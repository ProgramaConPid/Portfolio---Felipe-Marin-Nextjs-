"use client"

import React from 'react'
import { useParams } from 'next/navigation'

const Details = () => {

  const {id} = useParams();

  return (
    <div>El ID del producto seleccionado es: {id}</div>
  )
}

export default Details;