import syles from "./navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const { data } = useSession();
    // const {data: session} = useSession();
    // console.log("session:", session);
    return (
        <div className={syles.navbar}>
            <div className="big">
                Navbar Component
            </div>
            {data ?(
            <button
                className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                onClick={() => signOut()}>
                Sign Out
            </button>
            ):(
                <button
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={() => signIn()}>
                Sign In
            </button>
            )}
        </div>
    );
};

export default Navbar;