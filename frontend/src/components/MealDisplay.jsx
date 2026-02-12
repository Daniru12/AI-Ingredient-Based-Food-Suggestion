import './MealDisplay.css';

function MealDisplay({ mealPlan, onNewPlan }) {
  // Parse the meal plan text to identify different meals
  const parseMealPlan = (text) => {
    const meals = [];
    const mealSections = text.split(/(?=Breakfast:|Lunch:|Dinner:|Snack \d+:)/);
    
    mealSections.forEach(section => {
      if (section.trim()) {
        meals.push(section.trim());
      }
    });
    
    return meals;
  };

  const meals = parseMealPlan(mealPlan);

  return (
    <div className="meal-display">
      <div className="meal-display-header">
        <h2>🎉 Your Personalized Meal Plan</h2>
        <button onClick={onNewPlan} className="new-plan-btn">
          + Create New Plan
        </button>
      </div>

      <div className="meal-plan-content">
        {meals.map((meal, index) => (
          <div key={index} className="meal-card">
            <div className="meal-content">
              {meal.split('\n').map((line, lineIndex) => {
                if (line.match(/^(Breakfast|Lunch|Dinner|Snack \d+):/)) {
                  return (
                    <h3 key={lineIndex} className="meal-title">
                      {getMealIcon(line)} {line}
                    </h3>
                  );
                } else if (line.trim().startsWith('- Recipe Name:')) {
                  return (
                    <p key={lineIndex} className="recipe-name">
                      {line.replace('- Recipe Name:', '').trim()}
                    </p>
                  );
                } else if (line.trim().startsWith('- Description:')) {
                  return (
                    <p key={lineIndex} className="description">
                      {line.replace('- Description:', '').trim()}
                    </p>
                  );
                } else if (line.trim().startsWith('- Steps:')) {
                  return (
                    <div key={lineIndex} className="steps">
                      <strong>Steps:</strong>
                      <p>{line.replace('- Steps:', '').trim()}</p>
                    </div>
                  );
                } else if (line.trim()) {
                  return <p key={lineIndex}>{line}</p>;
                }
                return null;
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="meal-plan-footer">
        <button onClick={() => window.print()} className="print-btn">
          🖨️ Print Meal Plan
        </button>
        <button onClick={() => copyToClipboard(mealPlan)} className="copy-btn">
          📋 Copy to Clipboard
        </button>
      </div>
    </div>
  );
}

function getMealIcon(mealType) {
  if (mealType.includes('Breakfast')) return '🌅';
  if (mealType.includes('Lunch')) return '☀️';
  if (mealType.includes('Dinner')) return '🌙';
  if (mealType.includes('Snack')) return '🍎';
  return '🍽️';
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Meal plan copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

export default MealDisplay;
