import { useState } from 'react';
import './MealPlanner.css';

function MealPlanner({ onGeneratePlan }) {
  const [formData, setFormData] = useState({
    goal: 'Lose weight',
    preference: 'Veg',
    meals: 3,
    ingredients: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'meals' ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await onGeneratePlan(formData);
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="meal-planner">
      <h1>🍽️ AI Meal Planner</h1>
      <p className="subtitle">Get personalized meal plans powered by Cohere AI</p>
      
      <form onSubmit={handleSubmit} className="planner-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="goal">Goal</label>
            <select
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
            >
              <option value="Lose weight">Lose Weight</option>
              <option value="Gain weight">Gain Weight</option>
              <option value="Maintain weight">Maintain Weight</option>
              <option value="Build muscle">Build Muscle</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="preference">Dietary Preference</label>
            <select
              id="preference"
              name="preference"
              value={formData.preference}
              onChange={handleChange}
            >
              <option value="Veg">Vegetarian</option>
              <option value="Non-Veg">Non-Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Keto">Keto</option>
              <option value="Paleo">Paleo</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="meals">Number of Meals</label>
            <select
              id="meals"
              name="meals"
              value={formData.meals}
              onChange={handleChange}
            >
              <option value="3">3 Meals</option>
              <option value="4">4 Meals</option>
              <option value="5">5 Meals</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="ingredients">Available Ingredients (Optional)</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            placeholder="e.g., chicken, rice, tomatoes, spinach..."
            rows="3"
          />
        </div>

        <button type="submit" className="generate-btn" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner"></span>
              Generating Your Meal Plan...
            </>
          ) : (
            '✨ Generate Meal Plan'
          )}
        </button>
      </form>
    </div>
  );
}

export default MealPlanner;
