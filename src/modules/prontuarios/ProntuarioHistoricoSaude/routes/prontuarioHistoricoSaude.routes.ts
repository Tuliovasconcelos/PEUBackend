import { Router } from 'express';
import ProntuarioHistoricoSaudeController from '../controllers/ProntuarioHistoricoSaudeController';
import {
  createProntuarioHistoricoSaudeValidation,
  updateProntuarioHistoricoSaudeValidation,
  showProntuarioHistoricoSaudeValidation,
  deleteProntuarioHistoricoSaudeValidation,
} from '../validators/ProntuarioHistoricoSaudeValidator';

const prontuarioHistoricoSaudeRouter = Router();
const prontuarioHistoricoSaudeController = new ProntuarioHistoricoSaudeController();

prontuarioHistoricoSaudeRouter.get('/', prontuarioHistoricoSaudeController.index);
prontuarioHistoricoSaudeRouter.get('/:id', showProntuarioHistoricoSaudeValidation, prontuarioHistoricoSaudeController.show);
prontuarioHistoricoSaudeRouter.post('/', createProntuarioHistoricoSaudeValidation, prontuarioHistoricoSaudeController.create);
prontuarioHistoricoSaudeRouter.put('/:id', updateProntuarioHistoricoSaudeValidation, prontuarioHistoricoSaudeController.update);
prontuarioHistoricoSaudeRouter.delete('/:id', deleteProntuarioHistoricoSaudeValidation, prontuarioHistoricoSaudeController.delete);

export default prontuarioHistoricoSaudeRouter;
