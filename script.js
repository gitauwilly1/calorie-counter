const calorieForm = document.getElementById('calorieForm');
const foodItemInput = document.getElementById('foodItem');
const calorieAmountInput = document.getElementById('calorieAmount');
const foodList = document.getElementById('foodList');
const totalCaloriesDisplay = document.getElementById('totalCalories');
const resetBtn = document.getElementById('resetBtn');

let calorieEntries = [];

function updateInterface() {
    foodList.innerHTML = '';
    
    let total = 0;

    calorieEntries.forEach((entry, index) => {
        total += entry.calories;

        const li = document.createElement('li');
        li.className = 'flex justify-between items-center p-4 hover:bg-gray-50 transition-colors';
        li.innerHTML = `
            <div>
                <span class="font-medium text-gray-800">${entry.name}</span>
                <span class="ml-2 text-sm text-gray-500">${entry.calories} kcal</span>
            </div>
            <button onclick="removeEntry(${index})" class="text-xs text-red-400 hover:text-red-600 font-semibold uppercase tracking-wider">
                Remove
            </button>
        `;
        foodList.appendChild(li);
    });

    totalCaloriesDisplay.textContent = total;
}


calorieForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const entry = {
        name: foodItemInput.value,
        calories: parseInt(calorieAmountInput.value)
    };

    calorieEntries.push(entry);
    updateInterface();
    
    calorieForm.reset();
    foodItemInput.focus();
});

window.removeEntry = (index) => {
    calorieEntries.splice(index, 1);
    updateInterface();
};

resetBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all records?')) {
        calorieEntries = [];
        updateInterface();
    }
});