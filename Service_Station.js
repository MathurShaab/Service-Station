class ServiceStation{
  _services =[
  {
    carType: "Hatchback",
    serviceCodes: {
      BS01: 2000,
      EF01: 5000,
      CF01: 2000,
      BF01: 1000,
      GF01: 3000,
    },
  },
  {
    carType: "Sedan",
    serviceCodes: {
      BS01: 4000,
      EF01: 8000,
      CF01: 4000,
      BF01: 1500,
      GF01: 6000,
    },
  },
  {
    carType: "SUV",
    serviceCodes: {
      BS01: 5000,
      EF01: 10000,
      CF01: 6000,
      BF01: 2500,
      GF01: 8000,
    },
  },
];

  _servicesList = {
    BS01: "Basic Servicing",
    EF01: "Engine Fixing",
    CF01: "Clutch Fixing",
    BF01: "Brake Fixing",
    GF01 : "Gear Fixing",
  }

  _orders = [];

  findPrice = (carType, serviceCode) => {
    for(let i = 0; i < this._services.length; i++) {
      if (this._services[i].carType === carType) {
        return this._services[i].serviceCodes[serviceCode];
      }
    }
  };

  findServiceByServiceCode = (serviceCode) => {
    return this._servicesList[serviceCode];
  }

  displayOrders(carType, serviceCodes) {
    console.log("Type of Car -", carType);
    let serviceCodesDisplay = "Service Codes -";
    serviceCodes.forEach((serviceCode) => {
      serviceCodesDisplay += ` ${serviceCode}`;
    });
    console.log(serviceCodesDisplay);
  }

  bookService(carType, serviceCodes) {
    this.displayOrders(carType, serviceCodes);
    serviceCodes.forEach((serviceCode) => {
      this._orders.push({
        carType,
        serviceType: this.findServiceByServiceCode(serviceCode),
        priceOfService: this.findPrice(carType, serviceCode),
      });
    });
  }

  calculateBill(carType) {
    let totalBill = 0;
 
    this._orders.forEach((order) => {
      if (carType === order.carType) {
        totalBill = totalBill + order.priceOfService;
        console.log(`Charges for ${order.serviceType} - ${order.priceOfService}`);
      }
    });

    console.log(`Total Bill - ${totalBill}`);

    if (totalBill > 10000) {
      console.log("Free Cleaning Offer");
    }
  }
  
  displayServices() {
    const servicesMap = this._services.map((service, i) => {
      return {
        carType: service.carType,
        BASIC_SERVICING: service.serviceCodes.BS01,
        ENGINE_FIXING: service.serviceCodes.EF01,
        CLUTCH_FIXING: service.serviceCodes.CF01,
        BRAKE_FIXING: service.serviceCodes.BF01,
        GEAR_FIXING: service.serviceCodes.GF01,
      };
    });
 
    console.table(servicesMap);
  }
}

  var service = new ServiceStation();
  service.bookService("Hatchback", ["BF01", "GF01"]);
  service.calculateBill("Hatchback");
  service.bookService("SUV", ["GF01"]);
  service.calculateBill("SUV");