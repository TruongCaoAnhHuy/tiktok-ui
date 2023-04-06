import classNames from "classnames/bind";
import styles from './AccoutItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/167110746bce95a543d2175279c1acbe~c5_100x100.jpeg?x-expires=1680883200&x-signature=H5W2idBbNZqy%2BYxNz71jijH0fLI%3D"
                alt="DJ Mie"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>djmievn</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <p className={cx('username')}>Dj Mie</p>
            </div>
        </div>
    );
}

export default AccountItem;