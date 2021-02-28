/* 
============================================================================
  API parameter data & misc functions & global variable declarations
============================================================================
*/

const labels = {
  "diet": [
    {
      "label": "Balanced",
      "parameter": "balanced",
      "definition": "Protein/Fat/Carb values in 15/35/50 ratio"
    },
    {
      "label": "High-Fiber",
      "parameter": "high-fiber",
      "definition": "More than 5g fiber per serving"
    },
    {
      "label": "High-Protein",
      "parameter": "high-protein",
      "definition": "More than 50% of total calories from proteins"
    },
    {
      "label": "Low-Carb",
      "parameter": "low-carb",
      "definition": "Less than 20% of total calories from carbs"
    },
    {
      "label": "Low-Fat",
      "parameter": "low-fat",
      "definition": "Less than 15% of total calories from fat"
    },
    {
      "label": "Low-Sodium",
      "parameter": "low-sodium",
      "definition": "Less than 140mg Na per serving"
    }
    ],
  "health": [
    {
      "label": "Alcohol free",
      "parameter": "alcohol-free",
      "definition": "No alcohol used or contained"
    },
    {
      "label": "Immuno-Supportive",
      "parameter": "immuno-supportive",
      "definition": "Recipes which fit a science-based approach to eating to strengthen the immune system"
    },
    {
      "label": "Celery free",
      "parameter": "celery-free",
      "definition": "Does not contain celery or derivatives"
    },
    {
      "label": "Crustcean free",
      "parameter": "crustcean-free",
      "definition": "Does not contain crustaceans (shrimp, lobster etc.) or derivatives"
    },
    {
      "label": "Dairy free",
      "parameter": "dairy-free",
      "definition": "No dairy; no lactose"
    },
    {
      "label": "Eggs free",
      "parameter": "egg-free",
      "definition": "No eggs or products containing eggs"
    },
    {
      "label": "Fish",
      "parameter": "fish-free",
      "definition": "No eggs or products containing eggs"
    },
    {
      "label": "FODMAP free",
      "parameter": "fodmap-free",
      "definition": "	Does not contain FODMAP foods"
    },
    {
      "label": "Gluten free",
      "parameter": "gluten-free",
      "definition": "No ingredients containing gluten"
    },
    {
      "label": "Keto",
      "parameter": "keto-friendly",
      "definition": "Maximum 7 grams of net carbs per serving"
    },
    {
      "label": "Kidney friendly",
      "parameter": "kidney-friendly",
      "definition": "Per serving – phosphorus less than 250 mg AND potassium less than 500 mg AND sodium less than 500 mg"
    },
    {
      "label": "Kosher",
      "parameter": "kosher",
      "definition": "Contains only ingredients allowed by the kosher diet. However it does not guarantee kosher preparation of the ingredients themselves"
    },
    {
      "label": "Low potassium",
      "parameter": "low-potassium",
      "definition": "Less than 150mg per serving"
    },
    {
      "label": "Lupine free",
      "parameter": "lupine-free",
      "definition": "Does not contain lupine or derivatives"
    },
    {
      "label": "Mustard free",
      "parameter": "mustard-free",
      "definition": "Does not contain mustard or derivatives"
    },
    {
      "label": "No oil added",
      "parameter": "no-oil-added",
      "definition": "No oil added except to what is contained in the basic ingredients"
    },
    {
      "label": "No-sugar",
      "parameter": "low-sugar",
      "definition": "No simple sugars – glucose, dextrose, galactose, fructose, sucrose, lactose, maltose"
    },
    {
      "label": "Paleo",
      "parameter": "paleo",
      "definition": "Excludes what are perceived to be agricultural products; grains, legumes, dairy products, potatoes, refined salt, refined sugar, and processed oils"
    },
    {
      "label": "Peanuts",
      "parameter": "peanut-free",
      "definition": "No peanuts or products containing peanuts"
    },
    {
      "label": "Pescatarian",
      "parameter": "pescatarian",
      "definition": "Does not contain meat or meat based products, can contain dairy and fish"
    },
    {
      "label": "Pork-free",
      "parameter": "pork-free",
      "definition": "Does not contain pork or derivatives"
    },
    {
      "label": "Red meat free",
      "parameter": "red-meat-free",
      "definition": "Does not contain beef, lamb, pork, duck, goose, game, horse, and other types of red meat or products containing red meat."
    },
    {
      "label": "Sesame free",
      "parameter": "sesame-free",
      "definition": "Does not contain sesame seed or derivatives"
    },
    {
      "label": "Shellfish",
      "parameter": "shellfish-free",
      "definition": "No shellfish or shellfish derivatives"
    },
    {
      "label": "Soy",
      "parameter": "soy-free",
      "definition": "No soy or products containing soy"
    },
    {
      "label": "Sugar-conscious",
      "parameter": "sugar-conscious",
      "definition": "Less than 4g of sugar per serving"
    },
    {
      "label": "Tree Nuts",
      "parameter": "tree-nut-free",
      "definition": "No tree nuts or products containing tree nuts"
    },
    {
      "label": "Vegan",
      "parameter": "vegan",
      "definition": "No meat, poultry, fish, dairy, eggs or honey"
    },
    {
      "label": "Vegetarian",
      "parameter": "vegetarian",
      "definition": "No meat, poultry, or fish"
    },
    {
      "label": "Wheat-free",
      "parameter": "wheat-free",
      "definition": "No wheat, can have gluten though"
    }
  ]
}

