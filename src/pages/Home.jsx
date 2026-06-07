import { publicIpv4 } from 'public-ip';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TextEditor from "../components/editors/TextEditor";
import { useEffect, useState } from "react";
import { onboardingRoom } from "../api/room";

export default function Home() {
    const [text, setText] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const OnBoarding = async () => {
            try {
                const ipAddress = await publicIpv4()
                const response = await onboardingRoom(ipAddress);
                setText(response.data.data);
            } catch (err) {
                console.log(err);
                setError("Failed to Connect to server")
            } finally {
                setLoading(false);
            }
        };

        OnBoarding();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <span className="animate-pulse text-gray-500">Loading...</span>
            </div>
        );
    }

   
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="grow">
                <TextEditor textContent={text?.textContent?.content} roomId={text?.id} />
            </main>
            <Footer />
        </div>
    );
}