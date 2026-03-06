import TampilanLapar from "../../views/lapar";
import { LaparType } from "../../types/Lapar.type";

const halamanLaparStatic = (props:{lapars:LaparType[]}) => {
    const {lapars} = props;
    return (
        <div>
            <h1>Halaman Lapar Static</h1>
            <TampilanLapar lapars={lapars}/>
        </div>
    )
}

export default halamanLaparStatic;

export async function getStaticProps(){
    const res = await fetch('http://127.0.0.1:3000/api/lapar');
    // const response: LaparType[] = await res.json();
    const response: { data: LaparType[] } = await res.json();

    // console.log("Data lapar yang diambil dari API:", response.data);
    return {
        props: {
            lapars: response.data
        }
    }
}
