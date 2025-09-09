import { useState } from "react";
import service from "../appwrite/config";

export function useImageUpload() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadAndFetch = async (file) => {
    setLoading(true);
    setError(null);
    try {
      const uploaded = await service.uploadFile(file);
      if (uploaded && uploaded.$id) {
        const url = service.getFilePreview(uploaded.$id);
        setImageUrl(url.href || url); // url.href for Appwrite SDK v11+, else url
      } else {
        setError("Upload failed");
      }
    } catch (error) {
      setError("Upload error",error);
    }
    setLoading(false);
  };

  return { imageUrl, uploadAndFetch, loading, error };
}
