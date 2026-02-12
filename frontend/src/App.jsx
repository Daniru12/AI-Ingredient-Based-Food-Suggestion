import { useState } from 'react'
import './App.css'
import MealPlanner from './components/MealPlanner'
import MealDisplay from './components/MealDisplay'
import { generateMealPlan } from './services/aiService'

function App() {
  const [mealPlan, setMealPlan] = useState(null)
  const [error, setError] = useState(null)

  const handleGeneratePlan = async (formData) => {
    try {
      setError(null)
      const plan = await generateMealPlan(formData)
      setMealPlan(plan)
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  const handleNewPlan = () => {
    setMealPlan(null)
    setError(null)
  }

  return (
    <div className="app">
      {!mealPlan ? (
        <MealPlanner onGeneratePlan={handleGeneratePlan} />
      ) : (
        <MealDisplay mealPlan={mealPlan} onNewPlan={handleNewPlan} />
      )}
      
      {error && (
        <div className="error-message">
          <p>⚠️ {error}</p>
        </div>
      )}
    </div>
  )
}

export default App
