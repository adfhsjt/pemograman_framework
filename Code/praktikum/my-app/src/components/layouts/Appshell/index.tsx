import { useRouter } from "next/router";
import Navbar from "../navbar";

const disableNavbar = ['/auth/login', '/auth/register', '/404'];

type AppShellProps = {
    children: React.ReactNode;
}

const AppShell = (props:AppShellProps) => {
    const {children} = props;
    const {pathname} = useRouter();
    // Insight: Gunakan router.pathname jika ada query parameter untuk memastikan path yang tepat
    // const router = useRouter();
    // console.log(router);
    return (
        <main>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
        </main>
    );
};

export default AppShell;