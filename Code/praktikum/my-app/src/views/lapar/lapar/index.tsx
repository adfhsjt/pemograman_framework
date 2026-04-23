import TampilanHeroLapar from "./hero";
import TampilanMainLapar from "./main";

const TampilanLapar = ({ laparId }: { laparId?: string | string[] }) => {
    return(
        <div>
            <TampilanHeroLapar />
            <hr />
            <TampilanMainLapar laparId={laparId} />
        </div>
    );
};

export default TampilanLapar;
