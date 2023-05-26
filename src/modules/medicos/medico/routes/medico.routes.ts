import { Router } from 'express';
import MedicosController from '../controllers/MedicosController';
import {
  createMedicoValidation,
  updateMedicoValidation,
  showMedicoValidation,
  deleteMedicoValidation,
} from '../validators/MedicoValidator';

const medicoRouter = Router();
const medicoController = new MedicosController();

medicoRouter.get('/', medicoController.index);
medicoRouter.get('/:id', showMedicoValidation, medicoController.show);
medicoRouter.post('/', createMedicoValidation, medicoController.create);
medicoRouter.put('/:id', updateMedicoValidation, medicoController.update);
medicoRouter.delete('/:id', deleteMedicoValidation, medicoController.delete);

export default medicoRouter;
