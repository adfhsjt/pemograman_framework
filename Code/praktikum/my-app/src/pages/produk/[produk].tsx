import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";

// Tambahan Langkah 4. Dynamic Routing gabung sama commit Langkah 3

const HalamanProduk = () => {
    // const Router = useRouter();
    // console.log(Router); 
    const { query } = useRouter();
    const {data, error, isLoading} = useSWR(`/api/products/${query.produk}`, fetcher);
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Halaman Produk</h1>
            <p className="text-lg">Produk: {query.produk}</p>
        </div>
    );
};

export default HalamanProduk;

