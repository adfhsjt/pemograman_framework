// import { useRouter } from "next/router";
// import { use, useEffect, useState } from "react";
import TampilanProduk from "../../views/product";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";
// const fetcher = (url: string) => fetch(url).then((res) => res.json());
const kategori = () => {
    // const [isLogin, setsLogin] = useState(false);
    // useEffect(() => {
    //     // Redirect ke halaman login jika belum login
    //     if (!isLogin) {
    //         window.location.href = "/auth/login";
    //     }
    // }, [isLogin]);
    // const {push} = useRouter();
    // const [products, setProducts] = useState([]);
    // Menggunakan SWR 
    const {data, error, isLoading} = useSWR("/api/produk", fetcher);
    // console.log("Data:", data);
    // console.log("Error:", error);
    // console.log("Is Loading:", isLoading);
    
    // cek apakah data, error, atau isLoading sudah benar
    // console.log("Data:", data);
    // console.log("Error:", error);
    // console.log("Is Loading:", isLoading);

    return (
        <div className="container mx-auto p-4">
            <TampilanProduk products={isLoading ? [] : data?.data} />
        </div>
    );
};
export default kategori;