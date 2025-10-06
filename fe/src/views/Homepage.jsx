import { Link } from "wouter";


const Homepage = () => {
    return (
        <div className="min-h-screen bg-[#705D56]">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#fff] mb-4">
                        Welcome to the CLOSEIN
                    </h1>
                    <div className="flex-1 flex justify-center pr-20 items-center space-x-4">
                        <>
                            <Link href="/login">
                                <button className="px-6 py-2 bg-white text-[#D2B48C] rounded-full font-semibold border-2 border-white
                                             hover:bg-white/90 transition-all duration-300 transform hover:scale-105
                                             shadow-lg hover:shadow-xl cursor-pointer">
                                    Login
                                </button>
                            </Link>
                            <Link href="/register">
                                <button className="px-6 py-2 bg-[#FFF8DC] text-[#D2B48C] rounded-full font-semibold border-2 border-white
                                             hover:bg-[#FFF8DC]/90 transition-all duration-300 transform hover:scale-105
                                             shadow-lg hover:shadow-xl cursor-pointer">
                                    Register
                                </button>
                            </Link>
                        </>
                        {/* )} */}
                    </div>
                    <div className="max-w-2xl mx-auto">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;