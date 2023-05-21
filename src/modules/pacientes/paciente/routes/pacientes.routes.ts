import { Router } from 'express';
import PacientesController from '../controllers/PacientesController';
import {
  createPacienteValidation,
  updatePacienteValidation,
  showPacienteValidation,
  deletePacienteValidation,
} from '../validators/PacienteValidator';

const pacientesRouter = Router();
const pacientesController = new PacientesController();

pacientesRouter.get('/', pacientesController.index);

pacientesRouter.get('/:id', showPacienteValidation, pacientesController.show);

pacientesRouter.post('/', createPacienteValidation, pacientesController.create);

pacientesRouter.put('/:id', updatePacienteValidation, pacientesController.update);

pacientesRouter.delete('/:id', deletePacienteValidation, pacientesController.delete);

export default pacientesRouter;
