import { Router } from 'express';
import PacienteContatoController from '../controllers/PacienteContatoController';
import {
  createPacienteContatoValidation,
  updatePacienteContatoValidation,
  showPacienteContatoValidation,
  deletePacienteContatoValidation,
} from '../validators/PacienteContatoValidator';

const pacienteContatoRouter = Router();
const pacienteContatoController = new PacienteContatoController();

pacienteContatoRouter.get('/', pacienteContatoController.index);

pacienteContatoRouter.get('/:id', showPacienteContatoValidation, pacienteContatoController.show);

pacienteContatoRouter.post('/', createPacienteContatoValidation, pacienteContatoController.create);

pacienteContatoRouter.put('/:id', updatePacienteContatoValidation, pacienteContatoController.update);

pacienteContatoRouter.delete('/:id', deletePacienteContatoValidation, pacienteContatoController.delete);

export default pacienteContatoRouter;
