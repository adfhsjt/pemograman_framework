import DetailProduk from "../../../views/DetailProduct";
import { ProductType } from "@/types/Product.type";

const HalamanProdukServer = ({product}: {product: ProductType}) => {
    return (
        <>
            <h1 className="text-2xl font-bold ml-4">Detail Produk Server</h1>
            <div>
                <DetailProduk products={product} />
            </div>
        </>
    );
};

export default HalamanProdukServer;

// Fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses, dan akan mengambil data produk dari API sebelum merender halaman.
{/Digunakan server-side rendering/}
export async function getServerSideProps({params}: {params: {produk: string}}) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${params?.produk}`);
    const response = await res.json();
    // console.log("Data produk yang diambil dari API:", response);
    return {
        props: {
            product: response.data, //Pastikan untuk memberikan nilai default jika data tidak tersedia
        }
    }

}