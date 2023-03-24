import { useRouter } from "next/router";
import { Fragment } from "react";
import base64url from "base64url";

function Menu({ id }) {
    const router = useRouter();
    const menu = [
        { name: "プロフィール", link: "/" },
        { name: "感謝の声", link: `/page1` },
        { name: "タイムライン", link: "/page2" },
    ];
    // const queryString = JSON.stringify(id);
    const handleQueryString = (link) => {
        const queryString = base64url(JSON.stringify(id));
        if (link === "/") {
            router.push("/");
        } else {
            router.push({ pathname: `${link}/${queryString} ` });
        }
    };
    const route = router.pathname.replace(/\/\[\w+\]/, "");
    return (
        <div className="flex items-center justify-center">
            <div className="w-[343px] h-[36px] bg-background mt-[38px] rounded-[16px] p-[2px] text-textDate  text-[12px] leading-4 flex flex-row items-center">
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
