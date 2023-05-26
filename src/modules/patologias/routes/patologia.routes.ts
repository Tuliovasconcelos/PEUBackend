import { Router } from 'express';
import PatologiasController from '../controllers/PatologiasController';
import {
  createPatologiaValidation,
  updatePatologiaValidation,
  showPatologiaValidation,
  deletePatologiaValidation,
} from '../validators/PatologiaValidator';

const patologiaRoutes = Router();
const PatologiaController = new PatologiasController();

patologiaRoutes.get('/', PatologiaController.index);
patologiaRoutes.get('/:id', showPatologiaValidation, PatologiaController.show);
patologiaRoutes.post('/', createPatologiaValidation, PatologiaController.create);
patologiaRoutes.put('/:id', updatePatologiaValidation, PatologiaController.update);
patologiaRoutes.delete('/:id', deletePatologiaValidation, PatologiaController.delete);

export default patologiaRoutes;
