

import React, { useState, useEffect } from 'react';

const Fridge = () => {
  const [inputText, setInputText] = useState('');
  const [selectedWords, setSelectedWords] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const options =[
    "Carrot",
    "Eggs",
    "Tomato",
    "Potato",
    "Onion",
    "Broccoli",
    "Lettuce",
    "Cabbage",
    "Cauliflower",
    "Spinach",
    "Bell pepper",
    "Eggplant",
    "Zucchini",
    "Cucumber",
    "Radish",
    "Beetroot",
    "Mushroom",
    "Peas",
    "Corn",
    "Green beans",
    "Asparagus",
    "Pumpkin",
    "Sweet potato",
    "Kale",
    "Celery",
    "Artichoke",
    "Brussels sprouts",
    "Turnip",
    "Leek",
    "Okra",
    "Radicchio",
    "Fennel",
    "Chard",
    "Bok choy",
    "Watercress",
    "Endive",
    "Snow peas",
    "Cherry tomatoes",
    "Romaine lettuce",
    "Arugula",
    "Celeriac",
    "Garlic",
    "Ginger",
    "Scallion",
    "Jicama",
    "Parsnip",
    "Kohlrabi",
    "Rhubarb",
    "Swiss chard",
    "Daikon",
    "Sprouts",
    "Yam",
    "Turnip greens",
    "Mustard greens",
    "Beef",
    "Chicken",
    "Pork",
    "Lamb",
    "Turkey",
    "Bacon",
    "Ham",
    "Salami",
    "Sausage",
    "Pepperoni",
    "Venison",
    "Duck",
    "Goose",
    "Quail",
    "Veal",
    "Rabbit",
    "Cod",
    "Salmon",
    "Tuna",
    "Shrimp",
    "Crab",
    "Lobster",
    "Scallops",
    "Clams",
    "Mussels",
    "Oysters",
    "Milk",
    "Cheese",
    "Butter",
    "Yogurt",
    "Sour cream",
    "Cottage cheese",
    "Cream",
    "Ice cream",
    "Whipped cream",
    "Cream cheese",
    "Condensed milk",
    "Evaporated milk",
    "Mozzarella",
    "Cheddar",
    "Parmesan",
    "Swiss cheese",
    "Feta cheese",
    "Brie",
    "Camembert",
    "Gouda",
    "Blue cheese",
    "Provolone",
    "Ricotta",
    "Mascarpone",
    "Goat cheese",
    "Soy milk",
    "Almond milk",
    "Coconut milk",
    "Oat milk",
    "Cashew cheese",
    "Plant-based yogurt",
    "Salt",
    "Pepper",
    "Cinnamon",
    "Paprika",
    "Cumin",
    "Turmeric",
    "Ginger",
    "Nutmeg",
    "Cloves",
    "Coriander",
    "Cardamom",
    "Garlic powder",
    "Onion powder",
    "Chili powder",
    "Cayenne pepper",
    "Oregano",
    "Basil",
    "Thyme",
    "Rosemary",
    "Dill",
    "Parsley",
    "Bay leaves",
    "Allspice",
    "Mustard",
    "Celery salt",
    "Fennel seeds",
    "Five-spice powder",
    "Curry powder",
    "Vanilla extract",
    "Lemon juice",
    "Lime juice",
    "Orange juice",
    "Apple juice",
    "Pineapple juice",
    "Cranberry juice",
    "Grapefruit juice",
    "Tomato juice",
    "Grape juice",
    "Pomegranate juice",
    "Mango juice",
    "Carrot juice",
    "Beet juice",
    "Strawberry juice",
    "Watermelon juice",
    "Blueberry juice",
    "Raspberry juice",
    "Passion fruit juice",
    "Peach juice",
    "Pear juice",
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Strawberry",
    "Watermelon",
    "Mango",
    "Pineapple",
    "Peach",
    "Pear",
    "Cherry",
    "Kiwi",
    "Blueberry",
    "Raspberry",
    "Blackberry",
    "Cantaloupe",
    "Honeydew melon",
    "Lemon",
    "Lime",
    "Coconut",
    "Pomegranate",
    "Plum",
    "Apricot",
    "Fig",
    "Grapefruit",
    "Papaya",
    "Lychee",
    "Cranberry",
    "Avocado",
    "Passion fruit",
    "Guava",
    "Jackfruit",
    "Persimmon",
    "Starfruit",
    "Mandarin",
    "Tangerine",
    "Nectarine",
    "Blackcurrant",
    "Mulberry",
    "Quince",
    "Prickly pear",
    "Kiwi berry",
    "Clementine",
    "Rambutan",
    "Feijoa",
    "Gooseberry",
    "Carambola",
    "Elderberry",
    "Soursop",
    "Durian",
    "Longan",
    "Kumquat",
    "Cactus fruit",
    "Pawpaw",
    "Ugli fruit",
    "Ackee"
];

useEffect(() => {
    // Load selected words from local storage
    const savedWords = localStorage.getItem('ingredients');
    if (savedWords) {
      setSelectedWords(JSON.parse(savedWords));
    }
  }, []);

  useEffect(() => {
    // Save selected words to local storagee
    localStorage.setItem('ingredients', JSON.stringify(selectedWords));
  }, [selectedWords]);

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);

    // Filter the options based on the input text
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions(filteredOptions);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleWordSelect();
    }
  };

  const handleWordSelect = () => {
    if (inputText.trim() !== '') {
      setSelectedWords((prevWords) => [...prevWords, inputText]);
      setInputText('');
      setSuggestions([]);
    }
  };

  const handleWordDelete = (index) => {
    setSelectedWords((prevWords) => prevWords.filter((word, i) => i !== index));
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedWords((prevWords) => [...prevWords, suggestion]);
    setInputText('');
    setSuggestions([]);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter text"
      />
      <button onClick={handleWordSelect}>Add</button>

      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      <div className="ingredients">
        {selectedWords.map((word, index) => (
          <div key={index} className="ingredients">
            <span>{word}</span>
            <button onClick={() => handleWordDelete(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fridge;