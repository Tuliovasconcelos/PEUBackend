import { Router } from 'express';
import PatologiasController from '../controllers/EspecialidadesController';
import {
  createPatologiaValidation,
  updatePatologiaValidation,
  showPatologiaValidation,
  deletePatologiaValidation,
} from '../validators/PatologiaValidator';

const PatologiaRoutes = Router();
const PatologiaController = new PatologiasController();

PatologiaRoutes.get('/', PatologiaController.index);
PatologiaRoutes.get('/:id', showPatologiaValidation, PatologiaController.show);
PatologiaRoutes.post('/', createPatologiaValidation, PatologiaController.create);
PatologiaRoutes.put('/:id', updatePatologiaValidation, PatologiaController.update);
PatologiaRoutes.delete('/:id', deletePatologiaValidation, PatologiaController.delete);

export default PatologiaRoutes;
