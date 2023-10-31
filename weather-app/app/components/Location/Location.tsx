'use client'

/* Core */
import { useState } from 'react'

/* Instruments */
import {

} from '@/lib/redux'
import styles from './counter.module.css'
export const Location = (city:string, country:string) => {
  return (
    <div id='location'>
      <h1>{city}</h1>
      <h2>{country}</h2>
    </div>
  )
}
