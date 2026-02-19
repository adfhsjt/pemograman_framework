import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Ini Adalah Halaman Profil</h1>
      <a href="profil/edit">Edit Profil</a>
    </div>
  )
}
