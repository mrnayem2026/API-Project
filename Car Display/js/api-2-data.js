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
  ];


  // Car 1  Srart
  let iamge = document.getElementById('cardOneCarImage');
  iamge.src = data[0].imageURL;
  
  
 document.getElementById('cardOneCarName').innerText = data[0].name;
 document.getElementById('cardOneCarDitels').innerText = data[0].description;
  let name = document.getElementById('cardOneCarPrice').innerText = data[0].price;

  // Car 1  End