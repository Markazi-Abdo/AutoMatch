import express from "express"
import Car from "../index.js"
const autoRouter = express.Router();

autoRouter.post('/', async (req, res) => {
    try {
      const findMarque = await Car.findOne({ "marque.nom": req.body.marque.nom });
      if(findMarque){
        findMarque.models.push(req.body.models)
      }
      const car = new Car(req.body);
      await car.save();
      res.status(201).json(car);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
autoRouter.put('/:id', async (req, res) => {
  try {
    const car = await Car.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (!car) return res.status(404).json({ error: 'Car not found' });
    res.json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

autoRouter.delete('/:id', async (req, res) => {
  try {
    const car = await Car.findOneAndDelete({ id: req.params.id });
    if (!car) return res.status(404).json({ error: 'Car not found' });
    res.json({ message: 'Car deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


export default autoRouter;