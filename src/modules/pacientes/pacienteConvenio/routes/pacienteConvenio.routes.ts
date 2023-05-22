import { Router } from 'express';
import PacienteConvenioController from '../controllers/PacienteConvenioController';
import {
  createPacienteConvenioValidation,
  updatePacienteConvenioValidation,
  showPacienteConvenioValidation,
  deletePacienteConvenioValidation,
} from '../validators/PacienteConvenioValidator';

const PacienteConveniosRouter = Router();
const pacienteConveniosController = new PacienteConvenioController();

PacienteConveniosRouter.get('/', pacienteConveniosController.index);

PacienteConveniosRouter.get('/:id', showPacienteConvenioValidation, pacienteConveniosController.show);

PacienteConveniosRouter.post('/', createPacienteConvenioValidation, pacienteConveniosController.create);

PacienteConveniosRouter.put('/:id', updatePacienteConvenioValidation, pacienteConveniosController.update);

PacienteConveniosRouter.delete('/:id', deletePacienteConvenioValidation, pacienteConveniosController.delete);

export default PacienteConveniosRouter;
