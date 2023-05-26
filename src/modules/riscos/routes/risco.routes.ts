import { Router } from 'express';
import RiscosController from '../controllers/RiscosController';
import {
  createRiscoValidation,
  updateRiscoValidation,
  showRiscoValidation,
  deleteRiscoValidation,
} from '../validators/RiscoValidator';

const riscoRouter = Router();
const RiscoController = new RiscosController();

riscoRouter.get('/', RiscoController.index);
riscoRouter.get('/:id', showRiscoValidation, RiscoController.show);
riscoRouter.post('/', createRiscoValidation, RiscoController.create);
riscoRouter.put('/:id', updateRiscoValidation, RiscoController.update);
riscoRouter.delete('/:id', deleteRiscoValidation, RiscoController.delete);

export default riscoRouter;
