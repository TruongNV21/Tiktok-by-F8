import classNames from "classnames/bind";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";

import styles from "./Search.module.scss";
import { faXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "../../Popper";
import AccountItem from "~/components/AccountItem";
import { SearchIcon } from "~/components/Icons";
import { useDebounce } from "~/hooks";
import * as searchService from "~/apiServices/searchService";

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debounced = useDebounce(searchValue, 500);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(" ")) {
            setSearchValue(searchValue);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounced);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

    return (
        <div className={cx("search")}>
            <form className={cx("search-form")}>
                <div style={{ width: "100%", height: '100%', paddingRight: "40px"}}>
                    <HeadlessTippy
                        interactive={true}
                        visible={showResult && searchResult.length > 0}
                        placement="bottom-start"
                        onClickOutside={handleHideResult}
                        render={(attrs) => (
                            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx("search-heading")}>Account</h4>
                                    {searchResult.map((result) => {
                                        return <AccountItem key={result.id} data={result} />;
                                    })}
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <input
                            onFocus={() => setShowResult(true)}
                            ref={inputRef}
                            value={searchValue}
                            onChange={(e) => handleChange(e)}
                            className={cx("search-input")}
                            placeholder="Search"
                        />
                    </HeadlessTippy>
                </div>

                <div className={cx("search-actions")}>
                    {loading && (
                        <button className={cx("loading")}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    )}

                    {!!searchValue && !loading && (
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                inputRef.current.focus();
                                setSearchValue("");
                            }}
                            className={cx("reset")}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    )}
                </div>
                <span className={cx("separate")}></span>
                <button onClick={handleSubmit} className={cx("search-btn")}>
                    <SearchIcon />
                </button>
            </form>
        </div>
    );
}

export default Search;
