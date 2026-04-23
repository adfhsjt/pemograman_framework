import TampilanHeroProduk from "./hero";
import TampilanMainProduk from "./main";

const TampilanProduk = ({ productId }: { productId?: string | string[] }) => {
    return(
        <div>
            <TampilanHeroProduk />
            <hr />
            <TampilanMainProduk productId={productId} />
        </div>
    );
};

export default TampilanProduk;
