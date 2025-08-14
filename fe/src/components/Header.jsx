import { Link } from "wouter";

const Header = () => {


    return (
        <header className="sticky opacity-80 top-0 z-10 bg-[#503B31] text-white text-hero font-geo shadow-xl lg:h-[100px] md:h-[100px]">
            <nav className="p-4 h-full flex items-center justify-between lg:justify-evenly">
                <div className="flex-1 flex justify-end pr-20 items-center space-x-4">
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
            </nav>
        </header>
    );
};
export default Header;