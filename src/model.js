// transport, bed, and fun are categories of emissions factors
// each of them store an array as a value
// inside the arrays there are objects which represent emissions factors
// each emissions factor object has 3 values:
//   name which is the name of the emissions factor
//   ef which is the actual numerical emissions factor
//     This figure will be multipled by a parameter
//   unit is the unit the parameter mentioned above should be in
//   some emissions factor objects may have an additional value called aditUnit which signifies that there is an additional parameter

const EMISSIONS_FACTORS = {
  transport: [
    {
      name: "automobile",
      ef: 0.463,
      unit: "km",
    },
    {
      name: "bus",
      ef: 0.1234,
      unit: "km",
    }
  ],
  bed: [
    {
      name: "Hotel",
      ef: 17.98,
      unit: "night",
      aditUnit: "person"
    },
    {
      name: "Camping",
      ef: 0.202,
      unit: "USD"
    }
  ],
  fun: [
    {
      name: "Amusement Park",
      ef: 0.166,
      unit: "USD"
    },
    {
      name: "Arcade",
      ef: 0.166,
      unit: "USD"
    },
    {
      name: "Golf Course",
      ef: 0.304,
      unit: "USD"
    },
    {
      name: "Ski Resort",
      ef: 0.304,
      unit: "USD"
    },
    {
      name: "Rec Center",
      ef: 0.304,
      unit: "USD"
    },
    {
      name: "Movies",
      ef: 0.05,
      unit: "USD"
    },
    {
      name: "Museum",
      ef: 0.203,
      unit: "USD"
    },
    {
      name: "Historical Site",
      ef: 0.203,
      unit: "USD"
    },
    {
      name: "Zoo",
      ef: 0.203,
      unit: "USD"
    },
    {
      name: "Park",
      ef: 0.203,
      unit: "USD"
    },
    {
      name: "Performance",
      ef: 0.087,
      unit: "USD"
    },
    {
      name: "Sightseeing",
      ef: 0.295,
      unit: "USD"
    },
    {
      name: "Sports",
      ef: 0.071,
      unit: "USD"
    }
  ],
}

export default EMISSIONS_FACTORS;