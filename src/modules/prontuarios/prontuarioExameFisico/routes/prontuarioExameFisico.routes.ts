import { Router } from 'express';
import ProntuarioExameFisicoController from '../controllers/ProntuarioExameFisicoController';
import {
  createProntuarioExameFisicoValidation,
  updateProntuarioExameFisicoValidation,
  showProntuarioExameFisicoValidation,
  deleteProntuarioExameFisicoValidation,
} from '../validators/ProntuarioExameFisicoValidator';

const prontuarioRoutes = Router();
const prontuarioExameFisicoController = new ProntuarioExameFisicoController();

prontuarioRoutes.get('/', prontuarioExameFisicoController.index);
prontuarioRoutes.get('/:id', showProntuarioExameFisicoValidation, prontuarioExameFisicoController.show);
prontuarioRoutes.post('/', createProntuarioExameFisicoValidation, prontuarioExameFisicoController.create);
prontuarioRoutes.put('/:id', updateProntuarioExameFisicoValidation, prontuarioExameFisicoController.update);
prontuarioRoutes.delete('/:id', deleteProntuarioExameFisicoValidation, prontuarioExameFisicoController.delete);

export default prontuarioRoutes;
