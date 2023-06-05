import useSearchResult from "@/hooks/useSearchResult";
import ListVideoSlice from "@/redux/ListVideoSlice/ListVideoSlice";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, SuccessMessage } from "./AlertMessage";

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [showResult, setShowResult] = useState(false);

    const [message, setMessage] = useState(null);
    const [messageError, setMessageError] = useState({
        state: null,
        testId: false,
    });

    const listVideo = useSelector((state) => state.ListVideo.data);

    const { data } = useSearchResult({ search: searchValue });

    const inputRef = useRef();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const searchValue = e.target.value;
        setSearchValue(searchValue);

        if (searchValue.length === 0) {
            setShowResult(false);
        }
        if (searchValue.length > 0) {
            setShowResult(true);
        }
        if (!searchValue.startsWith(" ")) {
            setSearchValue(searchValue);
        }
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleItemSearch = (item) => {
        const testId = listVideo.some((elemet) => {
            return elemet.videoId === item.videoId;
        });
        if (testId) {
            setMessageError({ state: item.videoId, testId: testId });
            setTimeout(() => {
                setMessageError({ state: null, testId: testId });
            }, 1000);
            return;
        }
        dispatch(ListVideoSlice.actions.addVideo(item));

        setMessage(item.videoId);

        setTimeout(() => {
            setMessage(null);
        }, 1000);
    };

    return (
        <div>
            <HeadlessTippy
                interactive={true}
                visible={showResult && data.length > 0}
                placement={"bottom"}
                render={(attrs) => (
                    <div
                        tabIndex="-1"
                        {...attrs}
                        className="  flex flex-col mr-3  bg-gray-900 border-none rounded-md max-h-[calc((100vh-96px)-60px)] min-h-100 list-none pb-3 px-1 w-full z-15 overflow-y-scroll overflow-x-hidden"
                    >
                        {data?.map((item) => (
                            <div key={item.videoId}>
                                {messageError.testId && messageError.state === item.videoId && (
                                    <ErrorMessage message={"Video này đã được thêm...!"} />
                                )}
                                {message === item.videoId && (
                                    <SuccessMessage message={"Đã thêm vào danh sách phát...!"} />
                                )}

                                <div
                                    onClick={() => handleItemSearch(item)}
                                    className="h-auto w-[320px] text-white ml-2 text-opacity-60  hover:text-white mt-3   "
                                >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#ccc] mr-2" />
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className="max-w-sm px-3 pt-2 pb-2">
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <input
                            spellCheck={false}
                            value={searchValue}
                            onChange={handleChange}
                            ref={inputRef}
                            onFocus={() => setShowResult(true)}
                            type="text"
                            placeholder="Search"
                            className="w-full  py-2 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-[#ccc]"
                        />
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
