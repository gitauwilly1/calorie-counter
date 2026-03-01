const calorieForm = document.getElementById('calorieForm');
const foodItemInput = document.getElementById('foodItem');
const calorieAmountInput = document.getElementById('calorieAmount');
const foodList = document.getElementById('foodList');
const totalCaloriesDisplay = document.getElementById('totalCalories');
const resetBtn = document.getElementById('resetBtn');

let calorieEntries = [];

function setCookie(name, value, days = 7) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))}; expires=${expires}; path=/`;
}

function getCookie(name) {
    const value = document.cookie.split('; ').find(row => row.startsWith(`${name}=`));
    return value ? JSON.parse(decodeURIComponent(value.split('=')[1])) : [];
}

async function syncWithServer(data) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        });
        const result = await response.json();
        console.log('Server Sync Successful:', result);
    } catch (error) {
        console.error('Server Sync Failed:', error);
    }
}

function updateInterface() {
    foodList.innerHTML = '';
    let total = 0;

    calorieEntries.forEach((entry, index) => {
        total += entry.calories;
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center p-4 hover:bg-gray-50';
        li.innerHTML = `
            <div>
                <span class="font-medium text-gray-800">${entry.name}</span>
                <span class="ml-2 text-sm text-gray-500">${entry.calories} kcal</span>
            </div>
            <button onclick="removeEntry(${index})" class="text-xs text-red-400 hover:text-red-600 font-semibold uppercase">
                Remove
            </button>
        `;
        foodList.appendChild(li);
    });

    totalCaloriesDisplay.textContent = total;
    setCookie('calorieData', calorieEntries);
}

calorieForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = foodItemInput.value.trim();
    const calories = parseInt(calorieAmountInput.value);

    if (calories <= 0) {
        alert("Please enter a calorie amount greater than 0.");
        return;
    }

    const entry = { name, calories };
    calorieEntries.push(entry);
    
    updateInterface();
    await syncWithServer(entry);
    
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

window.onload = () => {
    calorieEntries = getCookie('calorieData');
    updateInterface();
};