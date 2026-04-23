import styles from "../../pages/lapar/lapar.module.scss";
import Image from "next/image";
type LaparType = {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
};

const TampilanLapar = ({ lapars, isLoading = false }: { lapars: LaparType[], isLoading?: boolean }) => {
    return (
        <div className={styles.lapar}>
            <h1 className={styles.lapar__title}>Daftar Lapar</h1>
            <div className={styles.lapar__content}>
                {!isLoading ? (
                    <>
                        {lapars.map((lapar: LaparType) => (
                            <div className={styles.lapar__content__item} key={lapar.id}>
                                {/* <img src={lapar.image} alt={lapar.name} className={styles.lapar__content__item__image} /> */}
                                <Image src={lapar.image.length > 10 ? lapar.image : "/no-image.svg"} alt={lapar.name} className={styles.lapar__content__item__image} width={200} height={200} />
                                <h2 className={styles.lapar__content__item__name}>Nama: {lapar.name}</h2>
                                <p className={styles.lapar__content__item__price}>Harga: {lapar.price}</p>
                                <p className={styles.lapar__content__item__category}>Kategori: {lapar.category}</p>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {[1, 2, 3].map((item) => (
                            <div className={styles.lapar__content__skeleton}>
                                <div className={styles.lapar__content__skeleton__image}></div>
                                <div className={styles.lapar__content__skeleton__name}></div>
                                <div className={styles.lapar__content__skeleton__category}></div>
                                <div className={styles.lapar__content__skeleton__price}></div>
                            </div>
                        ))}
                    </>
                )}
            </div>

        </div>
    );
};
export default TampilanLapar;