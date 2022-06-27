import React, { useEffect, useState } from 'react'
import styles from './AvailableMeals.module.scss'
import Card from '../UI/Card/Card'
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {

    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState()

    useEffect(() => {
        const fetchedMeal = async  () => {

            const response = await fetch('https://meals-project-f49bf-default-r.firebasedatabase.app/meals.json')
            const mealsData = await response.json()
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            const loadedData = []

            for (const key in mealsData) {
                loadedData.push({
                    id: key,
                    name: mealsData[key].name,
                    description: mealsData[key].description,
                    price: mealsData[key].price,
                })
            }
            setMeals(loadedData)
            setIsLoading(false)
        }

        fetchedMeal().catch(error => {
            setIsLoading(false)
            setIsError(error.message)
        })

    }, [])


    if(isLoading) {
        return <section className={styles.mealsLoading}>
            <p>Loading...</p>
        </section>
    }

    if (isError) {
        return <section className={styles.mealsError}>
            {isError}
        </section>
    }

    const mealsList = meals.map(meal => <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}/>)

    return <section className={styles.meals}>
        <Card>
            {mealsList}
        </Card>
    </section>

}

export default AvailableMeals