import classNames from "classnames/bind";
import styles from "./AccounItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                alt="TruongNe"
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/bd7679403ed8e02a1a751de53eae496d~c5_100x100.jpeg?x-expires=1682604000&x-signature=NptU1k2YUUwsRw1Ep7VWC7WnEdQ%3D"
            ></img>
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Nguyen Van Truong</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx("username")}>@truongnvtb21</span>
            </div>
        </div>
    );
}

export default AccountItem;
