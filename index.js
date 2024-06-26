// const express = require('express');
// const cors = require('cors');
// require('dotenv').config()
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const app = express();

// const port = process.env.PORT || 5000;

// // middleware 
// app.use(cors())
// app.use(express.json())

 
//   const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3hdabzk.mongodb.net/?retryWrites=true&w=majority`;
  
//   // Create a MongoClient with a MongoClientOptions object to set the Stable API version
//   const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });
  
//   async function run() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       // await client.connect();

//       const carsCollection = client.db('carsDB').collection('cars');
//       const cartsCollection = client.db('cartsDB').collection('carts');
      
//       // read 
//     // app.get('/cars', async (req, res) => {
//     //   const cursor = carsCollection.find();
//     //   const result = await cursor.toArray()
//     //   res.send(result)
//     // })

//       // find by brand 
//       app.get('/cars/:brand', async (req, res) => {
//         const brand = req.params.brand;
//         const result = await carsCollection.find({ brand: brand }).toArray();
//         res.send(result)
//       })

//       // find by id
//       app.get("/details/:id", async (req, res) => {
//         const id = req.params.id;
//         const query = {_id: new ObjectId(id),
//         };
//         const result = await carsCollection.findOne(query);
//         res.send(result);
//       });
     

//       // create 
//       app.post('/cars', async (req, res) => {
//         const car = req.body;
//         const result = await carsCollection.insertOne(car)
//         res.send(result);
//       })

//       //  update

//       //  find id for update 
//       app.get('/update/:id', async (req, res) => {
//         const id = req.params.id;
//         const query = { _id: new ObjectId(id) }
//         const result = await  carsCollection.findOne(query);
//         res.send(result);
//     })

//     //  use put method for updating 
    //   app.put('/update/:id', async (req, res) => {
    //     const id = req.params.id;
    //     const filter = { _id: new ObjectId(id) }
    //     const options = { upsert: true };
    //     const updatedCar = req.body;

    //     const car = {
    //         $set: {
    //             name: updatedCar.name,
    //             brand: updatedCar.brand,
    //             type: updatedCar.type,
    //             price: updatedCar.price,
    //             description: updatedCar.description,
    //             rating: updatedCar.rating,
    //             image: updatedCar.image
    //         }
    //     }

    //     const result = await carsCollection.updateOne(filter, car, options);
    //     res.send(result);
    //   })
      
//       // carts

//       app.post("/carts", async (req, res) => {
//         const cart = req.body;
//         const result = await  cartsCollection.insertOne(cart);
//         res.send(result);
//       });
      
//       // read data 
//       app.get('/carts', async (req, res) => {
       
//       const cursor =  cartsCollection.find( );
//       const result = await cursor.toArray()
//       res.send(result)
//       })
      
//       // delete 
//       app.delete('/carts/:id', async (req, res) => {
//         const id = req.params.id;  
//         console.log(id);
//         const query = { _id:(id) };
//         const result = await cartsCollection.deleteOne(query);
//         console.log(result);
//         res.send(result);
       
       
//     });
    

//       // Send a ping to confirm a successful connection
//       // await client.db("admin").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//       // Ensures that the client will close when you finish/error
//       // await client.close();
//     }
//   }
//   run().catch(console.dir);
  

//   app.get("/", (req, res) => {
//     res.send("Crud is running on port");
//   });
  
//   app.listen(port, () => {
//     console.log(`Crud is Running on port: ${port}`);
//   });