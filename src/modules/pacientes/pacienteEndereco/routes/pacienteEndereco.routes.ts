import { Router } from 'express';
import PacienteEnderecoController from '../controllers/PacienteEnderecoController';
import {
  createPacienteEnderecoValidation,
  updatePacienteEnderecoValidation,
  showPacienteEnderecoValidation,
  deletePacienteEnderecoValidation,
} from '../validators/PacienteEnderecoValidator';

const PacienteEnderecoRouter = Router();
const pacienteEnderecoController = new PacienteEnderecoController();

PacienteEnderecoRouter.get('/', pacienteEnderecoController.index);
PacienteEnderecoRouter.get('/:id', showPacienteEnderecoValidation, pacienteEnderecoController.show);
PacienteEnderecoRouter.post('/', createPacienteEnderecoValidation, pacienteEnderecoController.create);
PacienteEnderecoRouter.put('/:id', updatePacienteEnderecoValidation, pacienteEnderecoController.update);
PacienteEnderecoRouter.delete('/:id', deletePacienteEnderecoValidation, pacienteEnderecoController.delete);

export default PacienteEnderecoRouter;
