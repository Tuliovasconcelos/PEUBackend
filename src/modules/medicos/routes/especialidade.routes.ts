import { Router } from 'express';
import MedicoController from '../controllers/MedicoController';
import {
  createMedicoValidation,
  updateMedicoValidation,
  showMedicoValidation,
  deleteMedicoValidation,
} from '../validators/MedicoValidator';

const medicoRoutes = Router();
const medicoController = new MedicoController();

medicoRoutes.get('/', medicoController.index);
medicoRoutes.get('/:id', showMedicoValidation, medicoController.show);
medicoRoutes.post('/', createMedicoValidation, medicoController.create);
medicoRoutes.put('/:id', updateMedicoValidation, medicoController.update);
medicoRoutes.delete('/:id', deleteMedicoValidation, medicoController.delete);

export default medicoRoutes;
