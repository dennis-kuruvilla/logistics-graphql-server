const { ApolloServer, gql } = require('apollo-server')
const typeDefs = require('./GQLSchema');
const inputtypeDefs= require('./InputTypes');
const {Product,Shipment} = require('./Mongo')
console.log(Product,Shipment)

//to enable old playground
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');


let persons = [
  {
    name: "Arto Hellas",
    phone: "040-123543",
    street: "Tapiolankatu 5 A",
    city: "Espoo",
    id: "3d594650-3436-11e9-bc57-8b80ba54c431",
  
  },
  {
    name: "Matti Luukkainen",
    phone: "040-432342",
    street: "Malminkaari 10 A",
    city: "Helsinki",
    id: '3d599470-3436-11e9-bc57-8b80ba54c431',
   
  },
  {
    name: "Venla Ruuska",
    street: "Nallemäentie 22 C",
    city: "Helsinki",
    id: '3d599471-3436-11e9-bc57-8b80ba54c431',
    
  },
]


const resolvers = {
  //following is a 'default resolver' , in order to populate the product into the productID
  Products: {
        ProductDetails: async (root) => {
          let product = await Product.findById(root.ProductDetails)
          // console.log(product)
          return product
        } 
  },
  Query: {
    personCount: () => persons.length,
    allPersons: () => persons,
    findPerson: (root, args) =>
      persons.find(p => p.name === args.name)
  },
   Mutation: {
    addPerson: (root, args) => {
      // const person = { ...args, id: uuid() }
      // persons = persons.concat(person)
      console.log("ARGS:",args)
      console.log("persons:",persons)
      return persons
    },

    addShipment: async (root,args) => {
      console.log("ARGS:",args.input)
      let shipment= args.input
      shipment = {...shipment, creationTime: String(new Date())}
      console.log(shipment)
      const mongoshipment = new Shipment({
        age: shipment.age,
        fromAddr:shipment.fromAddr,
        toAddr: shipment.toAddr,
        toWSLR: shipment.toWSLR,
        distance: shipment.distance,
        Products: shipment.Products,
        carrier: shipment.carrier,
        toCord: shipment.toCord,
        fromCord: shipment.fromCord,
        creationTime: shipment.creationTime
       })
       result = await mongoshipment.save()
       console.log("result::",result)

      return result
    }
  }
}

const server = new ApolloServer({
  typeDefs: [typeDefs,inputtypeDefs],
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground()
  ]
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})