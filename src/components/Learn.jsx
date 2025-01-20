import third_img from "../assets/img_three.jpg"
export default function Learn() {
    const learnSkills = ["Develop a comprehensive marketing strategy", "Utilize various digital marketing channels effectively", "Analyze and interpret marketing data for informed decisions", "Optimize campaigns for maximum impact", "Implement advanced marketing tactics to stay ahead"]
    return (
        <div className="learn flex flex-col-reverse xl:flex-row items-center justify-between gap-[2rem] w-[90%] mx-auto mt-[5rem]">
            <div className="learn_info">
                <div class="flex gap-[1rem]">
                    <div className="learn_border border-green-500 border-l-[.5rem]"></div>
                    <p class="text-green-500 font-bold">WHAT YOU WILL LEARN</p>
                </div>
                <h1 class="mt-[1.5rem] text-[1rem] md:text-[1.5rem] xl:text-[2.2rem] 2xl:text-[2.5rem] font-bold">Empower Your Skills: Unveiling the Proficiencies You Will Master</h1>
                <p class="text-gray-600 xl:text-[1.2rem] font-semibold mt-[1.5rem] mb-[.75rem]">By the end of this course, you wil be able to:</p>
                <div className="learn_skills flex flex-col gap-[.5rem]">
                    {
                        learnSkills.map((skill, index) => {
                            return (
                                <div class="skill flex items-center gap-[.5rem]" key={index}>
                                    <svg class="text-green-500" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em" ><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm113-303c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path></svg>
                                    <p className="skill font-bold xl:text-[1.2rem]" key={index}>{skill}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className="learn_img">
                <img src={third_img} alt="third image" />

            </div>
        </div>
    )
}