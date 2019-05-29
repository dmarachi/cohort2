import City from "./City.js"
import Community from "./Community.js"

//cityName = Istanbul, latitude = -125, longitude = 258, population = 1000000, cityID = 0
test('Test the city class', () => {
	const city = new City("Istanbul", -125, 258, 1000000, 0);
	expect(city.cityName).toBe("Istanbul");
	//the next line for the show function it need to be a full string the same way it was printed in the original city.js file
	expect(city.show()).toBe("cityName: Istanbul latitude: -125 longitude: 258 population: 1000000");
	city.movedIn(10);
    expect(city.populationReturn()).toBe(1000010);
    city.movedOut(20);
    expect(city.populationReturn()).toBe(999990);
    city.howBig(999990);
    expect(city.populationReturn()).toBe(999990); 
	// city.movedOut(999980);
 //    expect(city.populationReturn()).toBe(100);
 //    city.howBig(100);
 //    expect(city.populationReturn()).toBe(100);   
 //    city.movedOut(100);
 //    expect(city.populationReturn()).toBe(10);
 //    city.howBig(10);
 //    expect(city.populationReturn()).toBe(10);   

});

test("Test the Community class", () => {
	const community = new Community;
	expect(community.createCity("Istanbul", -125, 258, 1000000, 0)).toEqual([{cityName: "Istanbul", latitude: -125, longitude: 258, population: 1000000, cityID: 0}]);
	expect(community.getPopulation()).toEqual(1000000);
	expect(community.createCity("Ankara", -100, 100, 1000, 1)).toEqual([{cityName: "Istanbul", latitude: -125, longitude: 258, population: 1000000, cityID: 0},
			 {cityName: "Ankara", latitude: -100, longitude: 100, population: 1000, cityID: 1}]);
	expect(community.getPopulation()).toEqual(1001000);
	//to test which city is most north
	expect(community.getMostNorthern()).toEqual({cityName: "Ankara", latitude: -100, longitude: 100, population: 1000, cityID: 1});
	//to test which city is most south
	expect(community.getMostSouthern()).toEqual({cityName: "Istanbul", latitude: -125, longitude: 258, population: 1000000, cityID: 0});
	//to test the which Sphere
	expect(community.whichSphere(1)).toEqual("South");
	//to test find the city by index
	expect(community.findCityIndex(0)).toEqual(0);
	expect(community.findCityIndex(1)).toEqual(1);
	//to test delete the city
	expect(community.deleteCity(1)).toEqual([{cityName: "Istanbul", latitude: -125, longitude: 258, population: 1000000, cityID: 0}]);
	expect(community.deleteCity(0)).toEqual([]); //so that no city is left in the array which is right now empty
	// expect(community.deleteCity(1)).toEqual([{cityName: "Istanbul", latitude: -125, longitude: 258, population: 1000000, cityID: 0}]);
	
});

test("test the objects", () => {
	const city = new City("myCity", 8, 4, 120);
	expect(city.show()).toEqual("cityName: myCity latitude: 8 longitude: 4 population: 120");
	expect(city.population).toEqual(120);
	let myFav = city;
	city.movedIn(100);
    expect(myFav.populationReturn()).toBe(220);
	// let myCity = myFav;
	city.movedIn(100);
    expect(myFav.populationReturn()).toBe(320);
});