const values = {
  "meal": {
    "type": "mealType",
    "parameter": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack",
      "Teatime"
    ]
  },
  "dish": {
    "type": "dishType",
    "parameter": [
      "Alcohol-cocktail",
      "Biscuits and cookies",
      "Bread",
      "Cereals",
      "Condiments and sauces",
      "Drinks",
      "Desserts",
      "Egg",
      "Main course",
      "Omelet",
      "Pancake",
      "Preps",
      "Preserve",
      "Salad",
      "Sandwiches",
      "Soup",
      "Starter"
    ]
  },
  "cuisine": {
    "type": "cuisineType",
    "parameter": [
      "American",
      "Asian",
      "British",
      "Caribbean",
      "Central Europe",
      "Chinese",
      "Eastern Europe",
      "French",
      "Indian",
      "Italian",
      "Japanese",
      "Kosher",
      "Mediterranean",
      "Mexican",
      "Middle Eastern",
      "Nordic",
      "South American",
      "South East Asian"
    ]
  }
}

const stopwords = {
  "measurement": []
}

function parse(str) {
  return str.trim().toLowerCase().replace(/\s/g, '-')
}

function remove(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}

const cchNodeList = document.querySelectorAll('.collapsible-content-header')
const selectionForm = document.querySelector('#selection-form')

/* 
============================================================================
  Collapsible section event handler 
============================================================================
*/

cchNodeList.forEach(i => {
  i.addEventListener('click', function () {
    
    const where = `.collapsible-content-inner.${i.classList[1]}`
    const content = document.querySelector(where)

    const isVis = getComputedStyle(content)
    if (isVis.visibility === 'visible') {
      content.style.visibility = 'hidden'
      content.style.maxHeight = '0px'
    } else {
      content.style.visibility = 'visible'
      content.style.maxHeight = 'none'
    }
  })
})

/* 
============================================================================
  Add checkbox and dropdown data to DOM
============================================================================
*/
function checkboxValues(data) {
  const diet = document.querySelector('#diet')
  Object.keys(data).forEach(i => {
    data[i].forEach(j => {
      diet.insertAdjacentHTML('beforeend', `
      <li>
        <input type="checkbox" name="${i}" value="${j.parameter}" class="diet-checkbox" id="diet-checkbox-${j.parameter}">
        <label for="diet-checkbox-${j.parameter}">${j.label}</label>
      </li>
      `)
    })
  })
}

function dropdownValues(values) {
  Object.keys(values).forEach(key => {
    const cuisine = document.querySelector(`#option-${key}`)
    values[key].parameter.forEach(i => {
      const opt = document.createElement('option')
      opt.textContent = i
      opt.value = values[key].type
      opt.id = `option-${key}`
      cuisine.appendChild(opt)
    })
  })
}

dropdownValues(values)
checkboxValues(labels)

/* 
============================================================================
  Asynchronous request
============================================================================
*/

async function getData(url) {
  try {
    const response = await axios.get(url)
    return response.data.hits
  } catch (err) {
    console.log(err.response)
    return err.response
  }
}

