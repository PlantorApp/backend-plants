import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const plantSchema = new Schema({
  sub: {
    type: Number,
    required: `Required field.`,
  },
  plantName: {
    type: String,
    required: `Required field.`,
  },
  rootVegetable: {
    type: Boolean,
    required: `Required field.`,
  },
  startSeason: {
    type: Array,
    required: `Required field.`,
  },
  lightingRequirement: {
    type: String,
    required: `Required field.`,
  },
  lightingDurationMinimum: {
    type: Number,
    required: `Required field.`,
  },
  lightingDurationMaximum: {
    type: Number,
    required: `Required field.`,
  },
  lightingIntensityMinimum: {
    type: Number,
    required: `Required field.`,
  },
  lightingIntensityMaximum: {
    type: Number,
    required: `Required field.`,
  },
  hardinessZoneMinimum: {
    type: Number,
    required: `Required field.`,
  },
  hardinessZoneMaximum: {
    type: Number,
    required: `Required field.`,
  },
  temperatureMinimum: {
    type: Number,
    required: `Required field.`,
  },
  temperatureMaximum: {
    type: Number,
    required: `Required field.`,
  },
  difficulty: {
    type: String,
    required: `Required field.`,
  },
  duration: {
    type: Number,
    required: `Required field.`,
  },
  petFriendly: {
    type: Boolean,
    required: `Required field.`,
  },
  edible: {
    type: Boolean,
    required: `Required field.`,
  },
  potSize: {
    type: Number,
    required: `Required field.`,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});
