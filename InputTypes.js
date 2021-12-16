const { ApolloServer, gql } = require('apollo-server')


const inputtypeDefs = gql`

input Address{
    street: String
    city: String
  }

input PersonInput{
    name: String
    phone: String
    address: Address
  }
input InputProducts { ProductDetails: String RequiredQuantity: String }

input InputLocation { lat: Float lng: Float }
  
input InputDestination { location: InputLocation }
  
input InputOrigin { location: InputLocation }
  
input InputRequest { travelMode: String
    unitSystem: Int
    destination: InputDestination
    origin: InputOrigin }
  
input InputOverviewPath { lat: Float lng: Float }
  
input InputEndPoint { lat: Float lng: Float }
  
input InputStartPoint { lat: Float lng: Float }
  
input InputLatLngs { lat: Float lng: Float }
  
input InputPath { lat: Float lng: Float }
  
input InputStartLocation { lat: Float lng: Float }
  
input InputPolyline { points: String }
  
input InputEndLocation { lat: Float lng: Float }
  
input InputDuration { text: String value: Int }
  
input InputDistance { text: String value: Int }
  
input InputSteps { travel_mode: String
    encoded_lat_lngs: String
    instructions: String
    maneuver: String
    end_point: InputEndPoint
    start_point: InputStartPoint
    lat_lngs: [InputLatLngs ]
    path: [InputPath ]
    start_location: InputStartLocation
    polyline: InputPolyline
    end_location: InputEndLocation
    duration: InputDuration
    distance: InputDistance }
  
input InputLegs { end_address: String
    start_address: String
    via_waypoints: [String ]
    via_waypoint: [String ]
    traffic_speed_entry: [String ]
    steps: [InputSteps ]
    start_location: InputStartLocation
    end_location: InputEndLocation
    duration: InputDuration
    distance: InputDistance }
  
input InputBounds { south: Float west: Float north: Float east: Float }
  
input InputRoutes { copyrights: String
    overview_polyline: String
    summary: String
    overview_path: [InputOverviewPath ]
    waypoint_order: [String ]
    warnings: [String ]
    legs: [InputLegs ]
    bounds: InputBounds }
  
input InputGeocodedWaypoints { geocoder_status: String
    place_id: String
    types: [String ] }
  
input InputGoogleData { status: String
    request: InputRequest
    routes: [InputRoutes ]
    geocoded_waypoints: [InputGeocodedWaypoints ] }
  
  
input InputToCord { lat: Float lng: Float }
  
input InputFromCord { lat: Float lng: Float }
  
input InputShipment { status: String
    age: String
    fromAddr: String
    fromDC: String
    toAddr: String
    toWSLR: String
    distance: String!
    Products: [InputProducts ]
    googleData: InputGoogleData
    carrier: String
    toCord: InputToCord
    fromCord: InputFromCord }
`
module.exports= inputtypeDefs;
