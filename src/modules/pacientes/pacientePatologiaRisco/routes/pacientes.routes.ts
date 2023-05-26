import { Router } from 'express';

import PacientePatologiaRiscoController from '../controllers/PacientePatologiaRiscoController';

import {
  createPacientePatologiaRiscoValidation,
  updatePacientePatologiaRiscoValidation,
  showPacientePatologiaRiscoValidation,
  deletePacientePatologiaRiscoValidation,
} from '../validators/PacientePatologiaRiscoValidator';

const pacientePatologiaRiscoRouter = Router();
const pacientePatologiaRiscoController = new PacientePatologiaRiscoController();

pacientePatologiaRiscoRouter.get('/', pacientePatologiaRiscoController.index);

pacientePatologiaRiscoRouter.get('/:id', showPacientePatologiaRiscoValidation, pacientePatologiaRiscoController.show);

pacientePatologiaRiscoRouter.post('/', createPacientePatologiaRiscoValidation, pacientePatologiaRiscoController.create);

pacientePatologiaRiscoRouter.put('/:id', updatePacientePatologiaRiscoValidation, pacientePatologiaRiscoController.update);

pacientePatologiaRiscoRouter.delete('/:id', deletePacientePatologiaRiscoValidation, pacientePatologiaRiscoController.delete);

export default pacientePatologiaRiscoRouter;
