import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const fileGet = async (roomId) => {
  return await axios.get(`${API}/file/${roomId}`);
};

export const fileUpload = async (roomId, file) => {
  const formData = new FormData();
  formData.append("roomId", roomId);
  formData.append("file", file);

  return await axios.post(`${API}/file/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const fileDelete = async (roomId ,fileId) =>{
  return await axios.delete(`${API}/file/${roomId}/${fileId}`)
}