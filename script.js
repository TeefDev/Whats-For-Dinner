// ======= Data: meals array (Objects) =======
const meals = [
  {
    title: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta.",
    difficulty: "Easy",
    cuisine: "Italian",
    rating: 4.8,
    reviews: 234,
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    image:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water"
    ],
    instructions: [
      "Bring a large pot of salted water to a boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5–7 minutes.",
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Season generously with black pepper.",
      "When pasta is done, reserve some pasta water, then drain.",
      "Add hot pasta to the skillet with pancetta (off the heat). Quickly pour in the egg-cheese mixture and toss vigorously, adding a splash of pasta water if needed until creamy.",
      "Serve immediately with extra cheese and black pepper."
    ],
    nutrition: {
      calories: "520 kcal",
      protein: "28 g",
      carbs: "62 g",
      fat: "18 g"
    },
    tips: [
      "Use room temperature eggs for a smoother sauce.",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling.",
      "Reserve some pasta water – it helps create a silky sauce.",
      "Always grate cheese fresh for the best flavor."
    ]
  },
  {
    title: "Grilled Lemon Herb Chicken",
    description: "Juicy chicken breasts marinated with lemon, garlic, and herbs.",
    difficulty: "Easy",
    cuisine: "Mediterranean",
    rating: 4.6,
    reviews: 189,
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "3 people",
    image: "https://images.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg?auto=compress&cs=tinysrgb&w=800",
    ingredients: [
      "3 chicken breasts",
      "2 tbsp olive oil",
      "2 cloves garlic, minced",
      "Juice of 1 lemon",
      "1 tsp dried oregano",
      "1 tsp dried thyme",
      "Salt & black pepper"
    ],
    instructions: [
      "In a bowl, mix olive oil, lemon juice, garlic, oregano, thyme, salt, and pepper.",
      "Add chicken and coat well. Marinate at least 20 minutes.",
      "Preheat grill or grill pan over medium-high heat.",
      "Grill chicken 6–7 minutes per side or until fully cooked.",
      "Let rest a few minutes before slicing and serving."
    ],
    nutrition: {
      calories: "320 kcal",
      protein: "35 g",
      carbs: "3 g",
      fat: "17 g"
    },
    tips: [
      "Pound chicken to even thickness for even cooking.",
      "Don’t overcook – use a thermometer if you have one.",
      "Great served over salad or with roasted veggies."
    ]
  },
  {
    title: "One-Pot Veggie Curry",
    description: "Comforting coconut curry loaded with colorful vegetables.",
    difficulty: "Medium",
    cuisine: "Indian",
    rating: 4.7,
    reviews: 210,
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "4 people",
    image:
      "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=800",
    ingredients: [
      "1 tbsp vegetable oil",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 tbsp curry powder",
      "1 tsp ground turmeric",
      "400ml coconut milk",
      "1 cup vegetable broth",
      "2 carrots, sliced",
      "1 cup cauliflower florets",
      "1 cup peas",
      "Salt to taste"
    ],
    instructions: [
      "Heat oil in a pot over medium heat. Sauté onion until soft.",
      "Add garlic, curry powder, and turmeric. Cook 1 minute until fragrant.",
      "Pour in coconut milk and vegetable broth.Stir well.",
      "Add carrots and cauliflower. Simmer 15 minutes until tender.",
      "Stir in peas and cook 3–4 more minutes. Season with salt.",
      "Serve with rice or naan."
    ],
    nutrition: {
      calories: "430 kcal",
      protein: "9 g",
      carbs: "38 g",
      fat: "27 g"
    },
    tips: [
      "Cut vegetables the same size so they cook evenly.",
      "Adjust spice level by adding chili flakes or fresh chili.",
      "Leftovers taste even better the next day."
    ]
  },
  {
    title: "Avocado Toast with Egg",
    description: "Quick breakfast of creamy avocado on crispy toast with egg.",
    difficulty: "Easy",
    cuisine: "Breakfast",
    rating: 4.5,
    reviews: 95,
    prepTime: "5 min",
    cookTime: "5 min",
    servings: "1 person",
    image:
      "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800",
    ingredients: [
      "1 slice whole grain bread",
      "1/2 ripe avocado",
      "1 egg",
      "Salt & pepper",
      "Chili flakes (optional)",
      "Olive oil (optional)"
    ],
    instructions: [
      "Toast the bread until golden.",
      "Mash avocado with salt and pepper.",
      "Cook the egg sunny-side up, fried, or poached.",
      "Spread avocado on toast, top with egg.",
      "Finish with chili flakes and a drizzle of olive oil if you like."
    ],
    nutrition: {
      calories: "310 kcal",
      protein: "12 g",
      carbs: "24 g",
      fat: "19 g"
    },
    tips: [
      "Use ripe avocado that yields slightly when pressed.",
      "Try different toppings like cherry tomatoes or feta.",
      "Perfect when you want something fast but satisfying."
    ]
  }
];

