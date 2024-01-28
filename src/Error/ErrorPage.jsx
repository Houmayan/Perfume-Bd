
import { TbError404Off } from "react-icons/tb";
const ErrorPage = () => {

    return (
        <main>
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
            <div className="max-w-lg mx-auto text-gray-600">
                <div className="space-y-3 flex items-center flex-col text-center">
                    <TbError404Off className=" hover:-rotate-[360deg] hover:duration-1000 hover:ease-linear ease-out text-red-700 duration-1000 rotate-[360deg]" size={150}></TbError404Off>
                    <h3 className="text-indigo-600 font-semibold">
                        404 Error
                    </h3>
                    <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                        Page not found
                    </p>
                    <p>
                    <h1>Perfume-BD are Sorry to say that the link you have enterd is currently not available.</h1>

                    </p>
                    {/* <button className="hover:bg-red-700 transition duration-150 ease-out hover:ease-in">fjg</button> */}
                </div>
                
            </div>
        </div>
    </main>
    );
};

export default ErrorPage;