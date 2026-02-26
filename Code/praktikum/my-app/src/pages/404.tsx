import styles from "@/styles/404.module.scss";
import Link from "next/dist/client/link";
const Custom404 = () => {
    return (
        <div className={styles.error}>
            <head>
                <title>404 - Halaman Tidak Ditemukan</title>
            </head>
            <img src="/page-not-found.svg" alt="404" className={styles.error__image} />
            <h2 className={styles.error__subtitle}>
                Halaman Tidak Ditemukan
            </h2>
            <p className={styles.error__desc}>Maaf, halaman yang Anda cari tidak ditemukan.</p>
            <Link href="/" className={styles.error__button}>Kembali ke Home</Link>
        </div>
    );
};
export default Custom404;