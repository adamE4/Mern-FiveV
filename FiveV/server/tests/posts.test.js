import mongoose from 'mongoose'
import request from 'supertest'
import app from '../server'
import { Post } from '../models/Postsmodel'

import dotenv from 'dotenv'

let deletePosts = []

beforeAll(async () => {
    const dbUri = process.env.ATLAS_URI
    if (!dbUri){
        throw new Error('dbUri undefined')
    }
    await mongoose.createConnection(dbUri)
})

afterEach(async () => {
    await Post.deleteMany({ _id: {$in: deletePosts }})
    deletePosts= []
})

afterAll(async () =>{
    
    await mongoose.connection.close()
    
})

describe("POST /posts", () =>{
    
    describe("given a valid Post", () => {

        test("Should save the Post", async () =>{
            const Postdata = {
                title: "Cars",
                make: "Chevy",
                model: "Camaro",
                year: 2020,
            }
            const response = await request(app).post("/posts").send(Postdata)
            console.log(response.body)
            expect(response.statusCode).toBe(200)
            expect(response.body.title).toBe(Postdata.title)
            expect(response.body.make).toBe(Postdata.make)
            expect(response.body.model).toBe(Postdata.model)
            expect(response.body.year).toBe(Postdata.year)
      

            const saved = await Post.findById(response.body._id)
            expect(saved).not.toBeNull()
            console.log('Saved:', saved)
            expect(saved.title).toBe(Postdata.title)
            expect(saved.make).toBe(Postdata.make)
            expect(saved.model).toBe(Postdata.model)
            expect(saved.year).toBe(Postdata.year)

            deletePosts.push(saved._id)

        })
    

    })


})