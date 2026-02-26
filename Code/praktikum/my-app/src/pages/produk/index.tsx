// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
import TampilanProduk from "../views/produk";

const produk = () => {
    // const [isLogin, setsLogin] = useState(false);
    // const {push} = useRouter();
    // useEffect(() => {
    //     if(!isLogin){
    //         push("/auth/login");    {/*Terapkan redirect otomatis ke login jika user belum login.*/}
    //     }
    // }, []);
    return (
        <div>
            <TampilanProduk />
        </div>
    );
};

export default produk;