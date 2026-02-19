import { useRouter } from "next/router";

// Tambahan Langkah 4 gabung sama commit Langkah 3

const HalamanProduk = () => {
    // const Router = useRouter();
    // console.log(Router); 
    const { query } = useRouter();
    return (
        <div>
            <h1>Halaman Produk</h1>
            <p>Produk: {query.id}</p>
        </div>
    );
};

export default HalamanProduk;

