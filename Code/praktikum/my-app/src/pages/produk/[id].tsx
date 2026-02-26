import { useRouter } from "next/router";
import TampilanProduk from "../views/produk";

// Tambahan Langkah 4. Dynamic Routing gabung sama commit Langkah 3

const HalamanProduk = () => {
    // const Router = useRouter();
    // console.log(Router); 
    const { query } = useRouter();
    return (
        <div>
            <TampilanProduk productId={query.id} />
        </div>
    );
};

export default HalamanProduk;

