import mongoose from 'mongoose'
import request from 'supertest'
import app from '../server'
import { User } from '../models/Usermodel'

import dotenv from 'dotenv'

let deleteUsers = []

beforeAll(async () => {
    const dbUri = process.env.ATLAS_URI
    if (!dbUri){
        throw new Error('dbUri undefined')
    }
    await mongoose.createConnection(dbUri)
})

afterEach(async () => {
    await User.deleteMany({ _id: {$in: deleteUsers }})
    deleteUsers= []
})

afterAll(async () =>{
    
    await mongoose.connection.close()
    
})

describe("POST /user/signup", () =>{
    
    describe("given a valid User", () => {

        test("Should save user", async () =>{
            const Userdata = {
                email: 'adamelmobdy@gmail.com',
                password: '32432432ded',
            }
            const response = await request(app).post("/user/signup").send(Userdata)
            console.log(response.body)
            expect(response.statusCode).toBe(200)
            expect(response.body.email).toBe(Userdata.email)

      

            const saved = await User.findById(response._id)
            console.log('Saved:', saved)
            expect(saved.email).toBe(Userdata.email)

 

            deleteUSers.push(saved._id)

        })
    

    })


})