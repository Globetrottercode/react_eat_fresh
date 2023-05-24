let allPlansMealData = {
  vegBasic: {
    mon: {
      breakfast: ["Pav Bhaji"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Palak-sabzi",
        "Mushroom Sabji",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Suran Sabzi",
        "Sweet Potato Sabzi",
        "Papad/Salad",
        "Chutney",
      ],
    },
    tues: {
      breakfast: ["Masala Dosa", "Coconut Chutney", "Sambar"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Baingan bHarta",
        "Aloo Gobi",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
      dinner: [
        "Rice/roti",
        "Dal Tadka",
        "Paneer Khofta",
        "Parwal Ki Sabzi",
        "Papad/Salad",
        "Chutney",
      ],
    },
    wed: {
      breakfast: ["Dhokla", "Green Chutney", "Sauce"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Bhindi Bhaji",
        "Jeera Aloo",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Aloo Capsicum",
        "Matar Mushroom",
        "Papad/Salad",
        "Chutney",
      ],
    },
    thurs: {
      breakfast: ["Idli/Sambar Bada", "Coconut Chutney", "Sambar"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Paneer Bhurji",
        "Dum Aloo",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Pav Bhaji",
        "Kaddu Ki Sabzi",
        "Papad/Salad",
        "Chutney",
      ],
    },
    friday: {
      breakfast: ["Uttapam", "Cocunut Chutney"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Sukhi Bhaji",
        "Lauki Sabzi",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Chole Sabzi",
        "Khulche",
        "Papad/Salad",
        "Chutney",
      ],
    },
    saturday: {
      breakfast: ["Poha", "Bread"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Methi Bhaji",
        "Matar ki Sabzi",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Misal Pav",
        "Chana Sabzi",
        "Papad/Salad",
        "Chutney",
      ],
    },
    sunday: {
      breakfast: ["Veg Sandwich", "Green Chutney", "Sauce"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Pyaaz Bhaji",
        "Mix Veg",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Matar Paneer",
        "Navaratan Korma",
        "Papad/Salad",
        "Chutney",
      ],
    },
  },
  vegPremium: {
    mon: {
      breakfast: ["Pav Bhaji", "Orange Juice"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Palak-sabzi",
        "Mushroom Sabji",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Aloo Matar",
        "Rasgulla",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Suran Sabzi",
        "Sweet Potato Sabzi",
        "Papad/Salad",
        "Chutney",
        "Aloo Shimla Mirch",
        "Gulab Jamun",
      ],
    },
    tues: {
      breakfast: ["Masala Dosa", "Mango Juice"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Baingan bHarta",
        "Aloo Gobi",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Mix Veg",
        "Rasgulla",
      ],
      dinner: [
        "Rice/roti",
        "Dal Makhani",
        "Paneer Khofta",
        "Parwal Ki Sabzi",
        "Papad/Salad",
        "Chutney",
        "Gajar Matar Sabzi",
        "Gulab Jamun",
      ],
    },
    wed: {
      breakfast: ["Dhokla", "Pineapple Juice"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Bhindi Bhaji",
        "Jeera Aloo",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Karela Sabzi",
        "Rasgulla",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Aloo Capsicum",
        "Matar Mushroom",
        "Papad/Salad",
        "Chutney",
      ],
    },
    thurs: {
      breakfast: ["Idli", "Sambar Bada", "Orange Juice"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Paneer Bhurji",
        "Dum Aloo",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Gobi Matar",
        "Rasgulla",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Makhani",
        "Pav Bhaji",
        "Kaddu Ki Sabzi",
        "Papad/Salad",
        "Chutney",
      ],
    },
    friday: {
      breakfast: ["Uttapam", ",Mange Juice"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Sukhi Bhaji",
        "Lauki Sabzi",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Punjabi Shahi Paneer",
        "Rasgulla",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Chole Sabzi",
        "Khulche",
        "Papad/Salad",
        "Chutney",
        "Gobi Matar",
        "Gulab Jamun",
      ],
    },
    saturday: {
      breakfast: ["Poha", "Pineapple Juice"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Methi Bhaji",
        "Matar ki Sabzi",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Tomato Sabzi",
        "Rasgulla",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Misal Pav",
        "Chana Sabzi",
        "Papad/Salad",
        "Chutney",
        "Dhokla",
        "Gulab Jamun",
      ],
    },
    sunday: {
      breakfast: ["Veg Sandwich", "Orange Juice"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Pyaaz Bhaji",
        "Mix Veg",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Rajma Chawal",
        "Rasgulla",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Makhani",
        "Matar Paneer",
        "Navaratan Korma",
        "Papad/Salad",
        "Chutney",
        "Khichdi",
        "Gulab Jamun",
      ],
    },
  },
  nonVegBasic: {
    mon: {
      breakfast: ["Chicken Maggi"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "chana Sabji",
        "Kadhai Chicken",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Navratna Korma",
        "Chicken Do Pyaza",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
    },
    tues: {
      breakfast: ["Chicken Sandwich"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Bhindi Sabji",
        "Chicken Kasha",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Mixed Veg",
        "Egg Masala",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
    },
    wed: {
      breakfast: ["Masala Dosa", "Sambar", "Coconut Chutney"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Alu Sabji",
        "Egg Curry",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Mushroom Masala",
        "Mutton Curry",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
    },
    thurs: {
      breakfast: ["Dhokla", "Sweet Chutney"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Soyabean Masala",
        "Chilli Egg",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Chana Sabji",
        "Kadhai Chicken",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
    },
    friday: {
      breakfast: ["Puri", "Dum Aalo"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Navratna Korma",
        "Chicken Do Pyaza",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Bhindi Sabji",
        "Chicken Kasha",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
    },
    saturday: {
      breakfast: ["Chole", "Bhature"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Mixed Veg",
        "Egg Bhurji Masala",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "alu Sabji",
        "Egg Curry",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
    },
    sunday: {
      breakfast: ["Paw Bhaji"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Mushroom Masala",
        "Mutton Curry",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Soyabean Masala",
        "Chilli Egg",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
      ],
    },
  },
  nonVegPremium: {
    mon: {
      breakfast: ["Chole", "Bhature", "Orange Juice"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Mixed Veg",
        "Palakh Paneer",
        "Chicken Do Pyaza",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Rasgulla",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Makhani",
        "Muli Ki Sabji",
        "Matar Paneer",
        "Egg Curry",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Gulab Jamun",
      ],
    },
    tues: {
      breakfast: ["Pav Bhaji", "Mango Juice"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Cabbagae Dum Aalo",
        "Mushroom Masala",
        "Chicken Masala",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Rasgulla",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Mixed Veg",
        "Chana Sabji",
        "Reshmi Chicken",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Gulab Jamun",
      ],
    },
    wed: {
      breakfast: ["Chole", "Kulche", "Pineapple Juice"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Gobi Aalo",
        "Butter Paneer",
        "Egg Kasha",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Rasgulla",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Makhani",
        "Alu Matar",
        "Reshmi Paneer",
        "Mutton Curry",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Gulab Jamun",
      ],
    },
    thurs: {
      breakfast: ["Cheese Dosa", "Orange Juice"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Alu Palakh",
        "Mushroom Masala",
        "Butter Chicken",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Rasgulla",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Mixed Veg",
        "Palakh Paneer",
        "Chicken Do Pyaza",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Gulab Jamun",
      ],
    },
    friday: {
      breakfast: ["Chicken Sandwich", "Mango Juice"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Muli ki Sabji",
        "Matar Paneer",
        "Egg Curry",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Rasgulla",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Makhani",
        "Cabbage Dum Aalo",
        "Mushroom Masala",
        "Mutton Curry",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Gulab Jamun",
      ],
    },
    saturday: {
      breakfast: ["Chicken Maggi", "Pineapple Juice"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Alu Mix Veg",
        "Chana Sabji",
        "Reshmi Chicken",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Rasgulla",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Tadka",
        "Gobi Aalo",
        "Butter Paneer",
        "Egg Kasha",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Gulab Jamun",
      ],
    },
    sunday: {
      breakfast: ["Aalo Paratha", "ketchup", "Orange Juice"],
      lunch: [
        "Rice/Roti",
        "Dal Fry",
        "Alu Matar",
        "Reshmi Paneer",
        "Mutton Curry",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Rasgulla",
      ],
      dinner: [
        "Rice/Roti",
        "Dal Makhani",
        "Alu Palakh",
        "Mushroom Masala",
        "Butter Chicken",
        "Papad/Salad",
        "Chutney",
        "Curd/Raita",
        "Gulab Jamun",
      ],
    },
  },
};

export default allPlansMealData;
