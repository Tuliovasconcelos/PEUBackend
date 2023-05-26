import { Router } from 'express';
import PacienteEnderecoController from '../controllers/PacienteEnderecoController';
import {
  createPacienteEnderecoValidation,
  updatePacienteEnderecoValidation,
  showPacienteEnderecoValidation,
  deletePacienteEnderecoValidation,
} from '../validators/PacienteEnderecoValidator';

const pacienteEnderecoRouter = Router();
const pacienteEnderecoController = new PacienteEnderecoController();

pacienteEnderecoRouter.get('/', pacienteEnderecoController.index);
pacienteEnderecoRouter.get('/:id', showPacienteEnderecoValidation, pacienteEnderecoController.show);
pacienteEnderecoRouter.post('/', createPacienteEnderecoValidation, pacienteEnderecoController.create);
pacienteEnderecoRouter.put('/:id', updatePacienteEnderecoValidation, pacienteEnderecoController.update);
pacienteEnderecoRouter.delete('/:id', deletePacienteEnderecoValidation, pacienteEnderecoController.delete);

export default pacienteEnderecoRouter;
