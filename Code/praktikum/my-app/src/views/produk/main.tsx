import Image from "next/image";
const TampilanMainProduk = ({ productId }: { productId?: string | string[] }) => {
    return (
        <main className="flex justify-center items-center py-10">
            {productId ? (
                <p className="text-lg font-medium bg-white px-6 py-3 rounded-lg shadow">
                    Produk: {productId}
                </p>
            ) : (
                <div className="flex flex-col items-center gap-4">
                    <Image src="/shopping.svg" alt="shopping" className="w-80" width={320} height={320} />
                    <p className="text-lg text-gray-500">
                        Pilih produk.   
                    </p>
                </div>
            )}
        </main>
    );
};
export default TampilanMainProduk;