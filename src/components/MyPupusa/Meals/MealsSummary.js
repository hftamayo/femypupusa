import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return(
        <section className={classes.summary}>
            <h2>Delicious Salvadoran Pupusas, delivery right to your door</h2>
            <p>
                Choose your favorite combination from our broad selection 
                and enjoy a delicious traditional dish
            </p>
            <p>
                All meals are cooked with high-quality ingredients
            </p>
            </section>
    );
}

export default MealsSummary;