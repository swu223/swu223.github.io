mapboxgl.accessToken = config.MAPBOX_KEY;
		
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14
});

const listOfBuses = [];
const listOfMarkers = [];

async function run(){
  // get bus data    
  const locations = await getBusLocations();
  // assign a marker for each bus's latitude and longitude data
  let busOff = [];

  
  for (let i = 0; i < locations.length; i++){
    console.log(locations[i]);
    let busID = locations[i].id;
    let inListOfBuses = listOfBuses.includes(busID);
    // will return the marker with the busID
    let inListOfMarkers = listOfMarkers.find((element) => element[0] === busID);

    // if bus exists, change the markers
    if (listOfBuses.includes(busID)){
      if (inListOfMarkers !== undefined){
      // change the marker's location
        let marker = inListOfMarkers[1];
        marker.setLngLat([locations[i].attributes.longitude, locations[i].attributes.latitude]);
      }
    } 
    
    // if bus does not exist yet, create a new marker
    else {
      let marker = new mapboxgl.Marker()
      .setLngLat([locations[i].attributes.longitude, locations[i].attributes.latitude])
      .addTo(map);

      listOfMarkers.push([locations[i].id, marker]);
      listOfBuses.push(locations[i].id);
    };
  }

  // timer
  setTimeout(run, 5000);
}





// Request bus data from MBTA
async function getBusLocations(){
  const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
  const response = await fetch(url);
  const json     = await response.json();
  return json.data;
}


