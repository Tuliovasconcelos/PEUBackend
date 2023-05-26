import { Router } from 'express';
import ProntuarioHabitoVidaController from '../controllers/ProntuarioHabitoVidaController';
import {
  createProntuarioHabitoVidaValidation,
  updateProntuarioHabitoVidaValidation,
  showProntuarioHabitoVidaValidation,
  deleteProntuarioHabitoVidaValidation,
} from '../validators/ProntuarioHabitoVidaValidator';

const prontuarioHabitoVidaRouter = Router();
const prontuarioHabitoVidaController = new ProntuarioHabitoVidaController();

prontuarioHabitoVidaRouter.get('/', prontuarioHabitoVidaController.index);
prontuarioHabitoVidaRouter.get('/:id', showProntuarioHabitoVidaValidation, prontuarioHabitoVidaController.show);
prontuarioHabitoVidaRouter.post('/', createProntuarioHabitoVidaValidation, prontuarioHabitoVidaController.create);
prontuarioHabitoVidaRouter.put('/:id', updateProntuarioHabitoVidaValidation, prontuarioHabitoVidaController.update);
prontuarioHabitoVidaRouter.delete('/:id', deleteProntuarioHabitoVidaValidation, prontuarioHabitoVidaController.delete);

export default prontuarioHabitoVidaRouter;
