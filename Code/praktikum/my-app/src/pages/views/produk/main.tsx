import styles from "./produk.module.css";
const TampilanMainProduk = ({ productId }: { productId?: string | string[] }) => {
    return (
        <main className="flex justify-center items-center py-10">
            {productId ? (
                <p className="text-lg font-medium bg-white px-6 py-3 rounded-lg shadow">
                    Produk: {productId}
                </p>
            ) : (   
                <p className="text-lg text-gray-500">
                    Pilih produk.
                </p>
            )}
        </main>
    );
};
export default TampilanMainProduk;