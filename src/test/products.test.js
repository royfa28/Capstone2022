import request from "supertest";
import app from "../../server";

const productData = {
    productTitle: "Test game",
    productPrice: 40,
    productDescription: "This is just a test",
    productGenre: "Testing",
    productPlatform: "Anywhere",
}

describe("Test products list", () => {

    describe("when passed a username and password", () => {
        test("should respond with a 200 status code", async () => {
          const response = await request(app).get("/products")
          expect(response.statusCode).toBe(200)
        })
      })

    // beforeAll(async () => {
    //     await mongoose.connect(
    //         `mongodb+srv://royfelix:Royfelix2802@games2sell.lmxutq1.mongodb.net/MyDatabase?retryWrites=true&w=majority`, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
    //             if (err) {
    //                 console.error(err);
    //                 process.exit(1);
    //             }
    //         });
    // });

    // it('Create & save product successfully', async () => {
    //     const validProduct = new productModel(productData);
    //     const savedProduct = await validProduct.save();
    //     // Object Id should be defined when successfully saved to MongoDB.
    //     expect(savedProduct._id).toBeDefined();
    //     expect(savedProduct.productTitle).toBe(productData.productTitle);
    //     expect(savedProduct.productPrice).toBe(productData.productPrice);
    //     expect(savedProduct.productDescription).toBe(productData.productDescription);
    //     expect(savedProduct.productGenre).toBe(productData.productGenre);
    //     expect(savedProduct.productGenre).toBe(productData.productGenre);
    // });
    // eslint-disable-next-line jest/valid-title

    // it('should find all tasks', () => {
    //     return productModel.getProducts()
    //         .then(tasks => {
    //             expect(tasks.length).to.equal(1)
    //             expect(tasks[0].name).to.equal('test')
    //         })
    // })
});