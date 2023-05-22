import { Router } from 'express';
import EnderecoPacienteController from '../controllers/EnderecoPacienteController';
import {
  createEnderecoPacienteValidation,
  updateEnderecoPacienteValidation,
  showEnderecoPacienteValidation,
  deleteEnderecoPacienteValidation,
} from '../validators/EnderecoPacienteValidator';

const enderecoPacienteRouter = Router();
const enderecoPacienteController = new EnderecoPacienteController();

enderecoPacienteRouter.get('/', enderecoPacienteController.index);
enderecoPacienteRouter.get('/:id', showEnderecoPacienteValidation, enderecoPacienteController.show);
enderecoPacienteRouter.post('/', createEnderecoPacienteValidation, enderecoPacienteController.create);
enderecoPacienteRouter.put('/:id', updateEnderecoPacienteValidation, enderecoPacienteController.update);
enderecoPacienteRouter.delete('/:id', deleteEnderecoPacienteValidation, enderecoPacienteController.delete);

export default enderecoPacienteRouter;
