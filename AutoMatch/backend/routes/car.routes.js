import express from "express"
import Car from "../index.js"
const autoRouter = express.Router();

router.post('/', async (req, res) => {
    try {
      const car = new Car(req.body);
      await car.save();
      res.status(201).json(car);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  router.put('/:id', async (req, res) => {
    try {
      const car = await Car.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
      if (!car) return res.status(404).json({ error: 'Car not found' });
      res.json(car);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const car = await Car.findOneAndDelete({ id: req.params.id });
      if (!car) return res.status(404).json({ error: 'Car not found' });
      res.json({ message: 'Car deleted' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


export default autoRouter;