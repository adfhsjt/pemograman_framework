import { useRouter } from "next/router";

const halamanCategory = () => {
    // const router = useRouter();
    // console.log(router);
    const { query } = useRouter();
    return (
        <div>
            <h1>Halaman Category</h1>
            <ol>
                Category:
                {Array.isArray(query.slug) ? (query.slug.map((item, index) => (<li>{index + 1}. {item}</li>))) : (<li>{query.slug}</li>)}
            </ol>
        </div>
    );
};

export default halamanCategory;