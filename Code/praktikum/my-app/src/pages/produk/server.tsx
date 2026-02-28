import TampilanProduk from "../views/product";
const halamanProdukServer = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl">Halaman Produk Server</h1>
            <TampilanProduk products={[]} />
        </div>
    )
}
export default halamanProdukServer;