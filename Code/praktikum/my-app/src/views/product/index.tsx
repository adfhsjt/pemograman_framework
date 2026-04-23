import styles from "../../pages/produk/produk.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
type ProductType = {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
};


const TampilanProduk = ({ products, isLoading = false }: { products: ProductType[], isLoading?: boolean }) => {
    return (
        <div className={styles.produk}>
            <h1 data-testid="title" className={styles.produk__title}>Daftar Produk</h1>
            <div className={styles.produk__content}>
                {products?.length > 0 ? (
                    <>
                        {products?.map((products: ProductType) => (
                            <Link href={`/produk/${products.id}`} key={products.id} className={styles.produk__content__item}>

                                <div className={styles.produk__content__item} key={products.id}>
                                    {/* <img src={products.image} alt={products.name} className={styles.produk__content__item__image} /> */}
                                    <Image src={products.image.length > 10 ? products.image : "/no-image.svg"} alt={products.name} className={styles.produk__content__item__image} width={200} height={200} />
                                    <h2 className={styles.produk__content__item__name}>Nama: {products.name}</h2>
                                    <p className={styles.produk__content__item__price}>Harga: Rp. {products.price.toLocaleString("id-ID")}</p>
                                    <p className={styles.produk__content__item__category}>Kategori: {products.category}</p>
                                </div>
                            </Link>
                        ))}
                    </>
                ) : (
                    <>
                        {[1, 2, 3].map((item) => (
                            <div key={item} className={styles.produk__content__skeleton}>
                                <div className={styles.produk__content__skeleton__image}></div>
                                <div className={styles.produk__content__skeleton__name}></div>
                                <div className={styles.produk__content__skeleton__category}></div>
                                <div className={styles.produk__content__skeleton__price}></div>
                            </div>
                        ))}
                    </>
                )}
            </div>

        </div>
    );
};
export default TampilanProduk;