import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Layout/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { Fragment, useState } from "react";

const cx = classNames.bind(styles);

const defaultFn = ()=>{}

function Menu({ children, hideOnClick = false, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            setHistory((pre) => [...pre, item.children]);
                        }
                        else {
                            onChange(item)
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            delay={[100, 700]}
            placement="bottom-end"
            hideOnClick = {hideOnClick}
            onHide={()=>{
                setHistory(pre =>{
                    return pre.slice(0,1)
                })
            }}
            render={(attrs) => (
                <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx("menu-wrapper")}>
                        {history.length > 1 && (
                            <>
                                <Header
                                    title="Language "
                                    onBack={() => {
                                        setHistory((pre) => pre.slice(0, history.length - 1));
                                    }}
                                ></Header>
                            </>
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
