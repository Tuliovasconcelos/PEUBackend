import { Router } from 'express';
import ProntuarioQueixaSaudeController from '../controllers/ProntuarioQueixaSaudeController';
import {
  createProntuarioQueixaSaudeValidation,
  updateProntuarioQueixaSaudeValidation,
  showProntuarioQueixaSaudeValidation,
  deleteProntuarioQueixaSaudeValidation,
} from '../validators/ProntuarioQueixaSaudeValidator';

const prontuarioRoutes = Router();
const prontuarioQueixaSaudeController = new ProntuarioQueixaSaudeController();

prontuarioRoutes.get('/', prontuarioQueixaSaudeController.index);
prontuarioRoutes.get('/:id', showProntuarioQueixaSaudeValidation, prontuarioQueixaSaudeController.show);
prontuarioRoutes.post('/', createProntuarioQueixaSaudeValidation, prontuarioQueixaSaudeController.create);
prontuarioRoutes.put('/:id', updateProntuarioQueixaSaudeValidation, prontuarioQueixaSaudeController.update);
prontuarioRoutes.delete('/:id', deleteProntuarioQueixaSaudeValidation, prontuarioQueixaSaudeController.delete);

export default prontuarioRoutes;
