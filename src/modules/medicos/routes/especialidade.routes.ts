import { Router } from 'express';
import MedicosController from '../controllers/MedicosController';
import {
  createMedicoValidation,
  updateMedicoValidation,
  showMedicoValidation,
  deleteMedicoValidation,
} from '../validators/MedicoValidator';

const medicoRoutes = Router();
const medicoController = new MedicosController();

medicoRoutes.get('/', medicoController.index);
medicoRoutes.get('/:id', showMedicoValidation, medicoController.show);
medicoRoutes.post('/', createMedicoValidation, medicoController.create);
medicoRoutes.put('/:id', updateMedicoValidation, medicoController.update);
medicoRoutes.delete('/:id', deleteMedicoValidation, medicoController.delete);

export default medicoRoutes;
