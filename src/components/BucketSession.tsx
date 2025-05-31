import { useBucketsData } from "@/hooks/useBucketsData";
import { useNavigate } from "react-router-dom";

export const BucketSession = () => {
  const { buckets } = useBucketsData();
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center">
        <h1>Buckets Encontrados</h1>
      <div className="flex flex-wrap gap-4 mt-10">
        {buckets.map((bucket, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border rounded-lg bg-white shadow cursor-pointer hover:bg-gray-300 transition duration-300 ease-in-out"
            onClick={() => navigate(`/bucket/${bucket.Name}`)}
          >
            <img src="/amazon-s3.png" alt="bucket" className="w-20 h-20 mb-2" />
            <p className="font-semibold text-black">{bucket.Name}</p>
            <p className="text-sm text-gray-600">
              Created at: {bucket.CreationDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
