import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../../views/product";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";
// const fetcher = (url: string) => fetch(url).then((res) => res.json());
const kategori = () => {
    // const [isLogin, setsLogin] = useState(false);
    const {push} = useRouter();
    const [products, setProducts] = useState([]);
    // Menggunakan SWR 
    const {data, error, isLoading} = useSWR("/api/produk", fetcher);
    
    // cek apakah data, error, atau isLoading sudah benar
    // console.log("Data:", data);
    // console.log("Error:", error);
    // console.log("Is Loading:", isLoading);

    return (
        <div className="container mx-auto p-4">
            <TampilanProduk products={isLoading ? [] : data.data} />
        </div>
    );
};
export default kategori;