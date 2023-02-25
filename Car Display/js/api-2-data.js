const data = [
    {
      _id: "60795d4e0489a32f948c4167",
      name: "Honda Sedan",
      price: "13200$",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
      imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
      _id: "60795e440489a32f948c4168",
      name: "MitoSedan",
      price: "22145$",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
    {
      _id: "60795fc20489a32f948c4169",
      name: "Isuzu Tacoma",
      price: "10545$",
      description:
        "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },
    {
      _id: "6079615d0489a32f948c416a",
      name: "Chevrolet Crossover",
      price: "43465$",
      description:
        "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
        imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
      _id: "6079615d0489a32f948c416a",
      name: "Chevrolet Crossover",
      price: "43465$",
      description:
        "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
        imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },
    {
      _id: "6079615d0489a32f948c416a",
      name: "Chevrolet Crossover",
      price: "43465$",
      description:
        "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
        imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
  ];



  // Display Info of Car <Start>
  const displayCarInfo = (carImage,carName,CarDitels,CarPrice,indexNumber) => {
    let iamge = document.getElementById(carImage);
    iamge.src = data[indexNumber].imageURL;
   document.getElementById(carName).innerText = data[indexNumber].name;
   document.getElementById(CarDitels).innerText = data[indexNumber].description;
 document.getElementById(CarPrice).innerText = data[indexNumber].price;
  }
  // Display Info of Car <End>
  
  
  // Car 1  Srart
  displayCarInfo('cardOneCarImage','cardOneCarName','cardOneCarDitels','cardOneCarPrice',0)
  // Car 1  End

  // Car 2  Srart
  displayCarInfo('cardTOWCarImage','cardTOWCarName','cardTOWCarDitels','cardTOWCarPrice',1)

  // Car 2  End

  // Car 3  Srart
  displayCarInfo('cardThereCarImage','cardThereCarName','cardThereCarDitels','cardThereCarPrice',2)
  // Car 3  End

  // Car 4  Srart
  displayCarInfo('cardThereCarImage','cardThereCarName','cardThereCarDitels','cardThereCarPrice',3)
  // Car 4  End

  // Car 5  Srart
  displayCarInfo('cardThereCarImage','cardThereCarName','cardThereCarDitels','cardThereCarPrice',4)
  // Car 5  End

  // Car 6  Srart
  displayCarInfo('cardThereCarImage','cardThereCarName','cardThereCarDitels','cardThereCarPrice',5)
  // Car 6  End


