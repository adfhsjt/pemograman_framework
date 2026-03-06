import DetailProduk from "../../../views/DetailProduct";
import { ProductType } from "@/types/Product.type";

const HalamanProdukStatic = ({ product }: { product: ProductType }) => {
    return (
        <>
            <h1 className="text-2xl font-bold ml-4">Detail Produk Static</h1>
            <div>
                <DetailProduk products={product} />
            </div>
        </>
    );
};

export default HalamanProdukStatic;

{ /Digunakan static-side generation/ }
export async function getStaticPaths() {
    const res = await fetch(`http://localhost:3000/api/products`);
    const response = await res.json();

    const paths = response.data.map((product: ProductType) => ({
        params: { produk: product.id },
    }));

    // console.log("Paths yang dihasilkan untuk produk:", paths); // Debugging: Tampilkan paths yang dihasilkan
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { produk: string } }) {
    const res = await fetch(`http://localhost:3000/api/products/${params?.produk}`);
    // const response: ProductType[] = await res.json();
    const response: { data: ProductType[] } = await res.json();

    console.log("Data produk yang diambil dari API:", response);
    return {
        props: {
            product: response.data,
        }
    }
}