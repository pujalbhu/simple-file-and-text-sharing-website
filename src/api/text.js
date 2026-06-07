

import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const updateTextContent = async (roomId, content) => {
    return await axios.put(`${API}/text-content`, {
        roomId,
        content
    });
};