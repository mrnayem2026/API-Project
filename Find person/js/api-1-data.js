const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"]
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"]
      },
      age: 33,
      isMale: false,
      address: {
        street: "454/A St Lucia",
        house: 25,
      },
    },
    {
      name: {
        common: "Golam",
        fullName: ["Golam", "Kabir"]
      },
      age: 34,
      isMale: false,
      address: {
        street: "25/A St Lucia",
        house: 22,
      },
    },
  ]
};

// displayInfo function start 

displayInfo = (cardName,cardAge,cardStreet,indexNumber) => {
  document.getElementById(cardName).innerText = person.result[indexNumber].name.common;
  document.getElementById(cardAge).innerText = person.result[indexNumber].age;
  let h = document.getElementById(cardStreet).innerText = person.result[indexNumber].address.street;
  console.log(h);
}
// displayInfo function end

// card one  start
displayInfo('cardOneName','cardOneAge','cardOneStreet',0)
// card one  end

//card Tow   start
displayInfo('cardTowneName','cardTowAge','cardTowStreet',1)
//card Tow   end

// card There start
displayInfo('cardThereName','cardThereAge','cardThereStreet',2)
// card There  end
