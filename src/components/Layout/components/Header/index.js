import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faGear,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import images from "~/assets/images";
import Button from "~/components/Button";
import Menu from "../../Popper/Menu";
import { InboxIcon, UploadIcon } from "~/components/Icons/Icons";
import Image from "~/components/Image";
import Search from "../Search";
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const MENU_LIST = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                
                {
                    type: "language",
                    code: "em",
                    title: "English",
                },
                {
                    type: "language",

                    code: "vi",
                    title: "VietNamese",
                }
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Help",
        to: "/upload",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
];

function Header() {
    const currentUser = true;

    function handleMenuChange(menuItem) {
        // console.log(menuItem);
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View Profile",
            to: "/profile",
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Settings",
            to: "/settings",
        },
        ...MENU_LIST,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: "Log out",
            to: "/profile",
            separate: true,
        },
    ];

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <Link to={routesConfig.home} className={cx("logo-link")}>
                        <img className={cx("logo-img")} alt="Tiktok" src={images.logo}></img>
                    </Link>
                </div>

                <Search />

                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy placement="bottom" content="Message" delay={[100, 300]}>
                                <button className={cx("action-btn")}>
                                    <UploadIcon className={cx("icon")} />
                                </button>
                            </Tippy>

                            <Tippy placement="bottom" content="Notice" delay={[100, 300]}>
                                <button className={cx("action-btn")}>
                                    <InboxIcon className={cx("icon")} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button leftIcon={<UploadIcon />}>Upload</Button>
                            <Button primary>Log In</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_LIST} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/bd7679403ed8e02a1a751de53eae496d~c5_100x100.jpeg?x-expires=1683295200&x-signature=OmMvgPI9kuMr4x1LwxtbSa4kXfA%3D"
                                className={cx("user-avatar")}
                                alt="Nguyen Van Truong"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
