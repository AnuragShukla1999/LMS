import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from '../assets/Images/aboutMainImage.png';
import apj from '../assets/Images/apj.png';
import einstein from '../assets/Images/einstein.png';
import nelsonMandela from '../assets/Images/nelsonMandela.png';
import steveJobs from '../assets/Images/steveJobs.png';
import billGates from '../assets/Images/billGates.png';
import CarouselSlide from '../Components/CarouselSlide.jsx'


function AboutUs() {



    const celebrities = [
        {
            title: "Nelson Mandela",
            description: "Education is the most powerful tool you can use to change the world.",
            image: nelsonMandela,
            slideNumber: 1
        },
        {
            title: "APJ Abdul Kalam",
            description: "Teaching is a very noble profession that shapes the character, caliber, and future of an individual.",
            image: apj,
            slideNumber: 2
        },
        {
            title: "Albert Einstein",
            description: "Education is the most powerful tool you can use to change the world.",
            image: einstein,
            slideNumber: 3
        },
        {
            title: "Steve Jobs",
            description: "We dont get a chance to do that many things, and every one should be really excellent.",
            image: steveJobs,
            slideNumber: 4
        },
        {
            title: "Bill Gates",
            description: "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
            image: billGates,
            slideNumber: 5
        },
    ]



    return (
     
        <HomeLayout>
            <div className="flex flex-col text-white pl-20 pt-20">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provide the affordable and quality education to the world.
                            We are providing the platform for the aspiring teachers and students to share
                            their skills, creativity and knowledge to each other to empower and contribute
                            in the growth and wellness of mankind.
                        </p>
                    </section>
                    <div className="w-1/2">
                        <img
                            src={aboutMainImage}
                            className='drop-shadow-2xl'
                            alt="about main page"
                        />
                    </div>
                </div>
                <div className="carousel w-1/2 my-10 mx-auto">
                    {/* {celebrities && celebrities.map(celebrity => (<CarouselSlide (...celebrity) key={celebrity.slideNumber} totalSlides={celebrity.length} />))} */}
                </div>
            </div>
        </HomeLayout>
    )
}

export default AboutUs;