import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Ini Adalah Halaman About</h1>
      {/* <p>Ini adalah halaman About</p> */}
      {/* <p>Nama: Ahmad Dzul Fadhli Hannan</p> */}
      {/* <p>NIM: 2341720106</p> */}
      {/* <p>Program Studi: D4 Teknik Informatika</p> */}
    </div>
  )
}
