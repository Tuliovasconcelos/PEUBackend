import { Router } from 'express';
import ContatoPacienteController from '../controllers/ContatoPacienteController';
import {
  createContatoPacienteValidation,
  updateContatoPacienteValidation,
  showContatoPacienteValidation,
  deleteContatoPacienteValidation,
} from '../validators/ContatoPacienteValidator';

const contatoPacienteRouter = Router();
const contatoPacienteController = new ContatoPacienteController();

contatoPacienteRouter.get('/', contatoPacienteController.index);

contatoPacienteRouter.get('/:id', showContatoPacienteValidation, contatoPacienteController.show);

contatoPacienteRouter.post('/', createContatoPacienteValidation, contatoPacienteController.create);

contatoPacienteRouter.put('/:id', updateContatoPacienteValidation, contatoPacienteController.update);

contatoPacienteRouter.delete('/:id', deleteContatoPacienteValidation, contatoPacienteController.delete);

export default contatoPacienteRouter;
