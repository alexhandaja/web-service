// Import the express library and assign it to a variable
import { WeverseClient } from "weverse";
const myClient = new WeverseClient({token: 'my-access-token'})
import express from 'express'
import fetch from 'node-fetch'

// Create an instance of an express application 
const app = express()
app.use(express.json())

// Set the port the application will be running on
const port = process.env.PORT || 3001

// Set up a response for the root path of the application
app.get('/community', (req, res) => {

  myClient.communities.forEach(community => {
    // typesafe objects with autocompletion
    const details = {
        name: community.name,
        posts: community.posts.length
    }
}
  )})

app.get('/name/:name', (req, res) => {
  console.log(req.params)
  res.json({ data: "idk this is name." })
})

// Example of an application route that makes a request to another server
app.get('/advice', async (req, res) => {
  // Make a request to another wbesite and wait for a response
  const response = await fetch('https://api.adviceslip.com/advice')

  // Read the response
  const body = await response.json()

  // Print the repsonse body to the console
  console.log(body)

  // Get the advice text string from the response body object
  const advice = body.slip.advice

  res.json({ data: advice })
})

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})