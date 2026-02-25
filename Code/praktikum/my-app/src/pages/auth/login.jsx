import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.css";

const halamanLogin = () => {
    const {push} = useRouter();
    const handlerLogin = () => {
        push("/produk");         {/* Login → Product (imperatif) */}
    }
    return (
        <div className={styles.login}>
            <h1>Halaman Login</h1>
            {/* <button onClick={handlerLogin}>Login</button> <br /> Login → Product (imperatif) */}
            {/* <button onClick={() => push('/produk')}>Login</button> <br /> */}
            <button onClick={() => handlerLogin()}>Login</button> <br />

            <Link href="/auth/register">Ke Halaman Register</Link> {/* Login → Register (link) */}
        </div>
    )
}

export default halamanLogin;