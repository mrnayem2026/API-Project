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
        street: "13/A St Lucia",
        house: 11,
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

// card one  start
let h= document.getElementById('cardOneName').innerText = person.result[0].name.common;
console.log(h);
// card one  end