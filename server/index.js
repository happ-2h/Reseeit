import express   from 'express';
import cors      from 'cors';
import { query } from './db/index.js';
import 'dotenv/config';

const port = process.env.PORT || 3006;

const app = express();

// Express settings
app.disable("x-powered-by");

// Middleware
app.use(cors());
app.use(express.json());

// Get all products
app.get('/api/v1/products', async (req, res) => {
  try {
    const products = await query("SELECT * FROM products");

    if (products.rowCount === 0) {
      res.status(404).json({
        status: "Not Found"
      });
    }
    else {
      res.status(200).json({
        status: "success",
        length: products.rowCount,
        data: {
          products: products.rows
        }
      });
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

// Get one product
app.get('/api/v1/products/:id', async (req, res) => {
  try {
    const product =
      await query("SELECT * FROM products WHERE id = $1", [req.params.id]);

    if (product.rowCount === 0) {
      res.status(404).json({
        status: "Not Found"
      });
    }
    else {
      res.status(200).json({
        status: "success",
        data: {
          products: product.rows[0]
        }
      });
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

// Create a new entry
app.post('/api/v1/products', async (req, res) => {
  try {
    const results =
      await query("INSERT INTO products (date_purchased, name, price_purchased, condition, category) VALUES ($1, $2, $3, $4, $5) RETURNING *", [
      req.body.date_purchased,
      req.body.name,
      req.body.price_purchased,
      req.body.condition,
      req.body.category
    ]);

    if (results.rowCount === 0) {
      res.status(502).json({
        status: "Bad Gateway"
      });
    }
    else {
      res.status(201).json({
        status: "success",
        data: {
          product: results.rows[0]
        }
      });
    }
  } catch (error) {
    res.status(400).send("Bad Request");
  }
});

// Update an entry
app.put('/api/v1/products/:id', async (req, res) => {
  try {
    const results =
      await query("UPDATE products SET date_purchased = $1, name = $2, price_purchased = $3, condition = $4, category = $5 WHERE id = $6 RETURNING *", [
      req.body.date_purchased,
      req.body.name,
      req.body.price_purchased,
      req.body.condition,
      req.body.category,
      req.params.id
    ]);

    if (results.rowCount === 0) {
      res.status(400).json({
        status: "Bad Request"
      });
    }
    else {
      res.status(200).json({
        status: "success",
        data: {
          product: results.rows[0]
        }
      });
    }
  } catch (error) {
    res.status(500).send("Internal Error");
  }
});

// Delete an entry
app.delete('/api/v1/products/:id', async (req, res) => {
  try {
    const results = await query("DELETE FROM products WHERE id = $1", [req.params.id]);

    if (results.rowCount === 0)
      res.status(404).json({
        status: "Not Found"
      });
    else
      res.status(204).json({
        status: "success"
      });
  } catch (error) {
    res.status(500).send("Internal Error");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server started on *:${port}`);
});