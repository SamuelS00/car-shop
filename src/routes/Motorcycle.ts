import { Router } from 'express';
import MotorcycleController from '../controllers/Motorcycle';
import MotorcycleService from '../services/Motorcycle';
import MotorcycleModel from '../models/Motorcycle';

const route = Router();

const motorcycleModel = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycleModel);
const motorcycleController = new MotorcycleController(motorcycleService);

route.post('/motorcycles', (req, res) => motorcycleController.create(req, res));
route.get('/motorcycles', (req, res) => motorcycleController.read(req, res));
route.get('/motorcycles/:id', (req, res) => motorcycleController.readOne(req, res));
route.put('/motorcycles/:id', (req, res) => motorcycleController.update(req, res));

export default route;