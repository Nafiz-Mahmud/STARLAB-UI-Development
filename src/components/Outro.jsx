import outroImg from "../assets/img_one.png"
export default function Outro() {
    return (
        <div class="hero  mt-[2rem] mt-[5rem] bg-green-900 text-white">
            <div class="flex flex-col-reverse lg:flex-row items-center py-[3rem] justify-between w-[90%] mx-auto">
                <div className="hero_info flex flex-col items-start justify-around">
                    <h1 class="mt-[1rem] text-[1.5rem] md:text-[2.8rem] font-bold">Mastering Proven Strategies That Drive Real Results!</h1>
                    <p class="font-bold  my-[2rem]">Unleash the power of strategic marketing with our comprehensive course, designed to empower you with the skills and knowledge necessary to navigate the dynamic landscape of modern business.</p>
                    <button class="px-[1rem] py-[.5rem] my-[1rem] rounded-full bg-green-600 text-white font-bold hover:animate-pulse hover:scale-105 duration-300">Enroll Now {`>`}</button>
                    <div class="flex items-center justify-center gap-[1.5rem]">
                        <span class="flex items-center gap-[.5rem]">
                            <svg style={{ color: "green" }} fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm113-303c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path></svg>
                            <p>Money back guarantee</p>
                        </span>
                        <span class="flex items-center gap-[.5rem]">
                            <svg style={{ color: "green" }} fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em" ><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm113-303c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path></svg>
                            <p>Scalable growth tools</p>
                        </span>
                    </div>
                    <span class="flex items-center gap-[.5rem] mt-[1rem]">
                        <svg style={{ color: "green" }} fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm113-303c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path></svg>
                        <p>Access to members-only community</p>
                    </span>

                </div>
                <div className="hero_img">
                    <img src={outroImg} alt="a book" />
                </div>
            </div>

        </div>
    )
}