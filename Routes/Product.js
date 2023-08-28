const express = require("express");
const Product = require("../Module/Product");
const router = express.Router();

router.post("/addProduct", async (req, res) => {
  try {
    const { product_name, description, image, imageID } = req.body;

    const product = new Product({
      product_name,
      description,
      image,
      imageID,
    });

    await product.save();

    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
});

router.get("/fetchAllProduct", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
});

// Example Express.js route to update view count
router.post("/images/:imageID/view", async (req, res) => {
  const imageID = req.params.imageID;

  try {
    // Fetch the image from the database using imageID and update the view count
    const image = await Product.findOne({ imageID });
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    image.views = (image.views || 0) + 1;
    await image.save();

    res.json({ message: "View count updated successfully" ,  count : image.views });
  } catch (error) {
    console.error("Error updating view count:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