/* 
============================================================================
  Selection form event handler
============================================================================
*/

selectionForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  /* 
    Local function & variable declaration
  ==========================================================================
  */
  
  const APP_ID = '8be4e382'
  const APP_KEY = '4b5c55a4d169b0a5913dc8fbc9764f49'

  const shoppingOrderedList = document.querySelector('#shopping-list')
  const visibleSelection = document.querySelector('.collapsible-content-inner.selection')
  const visibleSchedule = document.querySelector('.collapsible-content-inner.schedule')
  const visibleShopping = document.querySelector('.collapsible-content-inner.shopping')

  const checkboxes = document.querySelectorAll('.diet-checkbox')
  const selectionURL = document.querySelector('#selection-url')
  const search = document.querySelector('#search-box')

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

  let shoppingList = new Array()

  const BASE_URL = (input) => `https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`

  /* 
    Initialize all sections as visible
  ==========================================================================
  */
  
  visibleSchedule.style.visibility = 'visible'
  visibleSchedule.style.maxHeight = 'none'

  visibleSelection.style.visibility = 'visible'
  visibleSelection.style.maxHeight = 'none'

  visibleShopping.style.visibility = 'visible'
  visibleShopping.style.maxHeight = 'none'

  /*
    If no text in search box, don't add to URL
  ==========================================================================
  */
  
  if (search) {
    input = parse(search.value)
  } else {
    input = ''
  }
  
  /* 
    Collect checkbox selected values.
    Concatenate to URL
  ==========================================================================
  */
  document.querySelectorAll('select').forEach(i => {
    a = i.options[i.selectedIndex].textContent
    if (a) {
      BASE_URL += `&${i.value}=${a}`
    }
  })

  checkboxes.forEach(i => {
    if (i.checked) {
      BASE_URL += `&${i.name}=${i.value}`
    }
  })
  
  let url = BASE_URL(input)

  selectionURL.innerText = url
  selectionURL.href = url
  selectionURL.target = '_blank'
  
  /*
    Get response data
  ==========================================================================
  */
  
  const data = await getData(url)

  /*
    If response is not an error
  ==========================================================================
  */
  
  if (!(data.status == 403) && !(data.status == 401)) {
    selectionURL.innerText = ''
    days.forEach(i => {
      const arr = data[days.indexOf(i)].recipe.ingredients
      const monday = document.querySelector(`#${i}`)
      const h3 = document.createElement('h3')
      const container = document.querySelector(`#${i}`)
      remove(container)

      h3.textContent = data[days.indexOf(i)].recipe.label
      monday.appendChild(h3)

      arr.forEach(i => {
        const p = document.createElement('p')
      
        p.textContent = i.text
        shoppingList.push(i.text)
        monday.appendChild(p)
      })

      nlp(shoppingList)
      
      /*
        If no text in search box, don't add to URL
      ======================================================================
      */
      
      if (data[days.indexOf(i)].recipe.url) {
        const a = document.createElement('a')
        a.href = data[days.indexOf(i)].recipe.url
        a.innerText = 'Directions'
        a.className = 'section-button'
        a.target = '_blank'
        monday.appendChild(a)
      }
    })

    const shoppingOrderedList = document.querySelector('#shopping-list')
    remove(shoppingOrderedList)
    shoppingList.forEach(i => {
      const li = document.createElement('li')
      li.innerText = i
      shoppingOrderedList.appendChild(li)
    })
  } else {
    const a = document.createElement('a')
    selectionURL.innerText = data.data
    selectionURL.href = ''
    selectionURL.style.textDecoration = 'none'
    remove(shoppingOrderedList)
  }
})

/* 
============================================================================
  Add event listener to print button 
============================================================================
*/

const printButton = document.querySelector('#print-schedule')

printButton.addEventListener('click', () => {
  const HTML = document.querySelector('.recipe.active')
  const recipeWindow = window.open('', 'Print Recipe', `status=1,width=${300},height=${400}`)
  recipeWindow.document.write(HTML.innerHTML)
  recipeWindow.print()
})

/* 
============================================================================
  Ingredient list parsing
============================================================================
*/

function nlp(array) {
  array.forEach(i => {
    console.log(i.split(' '))
  })
}