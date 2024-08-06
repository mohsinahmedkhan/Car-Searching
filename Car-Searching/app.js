var cars = {
    Honda: {
        City: {
            carName: "Honda City",
            model: "2024",
            fuelType: "Petrol",
            engine: "6000 RPM",
            SeatCapacity: "5 Seater",
            fuelTankCapacity: "40 L",
            image: "images/Honda City.jpg"
        },
        Accord: {
            carName: "Honda Accord",
            model: "2023",
            fuelType: "Petrol",
            engine: "1.5L",
            SeatCapacity: "5 Seater",
            fuelTankCapacity: "56 L",
            image: "images/Honda Accord.avif"
        },
        Civic: {
            carName: "Honda civic",
            model: "2024",
            fuelType: "Petrol",
            engine: "2.0L",
            SeatCapacity: "5 Seater",
            fuelTankCapacity: "47 L",
            image: "images/Honda Civic.jpg"
        },
        Jazz: {
            carName: "Honda jazz",
            model: "2024",
            fuelType: "Petrol",
            engine: "1.2L",
            SeatCapacity: "5 Seater",
            fuelTankCapacity: "40 L",
            image: "images/Honda Jazz.png"
        }
    },
    Suzuki: {
        Swift: {
            carName: "Suzuki Swift",
            model: "2024",
            fuelType: "Petrol",
            engine: "1.2L",
            SeatCapacity: "5 Seater",
            fuelTankCapacity: "37 L",
            image: "images/Suzuki Swift.jpg"
        },
        Ciaz: {
            carName: "Suzuki Ciaz",
            model: "2023",
            fuelType: "Petrol",
            engine: "1.5L",
            SeatCapacity: "5 Seater",
            fuelTankCapacity: "45 L",
            image: "images/Suzuki Ciaz.jpg"
        },
        Alto: {
            carName: "Suzuki alto",
            model: "2024",
            fuelType: "Petrol",
            engine: "0.8L",
            SeatCapacity: "4 Seater",
            fuelTankCapacity: "35 L",
            image: "images/Suzuki Alto.jpg"

        },
        Baleno: {
            carName: "Suzuki baleno",
            model: "2023",
            fuelType: "Petrol",
            engine: "1.2L",
            SeatCapacity: "5 Seater",
            fuelTankCapacity: "37 L",
            image: "images/Suzuki Baleno.webp"
        }
    },
    Toyota: {
        Vigo: {
            carName: "Toyota Vigo",
            model: "2020",
            fuelType: "Petrol",
            engine: "10L",
            SeatCapacity: "9 Seater",
            fuelTankCapacity: "100 L",
            image: "images/Toyota Vigo.jpg"
        },
        Corolla: {
            carName: "Toyota Corolla",
            model: "2023",
            fuelType: "Petrol",
            engine: "1.8L",
            SeatCapacity: "5 Seater",
            fuelTankCapacity: "30 L",
            image: "images/Toyota Corolla.png"
        },
        Supra: {
            carName: "Toyota Supra",
            model: "2023",
            fuelType: "Petrol",
            engine: "25L",
            SeatCapacity: "2 Seater",
            fuelTankCapacity: "25 L",
            image: "images/Toyota Supra.png"

        },
        Fortuner: {
            carName: "Toyota Fortuner",
            model: "2025",
            fuelType: "Diesel",
            engine: "2.8L",
            SeatCapacity: "7 Seater",
            fuelTankCapacity: "80 L",
            image: "images/Toyota Fortuner.webp"
        }
    },
    Ford: {
        Mustang: {
            carName: "Ford Mustang",
            model: "2015",
            fuelType: "Diesel",
            engine: "99.8L",
            SeatCapacity: "2 Seater",
            fuelTankCapacity: "150 L",
            image: "images/Ford Mustang.avif"
        },
        Fiesta: {
            carName: "Ford Fiesta",
            model: "2000",
            fuelType: "Petrol",
            engine: "2.5CC",
            SeatCapacity: "4 Seater",
            fuelTankCapacity: "100 L",
            image: "images/Ford Fiesta.avif"
        },
        Explorer: {
            carName: "Ford Explorer",
            model: "2018",
            fuelType: "Diesel",
            engine: "120l",
            SeatCapacity: "2 Seater",
            fuelTankCapacity: "180 L",
            image: "images/Ford Explorer.webp"
        },
        Fusion: {
            carName: "Ford Fusion",
            model: "2006",
            fuelType: "Petrol",
            engine: "1000CC",
            SeatCapacity: "4 Seater",
            fuelTankCapacity: "250 L",
            image: "images/Ford Fusion.webp"
        }
    },
    Audi: {
        AudiA3: {
          carName: "Audi A3",
          model: "2019",
          fuelType: "Diesel",
          engine: "2018L",
          SeatCapacity: "4 Seater",
          fuelTankCapacity: "90 L",
          image: "images/Audi A3.png"
        },
        AudiA4: {
          carName: "Audi A4",
          model: "2018",
          fuelType: "Petrol",
          engine: "108L",
          SeatCapacity: "4 Seater",
          fuelTankCapacity: "120 L",
          image: "images/Audi A4.webp"
        },
        AudiQ5: {
          carName: "Audi Q5",
          model: "2021",
          fuelType: "Diesel",
          engine: "998L",
          SeatCapacity: "2 Seater",
          fuelTankCapacity: "50 L",
          image: "images/Audi Q5.webp"
        },
        AudiA6: {
          carName: "Audi A6",
          model: "2020",
          fuelType: "Petrol",
          engine: "9.8L",
          SeatCapacity: "2 Seater",
          fuelTankCapacity: "650 L",
          image: "images/Audi A6.jpg"
        }
      }
}

var company = document.getElementById("company");
var model = document.getElementById("model");

for (var key in cars) {
    company.innerHTML += `<option value="${key}">${key}</option>`;
}

function selectCompany() {
    model.innerHTML = `<option value="">Select Model</option>`
    for (var key in cars[company.value]) {
        model.innerHTML += `<option value="${key}">${key}</option>`;
    }
}

function searchBtn() {
    var selectCompany = company.value;
    var selectModel = model.value;
    if (selectCompany && selectModel) {
        var carDetails = cars[selectCompany][selectModel];
        var carImg = document.getElementById("carImg");

        carImg.innerHTML = `<img class='carbox'src="${carDetails.image}" alt="">
        <div class='para'>
        <p>Car Name: ${carDetails.carName}</p>
        <p>Model Name: ${carDetails.model}</p>
        <p>Fuel Type: ${carDetails.fuelType}</p>
        <p>Engine: ${carDetails.engine}</p>
        <p>Seat Capacity: ${carDetails.SeatCapacity}</p>
        <p>Fuel Tank Capacity: ${carDetails.fuelTankCapacity}</p>
        </div>
        `
    }
}
