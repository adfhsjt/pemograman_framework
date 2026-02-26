import styles from "./produk.module.css";
const TampilanMainProduk = ({ productId }: { productId?: string | string[] }) => {
    return (
        <main className="main-section">
            {productId ? (
                <p className={styles.produk}>Produk: {productId}</p>
            ) : (
                <p className={styles.produk}>Pilih produk.</p>
            )}
        </main>
    );
};
export default TampilanMainProduk;