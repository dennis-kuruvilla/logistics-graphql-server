const { ApolloServer, gql } = require('apollo-server')


const typeDefs = gql`


type Products { ProductDetails: Product  RequiredQuantity: String }

type Location { lat: Float lng: Float }

type Destination { location: Location }

type Origin { location: Location }

type Request { travelMode: String
  unitSystem: Int
  destination: Destination
  origin: Origin }

type OverviewPath { lat: Float lng: Float }

type EndPoint { lat: Float lng: Float }

type StartPoint { lat: Float lng: Float }

type LatLngs { lat: Float lng: Float }

type Path { lat: Float lng: Float }

type StartLocation { lat: Float lng: Float }

type Polyline { points: String }

type EndLocation { lat: Float lng: Float }

type Duration { text: String value: Int }

type Distance { text: String value: Int }

type Steps { travel_mode: String
  encoded_lat_lngs: String
  instructions: String
  maneuver: String
  end_point: EndPoint
  start_point: StartPoint
  lat_lngs: [LatLngs ]
  path: [Path ]
  start_location: StartLocation
  polyline: Polyline
  end_location: EndLocation
  duration: Duration
  distance: Distance }

type Legs { end_address: String
  start_address: String
  via_waypoints: [String ]
  via_waypoint: [String ]
  traffic_speed_entry: [String ]
  steps: [Steps ]
  start_location: StartLocation
  end_location: EndLocation
  duration: Duration
  distance: Distance }

type Bounds { south: Float west: Float north: Float east: Float }

type Routes { copyrights: String
  overview_polyline: String
  summary: String
  overview_path: [OverviewPath ]
  waypoint_order: [String ]
  warnings: [String ]
  legs: [Legs ]
  bounds: Bounds }

type GeocodedWaypoints { geocoder_status: String
  place_id: String
  types: [String ] }

type GoogleData { status: String
  request: Request
  routes: [Routes ]
  geocoded_waypoints: [GeocodedWaypoints ] }


type ToCord { lat: Float lng: Float }

type FromCord { lat: Float lng: Float }

type Shipment { status: String
  age: String
  fromAddr: String
  fromDC: String
  toAddr: String
  toWSLR: String
  distance: String
  Products: [Products ]
  googleData: GoogleData
  carrier: String
  toCord: ToCord
  fromCord: FromCord
  creationTime: String
 }



type Product { 
  _id: String
  id: Int
  name: String
  description: String
  price: Int
  quantity: Int
   }

type Person {
    name: String
    phone: String
    street: String
    city: String
    id: ID
    
  }

type Query {
    personCount: Int!
    allPersons: [Person!]!
    findPerson(name: String!): Person
  }



type Mutation {
    addPerson(
    input: String!
    ): [Person]

    addShipment(
        input: InputShipment
    ): Shipment
  }

  
`
module.exports= typeDefs;

// input Address{
//     street: String
//     city: String
//   }

// input PersonInput{
//     name: String
//     phone: String
//     address: Address
//   }
