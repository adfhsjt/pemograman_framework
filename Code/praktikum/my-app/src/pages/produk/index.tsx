import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import TampilanProduk from "../views/produk";
// Tugas 1: Menambahkan 3 jumlah produk
type ProductType = {
    id: string;
    name: string;
    price: number;
    size: string;
    category: string; //Tugas 2: Menambahkan field categroy
}
const kategori = () => {
    // const [isLogin, setsLogin] = useState(false);
    // const {push} = useRouter();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false); //Tugas 3: Menambahkan button refresh 
    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/produk");
            const responsedata = await response.json();
            setProducts(responsedata.data);
        } catch (error) {
            console.error("Error fetching produk:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    // useEffect(() => {
    //     if(!isLogin){
    //         push("/auth/login");    {/*Terapkan redirect otomatis ke login jika user belum login.*/}
    //     }
    // }, []);
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">Daftar Produk</h1>
            <button onClick={fetchProducts} className="mt-4 mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                {loading ? "Loading..." : "Refresh Produk"}
            </button>
            {products.map((product: ProductType) => (
                <div key={product.id}>
                    <h2 className="text-xl font-semibold">Nama Produk: {product.name}</h2>
                    <p>Harga: Rp {product.price}</p>
                    <p>Ukuran: {product.size}</p>
                    <p>Kategori: {product.category}</p>
                    <br />
                </div>  
            ))}
        </div>
    );
};
export default kategori;