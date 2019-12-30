import React from 'react';
import logo from './logo.svg';
import './App.css';

// Including the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Including the fusioncharts library
import FusionCharts from 'fusioncharts';

// Including the map renderer
import FusionMaps from 'fusioncharts/fusioncharts.maps';

// Including the map definition file
import World from 'fusioncharts/maps/fusioncharts.world';

import USA from 'fusioncharts/maps/fusioncharts.usa';

import California from 'fusionmaps/maps/fusioncharts.california';

import NewHampshire from 'fusionmaps/maps/fusioncharts.newhampshire';

// Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the map as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, FusionMaps, World, USA, California, NewHampshire, FusionTheme);

// Creating the JSON object to store the map configurations
const chartConfigs = {
    type: 'world',
    width: '800',
    height: '550',
    dataFormat: 'json',
    dataSource: {
    // Map Configuration
        "chart": {
                "caption": "Average Annual Population Growth",
                "subcaption": " 1955-2015",
                "numbersuffix": "%",
                "includevalueinlabels": "1",
                "labelsepchar": ": ",
                "entityFillHoverColor": "#FFF9C4",
                "theme": "fusion"
        },
        // Aesthetics; ranges synced with the slider
        "colorrange": {
            "minvalue": "0",
            "code": "#FFE0B2",
            "gradient": "1",
            "color": [{
                "minvalue": "0.5",
                "maxvalue": "1.0",
                "color": "#FFD74D"
            }, {
                "minvalue": "1.0",
                "maxvalue": "2.0",
                "color": "#FB8C00"
            }, {
                "minvalue": "2.0",
                "maxvalue": "3.0",
                "color": "#E65100"
            }]
        },
        // Source data as JSON --> id represents countries of world.
        "data": [{
            "id": "NA",
            "value": ".82",
            "showLabel": "1"
        }, {
            "id": "SA",
            "value": "2.04",
            "showLabel": "1"
        }, {
            "id": "AS",
            "value": "1.78",
            "showLabel": "1"
        }, {
            "id": "EU",
            "value": ".40",
            "showLabel": "1"
        }, {
            "id": "AF",
            "value": "2.58",
            "showLabel": "1"
        }, {
            "id": "AU",
            "value": "1.30",
            "showLabel": "1"
        }]
    }
}

const chartStateMapConfigs = {
  type: 'maps/california',
  width: '800',
  height: '550',
  dataFormat: 'json',
  dataSource: {
      "chart": {
          "animation": "0",
          "showbevel": "0",
          "usehovercolor": "1",
          "showlegend": "1",
          "legendposition": "BOTTOM",
          "legendborderalpha": "0",
          "legendbordercolor": "ffffff",
          "legendallowdrag": "0",
          "legendshadow": "0",
          "caption": "Website Visits for the month of March 2018",
          "connectorcolor": "000000",
          "fillalpha": "80",
          "hovercolor": "CCCCCC",
          "theme": "fusion"
      },
      "colorrange": {
          "minvalue": "0",
          "startlabel": "Low",
          "endlabel": "High",
          "code": "e44a00",
          "gradient": "1",
          "color": [{"maxvalue": "2500", "code": "f8bd19"}, {"maxvalue": "5000", "code": "6baa01"}]
      },
      "data": [{"id":"001","value":2834},{"id":"003","value":3182},{"id":"005","value":3280},{"id":"007","value":911},{"id":"009","value":292},{"id":"011","value":530},{"id":"013","value":2515},{"id":"015","value":728},{"id":"017","value":1974},{"id":"019","value":848},{"id":"021","value":3278},{"id":"023","value":4463},{"id":"025","value":1198},{"id":"027","value":378},{"id":"029","value":2610},{"id":"031","value":1200},{"id":"033","value":3820},{"id":"035","value":940},{"id":"037","value":3416},{"id":"039","value":4004},{"id":"041","value":1604},{"id":"043","value":4011},{"id":"045","value":3203},{"id":"047","value":3775},{"id":"049","value":2721},{"id":"051","value":3417},{"id":"053","value":1530},{"id":"055","value":412},{"id":"057","value":3434},{"id":"059","value":1670},{"id":"061","value":1274},{"id":"063","value":4339},{"id":"065","value":2073},{"id":"067","value":1018},{"id":"069","value":3967},{"id":"071","value":3401},{"id":"073","value":3307},{"id":"075","value":1938},{"id":"077","value":489},{"id":"079","value":3207},{"id":"081","value":2295},{"id":"083","value":2747},{"id":"085","value":1114},{"id":"087","value":3400},{"id":"089","value":784},{"id":"091","value":1673},{"id":"093","value":4274},{"id":"095","value":4509},{"id":"097","value":3862},{"id":"099","value":1356},{"id":"101","value":4126},{"id":"103","value":1314},{"id":"105","value":1807},{"id":"107","value":4026},{"id":"109","value":3456},{"id":"111","value":1393},{"id":"113","value":1500},{"id":"115","value":2218}]
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Sample Fusion Charts Maps React App</h1>
      </header>
      <div className="chart-wrapper">
      <ReactFC {...chartConfigs}/>
      </div>
      <div className="chart-wrapper">
      <ReactFC {...chartStateMapConfigs}/>
      </div>
    </div>
  );
}

export default App;
