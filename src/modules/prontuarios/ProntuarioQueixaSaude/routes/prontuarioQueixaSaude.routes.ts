import { Router } from 'express';
import ProntuarioQueixaSaudeController from '../controllers/ProntuarioQueixaSaudeController';
import {
  createProntuarioQueixaSaudeValidation,
  updateProntuarioQueixaSaudeValidation,
  showProntuarioQueixaSaudeValidation,
  deleteProntuarioQueixaSaudeValidation,
} from '../validators/ProntuarioQueixaSaudeValidator';

const prontuarioQueixaSaudeRouter = Router();
const prontuarioQueixaSaudeController = new ProntuarioQueixaSaudeController();

prontuarioQueixaSaudeRouter.get('/', prontuarioQueixaSaudeController.index);
prontuarioQueixaSaudeRouter.get('/:id', showProntuarioQueixaSaudeValidation, prontuarioQueixaSaudeController.show);
prontuarioQueixaSaudeRouter.post('/', createProntuarioQueixaSaudeValidation, prontuarioQueixaSaudeController.create);
prontuarioQueixaSaudeRouter.put('/:id', updateProntuarioQueixaSaudeValidation, prontuarioQueixaSaudeController.update);
prontuarioQueixaSaudeRouter.delete('/:id', deleteProntuarioQueixaSaudeValidation, prontuarioQueixaSaudeController.delete);

export default prontuarioQueixaSaudeRouter;
