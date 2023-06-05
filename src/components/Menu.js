import { useRouter } from "next/router";
import { Fragment } from "react";

function Menu() {
    const router = useRouter();
    const menu = [
        { name: "Video", link: "/" },
        { name: "Comment", link: `/commentPage` },
        { name: "List", link: "/listVideoPage" },
    ];
    const handleQueryString = (link) => {
        if (link === "/") {
            router.push("/");
        } else {
            router.push({ pathname: link });
        }
    };
    const route = router.pathname.replace(/\/\[\w+\]/, "");
    return (
        <div className="flex items-center justify-center">
            <div className="w-[343px] h-[36px] bg-background mt-[28px] rounded-[16px] p-[2px] text-textDate  text-[12px] leading-4 flex flex-row items-center">
                {menu.map((item) => (
                    <Fragment key={item.name}>
                        <div
                            onClick={() => handleQueryString(item.link)}
                            className={`w-[113px] h-[32px] flex items-center justify-center ${
                                route === item.link
                                    ? "text-secondary bg-white border border-gray-100 rounded-[16px] font-[700] transition-all duration-400 ease-in-out"
                                    : "transition-all duration-400 ease-in-out"
                            } `}
                        >
                            {item.name}
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default Menu;