// ======= DOM Elements =======
const mealImage = document.getElementById("mealImage");
const mealRating = document.getElementById("mealRating");
const mealReviews = document.getElementById("mealReviews");
const mealPrepTime = document.getElementById("mealPrepTime");
const mealCookTime = document.getElementById("mealCookTime");
const mealServings = document.getElementById("mealServings");
const mealDifficulty = document.getElementById("mealDifficulty");
const mealCuisine = document.getElementById("mealCuisine");
const mealTitle = document.getElementById("mealTitle");
const mealDescription = document.getElementById("mealDescription");

const tabButtons = document.querySelectorAll(".tab");
const tabIngredients = document.getElementById("tab-ingredients");
const tabInstructions = document.getElementById("tab-instructions");
const tabNutrition = document.getElementById("tab-nutrition");
const tabTips = document.getElementById("tab-tips");

const randomBtn = document.getElementById("randomBtn");

// Side menu
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const openMenuBtn = document.getElementById("openMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");

// ======= Helper Functions =======

// تختار وصفة عشوائية من المصفوفة
function getRandomMeal() {
  const index = Math.floor(Math.random() * meals.length);
  return meals[index];
}

// ترسم العناصر في تاب معيّن مع أرقام
function renderList(container, items) {
  container.innerHTML = "";
  items.forEach((text, i) => {
    const div = document.createElement("div");
    div.className = "list-item";

    const num = document.createElement("div");
    num.className = "list-number";
    num.textContent = i + 1;

    const span = document.createElement("div");
    span.className = "list-text";
    span.textContent = text;

    div.appendChild(num);
    div.appendChild(span);
    container.appendChild(div);
  });
}

// ترسم بيانات التغذية
function renderNutrition(container, nutrition) {
  container.innerHTML = "";

  const entries = [
    { label: "Calories", value: nutrition.calories, icon: "🔥" },
    { label: "Protein", value: nutrition.protein, icon: "🏋️" },
    { label: "Carbohydrates", value: nutrition.carbs, icon: "🌾" },
    { label: "Fat", value: nutrition.fat, icon: "💧" }
  ];

  entries.forEach((item) => {const row = document.createElement("div");
    row.className = "nutrition-item";

    const labelBox = document.createElement("div");
    labelBox.className = "nutrition-label";

    const icon = document.createElement("div");
    icon.className = "nutrition-icon";
    icon.textContent = item.icon;

    const label = document.createElement("span");
    label.textContent = item.label;

    labelBox.appendChild(icon);
    labelBox.appendChild(label);

    const value = document.createElement("span");
    value.textContent = item.value;

    row.appendChild(labelBox);
    row.appendChild(value);

    container.appendChild(row);
  });
}

// تعرض وصفة معينة في الواجهة
function displayMeal(meal) {
  mealImage.src = meal.image;
  mealTitle.textContent = meal.title;
  mealDescription.textContent = meal.description;
  mealDifficulty.textContent = meal.difficulty;
  mealCuisine.textContent = meal.cuisine;
  mealRating.textContent = meal.rating.toFixed(1);
 mealReviews.textContent = "(" + meal.reviews + " reviews)";
  mealPrepTime.textContent = meal.prepTime;
  mealCookTime.textContent = meal.cookTime;
  mealServings.textContent = meal.servings;

  renderList(tabIngredients, meal.ingredients);
  renderList(tabInstructions, meal.instructions);
  renderNutrition(tabNutrition, meal.nutrition);
  renderList(tabTips, meal.tips);
}

// ======= Tab Switching =======
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const tab = btn.dataset.tab;

    [tabIngredients, tabInstructions, tabNutrition, tabTips].forEach((el) =>
      el.classList.add("hidden")
    );

    document.getElementById(`tab-${tab}`).classList.remove("hidden");
  });
});

// ======= Random Button =======
randomBtn.addEventListener("click", () => {
  const meal = getRandomMeal();
  displayMeal(meal);
});

// ======= Side Menu toggle =======
function openMenu() {
  sideMenu.classList.add("open");
  overlay.classList.add("visible");
}

function closeMenu() {
  sideMenu.classList.remove("open");
  overlay.classList.remove("visible");
}

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// ======= Initial Load =======
displayMeal(getRandomMeal());