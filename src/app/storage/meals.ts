let AsyncStorage: any = null;
try {
    AsyncStorage = typeof window !== 'undefined' && window.localStorage ? {
        getItem: (key: string) => Promise.resolve(localStorage.getItem(key)),
        setItem: (key: string, value: string) => Promise.resolve(localStorage.setItem(key, value)),
        removeItem: (key: string) => Promise.resolve(localStorage.removeItem(key))
    } : null;
} catch (err) {
    console.warn('AsyncStorage not available');
}
export type Meal={
    id:string;
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    createdAt: string;
};
const MEAL_KEY='meals';
export const getMeals=async(): Promise<Meal[]>=>{
    try {
        const data = await AsyncStorage.getItem(MEAL_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error retrieving meals:', error);
        return [];
    }
};
export const addMeal= async( meal: Meal): Promise<Meal>=>{
    try {
        const meals = await getMeals(); 
        const newMeal:Meal={
            ...meal,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),    
        };
        await AsyncStorage.setItem(MEAL_KEY, JSON.stringify([...meals, newMeal]));
        return newMeal;
    } catch (error) {
        console.error('Error adding meal:', error);
        throw error;
    }
};