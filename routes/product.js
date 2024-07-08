import express from 'express';
import Product from '../model/Product.js';
import fetchUser from '../middleware/fetchuser.js';
const router = express.Router();

router.get('/fetchallproducts', fetchUser, async (req, res) => {
    try {
        const product = await Product.find({ user: req.userId });
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})

router.post('/addproduct', fetchUser, async (req, res) => {
    try {
        //* data comimg from body(frontend)
        const {  id, image, title ,brands , price  } = req.body

        //* validation 
        if (!id || !image || !title || !brands || !price) {
            return res.status(400).json({ error: "All fields are required" });
        }

        //* Notes
        const product = new Product({ id, image, price, title ,brands, user: req.userId });
        
        //* saving notes
        const savedproduct = await product.save();
        res.json(savedproduct);

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})

router.delete('/deleteproduct/:id', fetchUser, async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if(!product) {return res.status(404).json().send("Not  found")};

        if (product.user.toString() !== req.userId) {
            return res.status(401).send("Not Allowed");
        }

        product = await Product.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted"});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


export default router