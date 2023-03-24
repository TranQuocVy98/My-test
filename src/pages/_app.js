import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="h-screen overflow-y-scroll">
                <div className="w-[375px] border-l-[1px] border-r-[1px] border-gray-300 font-hiragino pb-8">
                    <QueryClientProvider client={queryClient}>
                        <Component {...pageProps} />
                    </QueryClientProvider>
                </div>
            </div>
        </div>
    );
}
