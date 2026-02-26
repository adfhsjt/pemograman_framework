import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./register.module.css";
import styles from "./register.module.scss";

const TampilanRegister = () => {
    const {push} = useRouter();
    const handlerRegister = () => {
        // logic login disini
        push("/produk");         {/* Login → Product (imperatif) */}
    }
    return (
        <div className={styles.register}>
            <head>
                <title>Sign up</title>
            </head>
            <img src="/sign-up.svg" alt="register" className={styles.register__image} />
            <h1 className="text-3xl font-bold text-green-600 ">Halaman Register</h1>
            <button onClick={handlerRegister}>Register</button> <br />
            {/* Inline Styling (CSS-in-JS) */}
            <h1 style={{ color: "red",border: "1px solid red", borderRadius: "10px",padding: "10px",}}>Sudah Punya Akun</h1>
            <Link href={"/auth/login"}>Ke Halaman Login</Link>
        </div>
    );
};

export default TampilanRegister;