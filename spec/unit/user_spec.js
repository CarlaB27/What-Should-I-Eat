const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;

describe("User", () => {
    beforeEach((done) => {
        sequelize.sync({ force: true })
            .then(() => {
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });
    });
    //create suite
    describe("#create()", () => {
        it("should create a User object with a valid email and password", (done) => {
            User.create({
                email: "example@example.com",
                password: "number1",
                username: "Mr Example"
            })
                .then((user) => {
                    expect(user.email).toBe("example@example.com");
                    expect(user.id).toBe(1);
                    done();
                })
                .catch((err) => {
                    console.log(err);
                    done();
                });
        });

        it("should not create a User with invalid email or password", (done) => {
            User.create({
                email: "this-wont_work",
                password: "yay",
                username: "Mr Example"
            })
                .then((user) => {
                    done();
                })
                .catch((err) => {
                    expect(err.message).toContain("Error: must be a valid email");
                    console.log(err);
                    done();
                });
        });

        it("should not create a User with an email already taken", (done) => {
            User.create({
                email: "example@example.com",
                password: "number1",
                username: "Mr Example 1"
            })
                .then((user) => {
                    User.create({
                        email: "example@example.com",
                        password: "number2",
                        username: "Mr Example 2"
                    })
                        .then((user) => {
                            done();
                        })
                        .catch((err) => {
                            expect(err.message).toContain("Error: email already in use");
                            console.log(err);
                            done();
                        });
                    done();
                })
                .catch((err) => {
                    console.log(err);
                    done();
                });
        });
    });


});