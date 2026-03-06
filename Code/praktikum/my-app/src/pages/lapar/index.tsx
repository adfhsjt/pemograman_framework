import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanLapar from "../../views/lapar";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";
// const fetcher = (url: string) => fetch(url).then((res) => res.json());
const kategori = () => {
    // const [isLogin, setsLogin] = useState(false);
    // const {push} = useRouter();
    const [lapars, setLapars] = useState([]);
    // Menggunakan SWR 
    const {data, error, isLoading} = useSWR("http://localhost:3000/api/lapar", fetcher);
    
    // cek apakah data, error, atau isLoading sudah benar
    console.log("Data:", data);
    // console.log("Error:", error);
    // console.log("Is Loading:", isLoading);

    return (
        <div className="container mx-auto p-4">
            <TampilanLapar lapars={data?.data || []} isLoading={isLoading} />
        </div>
    );
};
export default kategori;