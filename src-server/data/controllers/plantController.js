import mongoose from "mongoose";
import { plantSchema } from "../schemas/PlantSchema.js";

const Plant = mongoose.model("Plant", plantSchema);

export const addNewPlant = (req, res) => {
  let newPlant = new Plant(req.body);

  newPlant.save((err, plant) => {
    if (err) {
      res.send(err);
    }
    res.json(plant);
  });
};

export const getPlants = (req, res) => {
  Plant.find({}, (err, plant) => {
    if (err) {
      res.send(err);
      console.log(err);
    }
    res.json(plant);
  });
};

export const getPlantByID = (req, res) => {
  Plant.findOne({ sub: req.params.sub }, (err, plant) => {
    if (err) {
      res.send(err);
      console.log(`findById: Error`);
      // console.log(err)
    }
    res.json(plant);
    // console.log(plant)
  });
};

export const updatePlant = (req, res) => {
  Plant.findOneAndUpdate(
    { sub: req.params.sub },
    req.body,
    { new: true, useFindAndModify: false },
    (err, plant) => {
      if (err) {
        res.send(err);
      }
      res.json(plant);
    }
  );
};

export const deletePlant = (req, res) => {
  Plant.remove({ sub: req.params.sub }, (err, plant) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Plant Deleted" });
  });
};
