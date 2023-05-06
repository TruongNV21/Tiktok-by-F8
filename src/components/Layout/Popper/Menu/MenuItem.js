import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }){
    const classes =  cx('menu-item',{
        separate: data.separate
    })
    return (
        <Button onClick={onClick}  className = {classes} to={data.to} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
