import React from "react";

export default class Pharmacy extends React.Component {
  constructor(props) {
    super();
    this.state = {
      pharmacyName: "",
    };
  }

  componentDidMount = () => {
    const pharmacyId = window.location.pathname.split("/").pop();
    const selectedPharmacy = pharmacyData.find((p) => p.id === pharmacyId);
    if (selectedPharmacy) {
      this.setState({ pharmacyName: selectedPharmacy.name });
    } else {
      console.error("Pharmacy not found with id: ", pharmacyId);
    }
  };

  render() {
    return (
      <div>
        <h1>Pharmacy: {this.state.pharmacyName}</h1>
      </div>
    );
  }
}
let pharmacyData = [
  {
    id: "1",
    name: "Healthguard Pharmacy",
    latitude: 6.9149282375529815,
    longitude: 79.85903047994148,
  },
  {
    id: "2",
    name: "COLPETTY PHARMACY",
    latitude: 6.912308134861021,
    longitude: 79.8492672392457,
  },
  {
    id: "3",
    name: "Healthguard Pharmacy Express",
    latitude: 6.91175429015809,
    longitude: 79.85171341382998,
  },
  {
    id: "4",
    name: "CFC Healthcare Pharmacy",
    latitude: 6.917669363266108,
    longitude: 79.84884166423639,
  },
  {
    id: "5",
    name: "Remedy Pharmacy",
    latitude: 6.91899005225723,
    longitude: 79.8469963044623,
  },
  {
    id: "6",
    name: "Nawaloka Pharmacy",
    latitude: 6.920523750971359,
    longitude: 79.85375547119197,
  },
  {
    id: "7",
    name: "OsuSala Online",
    latitude: 6.917669363263105,
    longitude: 79.86006402670037,
  },
  {
    id: "8",
    name: "Liberty Pharmacy",
    latitude: 6.9112362769295395,
    longitude: 79.85206031512854,
  },
  {
    id: "9",
    name: "Union Chemists",
    latitude: 6.917839774891482,
    longitude: 79.86308955842955,
  },
  {
    id: "10",
    name: "Uni Chemist Pharmacy",
    latitude: 6.885846565864421,
    longitude: 79.85878229024974,
  },
  {
    id: "11",
    name: "Lanka Pharmacy",
    latitude: 6.91274071091188,
    longitude: 79.89497065429966,
  },
];
