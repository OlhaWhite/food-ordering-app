import aboutImg from "../assets/banner-img.jpg"

export const About = () => {
    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="flex items-center justify-center">
                    <img src={aboutImg} alt="aboutImg" className="w-[400px] h-[400px] object-cover"></img>
                </div>
                <div className="">
<h2 className="text-2xl font-medium">About Us</h2>
<p className="text-lg">
Don’t let the name fool you, the Coffee Bar in Lawrence serves more than just coffee. A beautiful and spacious restaurant with an intimate atmosphere, The Coffee Bar is famous for its high quality ingredients and excellent service. This gem in Long Island has become distinguished as the place for great tasting food and decadent desserts that will be sure to satisfy every palate. An emphasis on excellence is instilled by owner Edward Davidov who has always had a strong love and passion for food and hospitality.
</p>
<p className="text-lg">
His true love and aspiration was to open up a kosher dairy restaurant that everyone will enjoy. Edward who is constantly going in and out of the kitchen making sure everything is perfect and up to their standards, is also on the floor welcoming guests.  All of our dishes are made from scratch daily and our portions are generous.
</p>
<p className="text-lg">
Our creative chefs pay attention to the savory and visual details making each dish delicious and tantalizing. We also extend our dinning are to the outside with our cozy outdoor seating. It is that dedication and care that leads the Coffee Bar, wether in the morning, afternoon, or evening to be the center of attraction.
</p>
                </div>
                
            </div>
        </div>
    )
}