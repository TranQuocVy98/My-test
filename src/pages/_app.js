import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
    return (
        <div className="w-full flex items-center justify-center bg-[#1E1F29]">
            <div className="h-screen overflow-y-scroll bg-white">
                <div className="w-[375px] border-l-[1px] border-r-[1px] border-gray-400 font-hiragino pb-8 ">
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                </div>
            </div>
        </div>
    );
}
