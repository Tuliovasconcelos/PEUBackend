import { Router } from 'express';
import RiscosController from '../controllers/RiscosController';
import {
  createRiscoValidation,
  updateRiscoValidation,
  showRiscoValidation,
  deleteRiscoValidation,
} from '../validators/RiscoValidator';

const RiscoRoutes = Router();
const RiscoController = new RiscosController();

RiscoRoutes.get('/', RiscoController.index);
RiscoRoutes.get('/:id', showRiscoValidation, RiscoController.show);
RiscoRoutes.post('/', createRiscoValidation, RiscoController.create);
RiscoRoutes.put('/:id', updateRiscoValidation, RiscoController.update);
RiscoRoutes.delete('/:id', deleteRiscoValidation, RiscoController.delete);

export default RiscoRoutes;
