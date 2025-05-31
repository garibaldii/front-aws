import type { IBucketContent } from "@/interface/IBucketContent";
import {
  getBucketContentByName,
  postBucketContent,
} from "@/services/buckets/bucketService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import BucketContentDatatable from "./ui/datatable/bucket-content-datatable";
import { Button } from "./ui/button";
import { Upload } from "lucide-react";
import { Input } from "./ui/input";

export const BucketDetail = () => {
  const { name } = useParams<{ name: string }>();

  const [contents, setContents] = useState<IBucketContent[]>(
    [] as IBucketContent[]
  );
  const [file, setFile] = useState<File>();

  const fetchBucketData = async () => {
    try {
      if (name) {
        const data = await getBucketContentByName(name);
        console.log(data);
        setContents(data);
      }
    } catch (error) {
      console.error(error);
      toast(`Erro ao buscar os dados do bucket: ${name}`);
    }
  };

  const handleSubmit = async () => {
    try {
      if (name && file) 
        await postBucketContent(name, file);
        toast.success("Arquivo enviado com sucesso!")
    } catch (error) {
      console.error(error);
      toast("Erro ao enviar o arquivo");
    }
  };

  useEffect(() => {
    fetchBucketData();
    console.log(contents);
  }, [contents]);

  return (
    <div>
      <h1>Dados do Bucket {name}</h1>

      <div>
        <BucketContentDatatable
          contents={contents}
          refreshContents={function (): void {
            throw new Error("Function not implemented.");
          }}
        />

        <div className="flex items-center p-1 border-1 rounded-lg bg-gray-200 text-black">
          <Input
            type="file"
            className="border-0 cursor-pointer  hover:bg-gray-400 transition duration-200 ease-in-out"
            onChange={(e) => {
              const selectedFile = e.target.files?.[0];
              if (selectedFile) setFile(selectedFile);
            }}
            required
          />
          <Button variant={"secondary"} onClick={handleSubmit}>
            <Upload className="mr-3" />
            Subir Arquivo
          </Button>
        </div>
      </div>
    </div>
  );
};
