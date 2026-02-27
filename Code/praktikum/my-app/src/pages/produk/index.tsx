import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../views/product";
const kategori = () => {
    // const [isLogin, setsLogin] = useState(false);
    // const {push} = useRouter();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/api/produk")
            .then((response) => response.json())
            .then((responsedata)=> {
                setProducts(responsedata.data);
                // console.log("Data Produk:", responsedata.data);
            })
            .catch((error) => {
                console.error("Error fetching produk:", error);
            });
    }, []);
    return (
        <div className="container mx-auto p-4">
            <TampilanProduk products={products} />
        </div>
    );
};
export default kategori;