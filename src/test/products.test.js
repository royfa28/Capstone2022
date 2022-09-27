import Axios from "axios";
import { useMyProductsContext } from "../../context/ProductsContext";

const productContext = require("../context/ProductsContext");
var assert = require("assert");

describe("Test products list", function () {
    describe("getAllProducts", function () {
        const { getAllProducts } = useMyProductsContext();
        // eslint-disable-next-line jest/valid-title
        it("It should be correct if there are 3 products", () => {
            productContext.getAllProducts().then(function (result) {
                assert.equal(result.length, 13);
            }).catch({

            });
        });
    });
});