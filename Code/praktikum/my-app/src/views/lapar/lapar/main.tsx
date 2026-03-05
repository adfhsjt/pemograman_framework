const TampilanMainLapar = ({ laparId }: { laparId?: string | string[] }) => {
    return (
        <main className="flex justify-center items-center py-10">
            {laparId ? (
                <p className="text-lg font-medium bg-white px-6 py-3 rounded-lg shadow">
                    Lapar: {laparId}
                </p>
            ) : (
                <div className="flex flex-col items-center gap-4">
                    <img src="/shopping.svg" alt="shopping" className="w-80" />
                    <p className="text-lg text-gray-500">
                        Pilih lapar.   
                    </p>
                </div>
            )}
        </main>
    );
};
export default TampilanMainLapar;