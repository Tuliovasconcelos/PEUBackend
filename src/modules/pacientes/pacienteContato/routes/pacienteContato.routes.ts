import { Router } from 'express';
import PacienteContatoController from '../controllers/PacienteContatoController';
import {
  createPacienteContatoValidation,
  updatePacienteContatoValidation,
  showPacienteContatoValidation,
  deletePacienteContatoValidation,
} from '../validators/PacienteContatoValidator';

const PacienteContatoRouter = Router();
const pacienteContatoController = new PacienteContatoController();

PacienteContatoRouter.get('/', pacienteContatoController.index);

PacienteContatoRouter.get('/:id', showPacienteContatoValidation, pacienteContatoController.show);

PacienteContatoRouter.post('/', createPacienteContatoValidation, pacienteContatoController.create);

PacienteContatoRouter.put('/:id', updatePacienteContatoValidation, pacienteContatoController.update);

PacienteContatoRouter.delete('/:id', deletePacienteContatoValidation, pacienteContatoController.delete);

export default PacienteContatoRouter;
