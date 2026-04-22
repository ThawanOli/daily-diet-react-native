export function groupMealsByDate(meals: any[]) {
  const groups = meals.reduce((acc, meal) => {
    const date = meal.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(meal);
    return acc;
  }, {});

  return Object.keys(groups).map(date => ({
    title: date,
    data: groups[date]
  }));
}