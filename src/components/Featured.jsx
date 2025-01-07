export default function Featured() {
    const brands = ["Zapier", "Ebay", "Okra", "Stripe", "Google", "DocuSign"]
    return (
        <div className="featured bg-green-600 p-[4rem]">
            <h1 class="text-center text-white text-[1.5rem] font-bold">Featured In:</h1>
            <div className="brands flex items-center justify-around mt-[3rem]">
                {
                    brands.map((brand, index) => {
                        return (
                            <h1 className="brand text-white font-bold text-[2rem]" key={index}>{brand}</h1>
                        )
                    })
                }
            </div>
        </div>
    )
}