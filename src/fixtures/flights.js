const FlightList = {
  flights: [
    {
      id: "SG142",
      travel: "BLR-DEL",
      time: "21:10",
      passengers: [
        {
          id: "1",
          name: "Raj",
          ancillary: "BaggageFee",
          Age: "25",
          seat: 5
        },
        {
          id: "2",
          name: "Gopal",
          ancillary: "BaggageFee",
          Age: "27",
          seat: 8
        },
        {
          id: "3",
          name: "Anjana",
          ancillary: "BaggageFee",
          Age: "30",
          seat: 9
        },
        {
          id: "4",
          name: "Mani",
          ancillary: "BaggageFee",
          Age: "50",
          seat: 3
        }
      ],
      totalseats: 10,
      allocatedseats: 0,
      unallocatedseats: 10
    },
    {
      id: "SG143",
      travel: "BLR-KOC",
      time: "22:10",
      passengers: [
        {
          id: "1",
          name: "Meena",
          ancillary: "BaggageFee",
          Age: "25",
          seat: 6
        },
        {
          id: "2",
          name: "Dheena",
          ancillary: "BaggageFee",
          Age: "27",
          seat: 5
        },
        {
          id: "3",
          name: "Reena",
          ancillary: "BaggageFee",
          Age: "30",
          seat: 8
        }
      ],
      totalseats: 10,
      allocatedseats: 0,
      unallocatedseats: 10
    },
    {
      id: "SG144",
      travel: "BLR-CBE",
      time: "23:10",
      passengers: [
        {
          id: "1",
          name: "Benny",
          ancillary: "BaggageFee",
          Age: "25",
          seat: 9
        },
        {
          id: "2",
          name: "Mouney",
          ancillary: "BaggageFee",
          Age: "27",
          seat: 5
        },
        {
          id: "3",
          name: "Venny",
          ancillary: "BaggageFee",
          Age: "30",
          seat: 2
        }
      ],
      totalseats: 10,
      allocatedseats: 0,
      unallocatedseats: 10
    }
  ]
};

export { FlightList as default };
