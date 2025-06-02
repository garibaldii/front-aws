import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate()


    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-orange-500 " style={{ WebkitTextStroke: "1px white" }}
                >Welcome!</h1>
                <img src="/aws.png" alt="bucket" className="rounded-full w-24" />
            </div>
            <p className="font-semibold text-lg">Choose an option to interact with AWS's virtual machines ☁️☁️</p>
            <div className="flex grid-4 flex-wrap gap-4 mt-10 text-black">
                <div className="flex flex-col items-center p-4  rounded-lg bg-white shadow cursor-pointer hover:bg-gray-300 transition duration-300 ease-in-out"
                    onClick={() => navigate("/users")}
                >
                    <img src="/ec2 api mongo.png" alt="bucket" className="rounded-lg" />
                    <p className="font-semibold text-lg p-3"> ec2-api and ec2-mongodb</p>
                </div>

                <div className="flex flex-col items-center p-4  rounded-lg bg-white shadow cursor-pointer hover:bg-gray-300 transition duration-300 ease-in-out"
                    onClick={() => navigate("/buckets")}
                >
                    <img src="/bucket api.png" alt="bucket" className="rounded-lg" />

                    <p className="font-semibold p-3 text-lg"> ec2-api and aws-bucket</p>
                </div>
            </div>
        </div>
    )
}