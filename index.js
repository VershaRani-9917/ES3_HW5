// 1. Create an object with a dynamic field
const createObjectWithDynamicField = (key, value) => ({ [key]: value });

console.log(createObjectWithDynamicField("name", "Alice"));
console.log(createObjectWithDynamicField("age", 25));

// 2. Add a dynamic field to an existing object
const addObjectField = (obj, key, value) => ({ ...obj, [key]: value });

console.log(addObjectField({ name: "Bob", age: 30 }, "city", "New York"));
console.log(addObjectField({ fruit: "apple", color: "red" }, "quantity", 3));

// 3. Add a dynamic field to an existing object
const addObjField = (obj, key, value) => ({ ...obj, [key]: value });

console.log(
  addObjField(
    { productName: "Side Table", color: "Walnut Brown" },
    "inStock",
    true
  )
);
console.log(
  addObjField({ productName: "Dining Table", color: "White" }, "inStock", false)
);

// 4. Update a field dynamically in an existing object
const updateObjectField = (obj, key, value) => ({ ...obj, [key]: value });

console.log(updateObjectField({ name: "Charlie", age: 28 }, "age", 29));
console.log(
  updateObjectField({ city: "Paris", country: "France" }, "country", "Spain")
);

// 5. Update a field dynamically in an existing object
const updateProductObject = (obj, key, value) => ({ ...obj, [key]: value });

console.log(
  updateProductObject(
    { productName: "Side Table", inStock: true },
    "inStock",
    false
  )
);
console.log(
  updateProductObject(
    { productName: "Dining Table", color: "White", inStock: false },
    "inStock",
    true
  )
);

// 6. Dynamically generate an object with multiple fields
const generateObject = (key1, value1, key2, value2) => ({
  [key1]: value1,
  [key2]: value2,
});

console.log(generateObject("animal", "Dog", "sound", "Bark"));
console.log(generateObject("fruit", "Banana", "color", "Yellow"));

// 7. Dynamically generate an object with multiple fields
const generateObj = (key1, value1, key2, value2, key3, value3) => ({
  [key1]: value1,
  [key2]: value2,
  [key3]: value3,
});

console.log(
  generateObj("mealType", "Lunch", "meal", "Rice-Dal", "calorie", "200 Cal")
);
console.log(
  generateObj("mealType", "Dinner", "meal", "Chapati-Dal", "calorie", "180 Cal")
);

// 8. Create an object with multiple dynamic fields
const createNewObjectWithDynamicField = (
  key1,
  value1,
  key2,
  value2,
  key3,
  value3
) => ({ [key1]: value1, [key2]: value2, [key3]: value3 });

console.log(
  createNewObjectWithDynamicField(
    "name",
    "Maze",
    "favColor",
    "Pink",
    "isMarried",
    false
  )
);
console.log(
  createNewObjectWithDynamicField(
    "age",
    35,
    "hobby",
    "Cooking",
    "isMarried",
    true
  )
);
