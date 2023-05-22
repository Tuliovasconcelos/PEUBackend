import { Router } from 'express';

import PacientePatologiaRiscoController from '../controllers/PacientePatologiaRiscoController';

import {
  createPacientePatologiaRiscoValidation,
  updatePacientePatologiaRiscoValidation,
  showPacientePatologiaRiscoValidation,
  deletePacientePatologiaRiscoValidation,
} from '../validators/PacientePatologiaRiscoValidator';

const PacientePatologiaRiscoRouter = Router();
const pacientePatologiaRiscoController = new PacientePatologiaRiscoController();

PacientePatologiaRiscoRouter.get('/', pacientePatologiaRiscoController.index);

PacientePatologiaRiscoRouter.get('/:id', showPacientePatologiaRiscoValidation, pacientePatologiaRiscoController.show);

PacientePatologiaRiscoRouter.post('/', createPacientePatologiaRiscoValidation, pacientePatologiaRiscoController.create);

PacientePatologiaRiscoRouter.put('/:id', updatePacientePatologiaRiscoValidation, pacientePatologiaRiscoController.update);

PacientePatologiaRiscoRouter.delete('/:id', deletePacientePatologiaRiscoValidation, pacientePatologiaRiscoController.delete);

export default PacientePatologiaRiscoRouter;
