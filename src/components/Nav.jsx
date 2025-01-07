import { createSignal } from "solid-js";

export default function Navbar() {
    const [topNavOpen, setTopNavOpen] = createSignal(true);
    return (
        <nav>
            {
                topNavOpen() &&
                <span class="top_bar bg-green-800 text-white font-bold flex items-center py-[.25rem] px-[2rem]">
                    <p style={{ flex: 1 }} class="text-center">Open your account to get a discount of 10%. <button class="center underline">Learn More</button></p>
                    <button onclick={() => setTopNavOpen(!topNavOpen)} >x</button>
                </span>
            }
            <div className="main_nav my-[1rem] flex items-center justify-between px-[1rem] py-[.5rem] rounded-lg w-[96%] mx-auto">
                <h1 className="title text-[2.5rem] font-bold">STARLAB</h1>
                <div className="links">
                    <ul class="flex gap-[2.5rem] font-bold">
                        <li>Service</li>
                        <li>Why Us</li>
                        <li>Testimonial</li>
                        <li>FAQ</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="buttons flex gap-[1rem]">
                    <button class="bg-blue-600 text-white rounded-3xl py-[.5rem] px-[1rem] font-bold">Login</button>
                    <button class="bg-green-600 text-white rounded-3xl py-[.5rem] px-[1rem] font-bold">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}