import request from "supertest";
import { app } from "../src/app"


describe ('auth', () => {
    test ('returns status 403 if header auth is not mysecrettoken', async () => {
        return request(app).get('/').set('Authorization', 'wrongtoken').expect(403)
    })
    test ('returns status 200 if header auth is mysecrettoken', async () => {
        return request(app).get('/time').set('Authorization', 'mysecrettoken').expect(200)
    })
});

describe ('time', () => {
    test ('time.epoch is a number', async () => {
        const result = await request(app).get('/time').set('Authorization', 'mysecrettoken')
        const time = result.body
        expect(typeof time.epoch).toBe(typeof 1)
    })
});
