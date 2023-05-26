import { Router } from 'express';
import ProntuarioController from '../controllers/ProntuariosController';
import {
  createProntuarioValidation,
  updateProntuarioValidation,
  showProntuarioValidation,
  deleteProntuarioValidation,
} from '../validators/ProntuarioValidator';

const prontuarioRouter = Router();
const prontuarioController = new ProntuarioController();

prontuarioRouter.get('/', prontuarioController.index);
prontuarioRouter.get('/:id', showProntuarioValidation, prontuarioController.show);
prontuarioRouter.post('/', createProntuarioValidation, prontuarioController.create);
prontuarioRouter.put('/:id', updateProntuarioValidation, prontuarioController.update);
prontuarioRouter.delete('/:id', deleteProntuarioValidation, prontuarioController.delete);

export default prontuarioRouter;
