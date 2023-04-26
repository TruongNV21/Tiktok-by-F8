import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    text = false,
    disable = false,
    outline = false,
    primary = false,
    small = false,
    large = false,
    onClick,
    className,
    leftIcon,
    rightIcon,
    rounded,
    ...passProps
}) {
    let Comp = "button";
    const classes = cx("wrapper",className, {
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded
        //Object literal
        // primary: primary,
        //outline: outline
        //Để chứa các props lúc có lúc không, có giá trị là boolean
    });
    const props = {
        onClick,
        ...passProps
    };
//Remove event listener when btn disabled
    if (disable) {
        Object.keys(props).forEach((key)=>{
            if(key.startsWith('on') && typeof props[key] ==='function'){
                delete props[key]
            }
        })
    }

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = "a";
        props.href = href;
    }
    
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
