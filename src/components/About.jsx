import second_img from "../assets/img_two.jpg"
export default function About() {
    return <div className="about flex items-center mt-[4rem] mt-[6rem] w-[90%] mx-auto">
        <div className="about_img ">
            <img src={second_img} alt="second image" />
        </div>
        <div className="about_info flex flex-col items-start justify-between gap-[2rem]">
            <div className="about_title flex ">
                <div class="about_title_border border-green-500 border-l-[.5rem] mr-[1rem] "></div>
                <p class="text-green-500 font-semibold">ABOUT THE COURSE</p>
            </div>
            <h1 class="text-[2.2rem] font-bold">Journey into Marketing Mastery: Unveiling The Marketing Toolkit</h1>
            <p class="font-semibold">Welcome to The Marketing Toolkit, your comprehensive guide to mastering modern marketing strategies.</p>
            <button class="px-[1rem] py-[.5rem] my-[1rem] rounded-full bg-green-600 text-white font-bold hover:animate-pulse hover:scale-105 duration-300">Enroll Now {">"}</button>


            <div className="about_cards flex items-center justify-between gap-[1rem]">
                <div className="card">
                    <h1 class="font-bold text-[1rem]">Premium Resources</h1>
                    <p class="my-[1rem]">Gain exclusive access to a treasure of premium resources handpicked by industry experts.</p>
                    <button class="text-green-500 underline font-semibold">Download Resources</button>
                </div>
                <div className="card">
                    <h1 class="font-bold text-[1rem]">Training Materials Included</h1>
                    <p class="my-[1rem]">Enjoy comprehensive learing with all inclusive training materials provided.</p>
                    <button class="text-green-500 underline font-semibold">Download Materials</button>
                </div>
            </div>


        </div>
    </div>
}