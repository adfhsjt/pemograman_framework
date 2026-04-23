import { useRouter } from "next/router";
import TampilanLapar from "../../views/lapar/lapar";

// Tambahan Langkah 4. Dynamic Routing gabung sama commit Langkah 3

const HalamanLapar = () => {
    // const Router = useRouter();
    // console.log(Router); 
    const { query } = useRouter();
    return (
        <div>
            <TampilanLapar laparId={query.id} />
        </div>
    );
};

export default HalamanLapar;

