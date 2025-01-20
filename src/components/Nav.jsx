import { createSignal } from "solid-js";

export default function Navbar() {
    const [topNavOpen, setTopNavOpen] = createSignal(true);
    const [openSideBar, setOpenSideBar] = createSignal(false)
    return (
        <nav>
            {/* <div className="h-[1rem] w-[100%] bg-red-400 sm:bg-yellow-400 md:bg-green-400 lg:bg-blue-400 xl:bg-black 2xl:bg-purple-400"></div> */}
            {
                topNavOpen() &&
                <span class="top_bar bg-green-800 text-white font-bold flex items-center py-[.25rem] px-[2rem]">
                    <p style={{ flex: 1 }} class="text-center text-[1.5vw]">Open your account to get a discount of 10%. <button class="center underline">Learn More</button></p>
                    <button class="text-[1.5vw]" onclick={() => setTopNavOpen(!topNavOpen)} >x</button>
                </span>
            }
            <div className="main_nav  my-[1rem] flex items-center justify-between px-[1rem] py-[.5rem] rounded-lg w-[96%] mx-auto">
                <div className="burger md:hidden">
                    <svg style={{ transform: openSideBar() ? "rotate(90deg)" : "", transition: "all .3s ease" }} onclick={() => setOpenSideBar(!openSideBar())} fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="1em" width="1em"><path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path></svg>
                </div>
                {
                    openSideBar() &&
                    <div style={{ "background-color": " rgba(0, 0, 0, 0.05)", "backdrop-filter": "blur(.5rem)" }} class="absolute top-0 left-0 w-[100%] h-[100%]">
                        <div style={{ "background-color": " rgba(211, 211, 211, 0.8)" }} className="sidebar w-[40vw] h-[100vw] p-[2rem] absolute top-0 left-0">
                            <div class="flex justify-end">
                                <button onclick={() => setOpenSideBar(!openSideBar())}>X</button>
                            </div>
                            <div className="sidebar_links mt-[1rem] md:hidden">
                                <ul class="flex flex-col items-center w-[100%] gap-[3rem] lg:gap-[5rem] font-bold text-[1.2vw]">
                                    <li>Service</li>
                                    <li>Why Us</li>
                                    <li>Testimonial</li>
                                    <li>FAQ</li>
                                    <li>About</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }

                <h1 className="title text-[3vw] font-bold">STARLAB</h1>
                <div className="links hidden md:flex">
                    <ul class="flex gap-[3rem] lg:gap-[5rem] font-bold text-[1.2vw]">
                        <li>Service</li>
                        <li>Why Us</li>
                        <li>Testimonial</li>
                        <li>FAQ</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="buttons flex gap-[1rem]">
                    <button class="bg-blue-600 md:text-[1.5vw] text-white rounded-3xl py-[.25rem] px-[.5rem] md:py-[.5rem] md:px-[1rem] font-bold">Login</button>
                    <button class="bg-green-600 md:text-[1.5vw] text-white rounded-3xl py-[.25rem] px-[.5rem] md:py-[.5rem] md:px-[1rem] font-bold">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}