export default function Pricing() {
    return (
        <div className="pricing mt-[5rem] w-[90%] mx-auto">
            <div class="flex gap-[1rem]">
                <div className="pricing_border border-green-500 border-l-[.5rem]"></div>
                <p class="text-green-500 font-bold">PRICING</p>
            </div>
            <h1 class="my-[2rem] font-bold text-[2rem]">Choose the pricing that works best for you</h1>
            <div className="pricing_info flex gap-[2rem] items-start justify-between">
                <div className="pricing_monthly_info p-[2rem] bg-gray-100 rounded-md shadow-xl">
                    <h1 class="text-[1.5rem] font-bold">Monthly Subscription</h1>
                    <p class="my-[1rem] font-semibold">Fuel your product workflow with more advanced research features.</p>
                    <span class="flex items-end">
                        <h1 class="font-bold text-[2rem]">$49</h1><p class="font-semibold">/Month</p>
                    </span>
                    <button class="font-semibold bg-green-500 text-white px-[1rem] py-[.5rem] rounded-full mt-[1rem]">Enroll Now {">"}</button>
                    <div class="flex flex-col mt-[1rem] gap-[.5rem] font-semibold">
                        <div class="flex items-center gap-[.5rem]">
                            <svg class="text-green-500" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em" ><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm113-303c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path></svg>
                            <p>Money Back Guarantee</p>
                        </div>
                        <div class="flex items-center gap-[.5rem]">
                            <svg class="text-green-500" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em" ><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm113-303c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path></svg>
                            <p>Satisfaction Guaranteed</p>
                        </div>
                        <div class="flex items-center gap-[.5rem]">
                            <svg class="text-green-500" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em" ><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm113-303c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path></svg>
                            <p>Or Get Your Money Back Within 30 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pricing_one_time_info p-[2rem] bg-gray-100 rounded-md shadow-xl relative">
                    <svg class="text-yellow-400 text-[3rem] absolute top-[-6%] right-[-4.5%]" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="1em" width="1em" ><path d="m908.1 353.1-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                    <h1 class="text-[1.5rem] font-bold">One-Time Payment</h1>
                    <p class="my-[1rem] font-semibold">Scale product research and learning across your company</p>
                    <span class="flex items-end">
                        <h1 class="font-bold text-[2rem]">$299</h1>
                        <p class="text-green-500 ml-[.5rem] font-semibold">(Save 20%)</p>
                    </span>
                    <button class="font-semibold bg-green-500 text-white px-[1rem] py-[.5rem] rounded-full mt-[1rem]">Enroll Now {">"}</button>
                    <div class="flex flex-col mt-[1rem] gap-[.5rem] font-semibold">
                        <div class="flex items-center gap-[.5rem]">
                            <svg class="text-green-500" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em" ><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm113-303c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path></svg>
                            <h1>Everything in Basic, and</h1>
                        </div>
                        <div class="flex items-center gap-[.5rem]">
                            <svg class="text-green-500" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em" ><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm113-303c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path></svg>
                            <p>Scalable Growth Tools</p>
                        </div>
                        <div class="flex items-center gap-[.5rem]">
                            <svg class="text-green-500" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1em" width="1em" ><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm113-303c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path></svg>
                            <p>Access To Members-only Community</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}