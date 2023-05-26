import { Router } from 'express';
import ProntuarioExameFisicoController from '../controllers/ProntuarioExameFisicoController';
import {
  createProntuarioExameFisicoValidation,
  updateProntuarioExameFisicoValidation,
  showProntuarioExameFisicoValidation,
  deleteProntuarioExameFisicoValidation,
} from '../validators/ProntuarioExameFisicoValidator';

const prontuarioExameFisicoRouter = Router();
const prontuarioExameFisicoController = new ProntuarioExameFisicoController();

prontuarioExameFisicoRouter.get('/', prontuarioExameFisicoController.index);
prontuarioExameFisicoRouter.get('/:id', showProntuarioExameFisicoValidation, prontuarioExameFisicoController.show);
prontuarioExameFisicoRouter.post('/', createProntuarioExameFisicoValidation, prontuarioExameFisicoController.create);
prontuarioExameFisicoRouter.put('/:id', updateProntuarioExameFisicoValidation, prontuarioExameFisicoController.update);
prontuarioExameFisicoRouter.delete('/:id', deleteProntuarioExameFisicoValidation, prontuarioExameFisicoController.delete);

export default prontuarioExameFisicoRouter;
