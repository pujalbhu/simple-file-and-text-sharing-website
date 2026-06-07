


import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const onboardingRoom = async (ipAddress) => {
    return await axios.post(`${API}/room/onboarding`, { ipAddress });
};