import styles from "@/styles/404.module.scss";
import Link from "next/dist/client/link";
import Image from "next/image";
import Head from "next/head";
const Custom404 = () => {
    return (
        <>
            <Head>
                <title>404 - Halaman Tidak Ditemukan</title>
            </Head>
            <div className={styles.error}>
            {/* <img src="/page-not-found.svg" alt="404" className={styles.error__image} /> */}
            <Image
                src="/page-not-found.svg"
                alt="404"
                width={400}
                height={200}
                className={styles.error__image}
            />
            <h2 className={styles.error__subtitle}>
                Halaman Tidak Ditemukan
            </h2>
            <p className={styles.error__desc}>Maaf, halaman yang Anda cari tidak ditemukan.</p>
            <Link href="/" className={styles.error__button}>Kembali ke Home</Link>
            </div>
        </>
    );
};
export default Custom404;