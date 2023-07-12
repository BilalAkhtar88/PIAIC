function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log(city + " is in " + country + ".");
}
describe_city("Karachi");
describe_city("Stockholm", "Sweden");
describe_city("Lahore");
