import styles from "../../produk/produk.module.scss"
type ProductType = {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
    return (
        <div className={styles.produk}>
            <h1 className={styles.produk__title}>Daftar Produk</h1>
            <div className={styles.produk__content}>
                {products.map((product: ProductType) => (
                    <div className={styles.produk__content__item} key={product.id}>
                        <img src={product.image} alt={product.name} className={styles.produk__content__item__image} />
                        <h2 className={styles.produk__content__item__name}>Nama: {product.name}</h2>
                        <p className={styles.produk__content__item__price}>Harga: {product.price}</p>
                        <p className={styles.produk__content__item__category}>Kategori: {product.category}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};
export default TampilanProduk;