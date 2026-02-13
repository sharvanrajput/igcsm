import CountUp from "react-countup";
 

export default function StatSection() {
 
    const stats = [
        { value: 30, suffix: "+", label: "" },
        { value: 99, suffix: "%", label: "" },
        { value: 100, suffix: "+", label: "" },
        { value: 500, suffix: "+", label: "" },
    ];

    return (
        <div
        
            className="bg-blue-900 text-white py-10 md:py-14 px-4 sm:px-6"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">

                <div  >
                    <h2 className="text-3xl md:text-5xl font-bold mb-2">
                        <CountUp end={30} duration={2.5} suffix="+" />
                    </h2>
                    <p className="text-sm md:text-base opacity-80">
                        Years of Legacy
                    </p>
                </div>

                <div  >
                    <h2 className="text-3xl md:text-5xl font-bold mb-2">
                        <CountUp end={30} duration={2.5} suffix="+" />
                    </h2>
                    <p className="text-sm md:text-base opacity-80">
                        Placement Success
                    </p>
                </div>

                <div  >
                    <h2 className="text-3xl md:text-5xl font-bold mb-2">
                        <CountUp end={30} duration={2.5} suffix="+" />
                    </h2>
                    <p className="text-sm md:text-base opacity-80">
                        Centers Across India
                    </p>
                </div>

                <div  >
                    <h2 className="text-3xl md:text-5xl font-bold mb-2">
                        <CountUp end={30} duration={2.5} suffix="+" />
                    </h2>
                    <p className="text-sm md:text-base opacity-80">
                        Placement Partners
                    </p>
                </div>

            </div>
        </div>
    );
}