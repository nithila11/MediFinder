import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import GoogleMapReact from "google-map-react";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

export default class Location extends React.Component {
  constructor(props) {
    super();
    this.state = {
      latitude: 24.723456,
      longitude: 46.70095,
      pharmacies: [],
      selectedPharmacyId: null,
      markerClicked: false,
      searchText: "",
      distance: 40,
    };
  }
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          pharmacies: pharmacyData,
        });
      },
      (error) => {
        console.log("Error Getting ");
      }
    );
  };

  header = () => {
    const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
      const deg2rad = (deg) => {
        return deg * (Math.PI / 180);
      };

      var R = 6371;
      var dlat = deg2rad(lat2 - lat1);
      var dlon = deg2rad(lon2 - lon1);
      var a =
        Math.sin(dlat / 2) * Math.sin(dlon / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dlon / 2) *
          Math.sin(dlon / 2);

      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;
      return d;
    };
    const handleSearch = () => {
      const filteredPharamacies = pharmacyData.filter((p) => {
        const distance = getDistanceFromLatLonInKm(
          this.state.latitude,
          this.state.longitude,
          p.latitude,
          p.longitude
        );

        return (
          p.name.toLowerCase().includes(this.state.searchText.toLowerCase()) &&
          distance < this.state.distance
        );
      });

      this.setState({
        pharmacies: filteredPharamacies,
      });
    };

    const resetAll = () => {
      this.setState({
        pharmacies: pharmacyData,
        distance: 40,
        searchText: "",
      });
    };
    return (
      <div style={{ marginBottom: 13, marginTop: 13 }}>
        <Typography
          variant="h4"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          PHARMASEARCH
        </Typography>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 3 }}
        >
          <TextField
            label="Search for a Pharmacy..."
            variant="outlined"
            value={this.state.searchText}
            style={{ width: "30%" }}
            onChange={(event) => {
              this.setState({ searchText: event.target.value });
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography style={{ marginRight: "15px" }}>Distance (km)</Typography>
          <Slider
            style={{ width: "50%" }}
            value={this.state.distance}
            valueLabelDisplay="auto"
            step={5}
            marks
            min={0}
            max={50}
            onChange={(event, value) => {
              this.setState({ distance: value });
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            onClick={resetAll}
            style={{ marginRight: "15px", width: "10%" }}
          >
            <RestartAltIcon />
            Reset
          </Button>
          <Button
            variant="contained"
            onClick={handleSearch}
            style={{ width: "10%" }}
          >
            <SearchIcon />
            Search
          </Button>
        </div>
      </div>
    );
  };
  Location = () => {
    const clickedOutside = (x, y, lat, lng, event) => {
      if (this.state.markerClicked) {
        this.setState({
          selectedPharmacyId: null,
          markerClicked: false,
        });
      } else {
        console.log("Clicked on map");
      }
    };
    const handlePharmacyClick = (pharmacy) => {
      window.location.replace("/pharmacy/" + pharmacy.id);
    };
    return (
      <div style={{ height: "80vh" }}>
        <GoogleMapReact
          onClick={clickedOutside}
          bootstrapURLKeys={{ key: "AIzaSyDO9940x2Qxy4I40lEkHTWT0TF-f2ug7s0" }}
          defaultCenter={{
            lat: 6.912708886234859,
            lng: 79.85370353362987,
          }}
          defaultZoom={17}
          center={{
            lat: this.state.latitude,
            lng: this.state.longitude,
          }}
        >
          {this.state.pharmacies.map((pharmacy) => {
            return (
              <LocationOnIcon
                color={"secondary"}
                lat={pharmacy.latitude}
                lng={pharmacy.longitude}
                onClick={() => {
                  this.setState({
                    selectedPharmacyId: pharmacy.id,
                    markerClicked: true,
                  });
                }}
              />
            );
          })}
          {this.state.pharmacies.map((pharmacy) => {
            if (this.state.selectedPharmacyId === pharmacy.id) {
              return (
                <div
                  lat={pharmacy.latitude}
                  lng={pharmacy.longitude}
                  onClick={() => {
                    handlePharmacyClick(pharmacy);
                  }}
                  style={{
                    backgroundColor: "White",
                    padding: 10,
                    borderRadius: 20,
                    width: 100,
                  }}
                >
                  <Typography>{pharmacy.name}</Typography>
                </div>
              );
            } else {
              return null;
            }
          })}
          <LocationSearchingIcon
            color={"primary"}
            lat={this.state.latitude}
            lng={this.state.longitude}
          />
        </GoogleMapReact>
      </div>
    );
  };
  render() {
    return (
      <div>
        {this.header()}
        {this.Location()}
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
    longitude: 79.89497065429966
  },
];
