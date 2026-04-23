import TampilanLapar from "../../views/lapar";
import { LaparType } from "../../types/Lapar.type";

const halamanLaparServer = (props: { lapars: LaparType[] }) => {
    const { lapars } = props;
    return (
        <div>
            <h1 className="font-bold text-3xl pl-4">Halaman Lapar Server</h1>
            <TampilanLapar lapars={lapars}/>
        </div>
    )
}
export default halamanLaparServer;

// Fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses, dan akan mengambil data lapar dari API sebelum merender halaman.
export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lapar`);
    const response = await res.json();
    // console.log("Data lapar yang diambil dari API", response);
    return {
        props: {
            lapars: response.data,
        },
    }
}
