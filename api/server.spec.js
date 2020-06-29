const request = require('supertest');
const server = require('../api/server');
const { getUsers, findUser, addUser, findUserById } = require('../auth/auth-model.js');
const db = require('../database/dbConfig');
const { getTask, getByUserId, add, update, remove, getAllTasks } = require('../todo/todo-model');




it('should run the tests', function() {
    expect(true).toBe(true);
});

describe('auth-model.js', function() {
    describe("getUsers", function() {
        it('should be equal to users', function() {
            const db = getUsers
            expect(getUsers).toEqual(db)
        })
    })
})

describe('testing todo stuff', function() {
    describe('add', function() {
        it('should return 201 code', function() {
            expect()
        })
    })
})

describe('register', () => {

    describe('/ register new user', () => {
        it('should return a 400 status code when credentials are incomplete', () =>{
            let user = {
                username: 'newUser'
            }
            return request(server)
                .post('/api/auth/register')
                .send(user)
                .then(res => {
                    expect(res.status).toBe(400)
                })
        })
    })


    describe('login', () => {

        describe('/ login', () => {
            it('should return a 401 status code when credentials are incorrect', () =>{
                let user = {
                    username: 'newUser',
                    password: '1234'
                }
                return request(server)
                    .post('/api/auth/login')
                    .send(user)
                    .then(res => {
                        expect(res.status).toBe(401)
                    })
            })
        })

    })


});





