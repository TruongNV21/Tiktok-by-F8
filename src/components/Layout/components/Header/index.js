import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faXmark,
    faSpinner,
    faPlus,
    faUpload,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from "@fortawesome/free-solid-svg-icons";
import Tippy, { useSingleton } from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "../../Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "../../Popper/Menu";

const cx = classNames.bind(styles);

const MENU_LIST = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
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
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <a className={cx("logoLink")} href="https://www.tiktok.com/@truongnvtb21">
                        <img alt="Tiktok" src={images.logo}></img>
                    </a>
                </div>
                <div className={cx("search")}>
                    <form className={cx("search-form")}>
                        <Tippy
                            interactive={true}
                            visible={searchResult.length > 0}
                            placement="bottom-start"
                            render={(attrs) => (
                                <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <h4 className={cx("search-heading")}>Account</h4>
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <input className={cx("search-input")} placeholder="Search" />
                        </Tippy>
                        <div className={cx("search-actions")}>
                            <button className={cx("loading")}>
                                <FontAwesomeIcon icon={faSpinner} />
                            </button>
                            <button className={cx("reset")}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <span className={cx("separate")}></span>
                        <button className={cx("search-btn")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </form>
                </div>
                <div className={cx("actions")}>
                    <Button leftIcon={<FontAwesomeIcon icon={faUpload} />}>Upload</Button>
                    <Button primary>Log In</Button>

                    <Menu items={MENU_LIST}>
                        <button className={cx("more-btn")}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
