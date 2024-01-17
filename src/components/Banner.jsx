import bannerimg from "../assets/banner-img-5.jpg";
import Button from "./elements/Button";
export const Banner = () => {
    return(
        <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
            <div className="banner-description w-full md:w-1/2 p-3">
                <h2 className="mb-6 text-4xl font-bold text-white">
                    Coffee Ordering Made Easy
                </h2>
                <p className="font-semibold text-lg text-white py-2">
                   
                </p>
                <div className="btn-container">
                    <Button>Order Now</Button>
                    <a href="/menu" className="text-tomato hover:text-tomato font-bold text-decoration-line px-3">
                        See Menu
                    </a>
                </div>
            </div>
            <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
                <img src={bannerimg} alt="banner" className="max-h-95"></img>
            </div>
        </div>
    )
}