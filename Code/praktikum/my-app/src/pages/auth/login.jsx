import Link from "next/link";
import { useRouter } from "next/router";

const halamanLogin = () => {
    const {push} = useRouter();
    const handlerLogin = () => {
        push("/produk");         {/* Login → Product (imperatif) */}
    }
    return (
        <div>
            <h1>Halaman Login</h1>
            <button onClick={handlerLogin}>Login</button> <br /> {/* Login → Product (imperatif) */}
            <button onClick={() => push('/produk')}>Login</button> <br />
            <button onClick={() => handlerLogin()}>Login</button> <br />

            <Link href="/auth/register">Ke Halaman Register</Link> {/* Login → Register (link) */}
        </div>
    )
}

export default halamanLogin;