import { Router } from 'express';
import PacienteConvenioController from '../controllers/PacienteConvenioController';
import {
  createPacienteConvenioValidation,
  updatePacienteConvenioValidation,
  showPacienteConvenioValidation,
  deletePacienteConvenioValidation,
} from '../validators/PacienteConvenioValidator';

const pacienteConvenioRouter = Router();
const pacienteConveniosController = new PacienteConvenioController();

pacienteConvenioRouter.get('/', pacienteConveniosController.index);

pacienteConvenioRouter.get('/:id', showPacienteConvenioValidation, pacienteConveniosController.show);

pacienteConvenioRouter.post('/', createPacienteConvenioValidation, pacienteConveniosController.create);

pacienteConvenioRouter.put('/:id', updatePacienteConvenioValidation, pacienteConveniosController.update);

pacienteConvenioRouter.delete('/:id', deletePacienteConvenioValidation, pacienteConveniosController.delete);

export default pacienteConvenioRouter;
