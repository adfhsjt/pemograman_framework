import styles from "@/styles/404.module.scss";
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
            <a href="/" className={styles.error_button}></a>
        </div>
    );
};
export default Custom404;