import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {


    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span ClassName={classes.icon}>
            </span>
            <span>Your Shopping</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}

export default HeaderCartButton;