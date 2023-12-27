const rest = [
  {
    id: 1,
    name: "Burger King",
    rating: 4.1,
    category: "Burgers, American",
    address: "Jhotwara",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 2,
    name: "Pizza Hut",
    rating: 4.3,
    category: "Pizza, Italian",
    address: "C-Scheme",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 3,
    name: "Taco Bell",
    rating: 3.9,
    category: "Mexican, Fast Food",
    address: "Vaishali Nagar",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 4,
    name: "Subway",
    rating: 4.0,
    category: "Sandwiches, Fast Food",
    address: "Malviya Nagar",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 5,
    name: "McDonald's",
    rating: 4.2,
    category: "Burgers, Fast Food",
    address: "Tonk Road",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 6,
    name: "KFC",
    rating: 4.0,
    category: "Chicken, Fast Food",
    address: "Raja Park",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 7,
    name: "Starbucks",
    rating: 4.5,
    category: "Coffee, Cafe",
    address: "MI Road",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 8,
    name: "Domino's Pizza",
    rating: 4.4,
    category: "Pizza, Fast Food",
    address: "Sodala",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 9,
    name: "Wendy's",
    rating: 4.1,
    category: "Burgers, Fast Food",
    address: "Bani Park",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 10,
    name: "Papa John's",
    rating: 4.3,
    category: "Pizza, Italian",
    address: "Vaishali Nagar",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },

  {
    id: 11,
    name: "Chick-fil-A",
    rating: 4.6,
    category: "Chicken, Fast Food",
    address: "Rgewood, NY",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 12,
    name: "Chipotle Mexican Grill",
    rating: 4.2,
    category: "Mexican, Fast Food",
    address: "Seattle, WA",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 13,
    name: "Panera Bread",
    rating: 4.0,
    category: "Sandwiches, Bakery",
    address: "Miami, FL",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 14,
    name: "In-N-Out Burger",
    rating: 4.5,
    category: "Burgers, American",
    address: "Los Angeles, CA",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 15,
    name: "Five Guys",
    rating: 4.4,
    category: "Burgers, American",
    address: "New York City, NY",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 16,
    name: "Dunkin' Donuts",
    rating: 4.1,
    category: "Coffee, Donuts",
    address: "Boston, MA",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 17,
    name: "Panda Express",
    rating: 4.0,
    category: "Chinese, Fast Food",
    address: "San Francisco, CA",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 18,
    name: "Shake Shack",
    rating: 4.3,
    category: "Burgers, American",
    address: "Chicago, IL",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 19,
    name: "Culver's",
    rating: 4.6,
    category: "Burgers, Fast Food",
    address: "Wisconsin, WI",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 20,
    name: "Wendy's",
    rating: 4.0,
    category: "Burgers, Fast Food",
    address: "Ohio, OH",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },

  {
    id: 21,
    name: "Arby's",
    rating: 4.2,
    category: "Sandwiches, Fast Food",
    address: "Atlanta, GA",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 22,
    name: "Jack in the Box",
    rating: 4.0,
    category: "Burgers, Fast Food",
    address: "San Diego, CA",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 23,
    name: "Dairy Queen",
    rating: 4.3,
    category: "Ice Cream, Fast Food",
    address: "Minnesota, MN",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 24,
    name: "Whataburger",
    rating: 4.5,
    category: "Burgers, American",
    address: "Texas, TX",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
  {
    id: 25,
    name: "Sonic Drive-In",
    rating: 4.1,
    category: "Burgers, Fast Food",
    address: "Oklahoma, OK",
    image:
      "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
  },
];

export default rest;
