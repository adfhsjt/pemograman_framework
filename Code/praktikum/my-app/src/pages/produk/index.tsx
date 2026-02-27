import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import TampilanProduk from "../views/produk";
type ProductType = {
    id: string;
    name: string;
    harga: number;
    ukuran: string;
    warna: string;
}
const kategori = () => {
    // const [isLogin, setsLogin] = useState(false);
    // const {push} = useRouter();
    const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     if(!isLogin){
    //         push("/auth/login");    {/*Terapkan redirect otomatis ke login jika user belum login.*/}
    //     }
    // }, []);
    useEffect(() => {
        fetch("/api/produk")
            .then((response) => response.json())
            .then((responsedata) => {
                // console.log(responsedata);
                setProducts(responsedata.data);
            })
            .catch((error) => {
                console.error("Error fetching produk:", error);
            })
    }, []);
    return (
        <div>
            <h1 className="text-3xl font-bold">Daftar Produk</h1>
            {products.map((product: ProductType) => (
                <div key={product.id}>
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p>{product.harga}</p>
                    <p>{product.ukuran}</p>
                    <p>{product.warna}</p>
                </div>  
            ))}
        </div>
    );
};
export default kategori;