import { Router } from 'express';
import SolicitacoesController from '../controllers/SolicitacoesController';
import {
  createSolicitacaoValidation,
  updateSolicitacaoValidation,
  showSolicitacaoValidation,
  deleteSolicitacaoValidation,
} from '../validators/SolicitacaoValidator';

const solicitacaoRouter = Router();
const solicitacoesController = new SolicitacoesController();

solicitacaoRouter.get('/', solicitacoesController.index);
solicitacaoRouter.get('/:id', showSolicitacaoValidation, solicitacoesController.show);
solicitacaoRouter.post('/', createSolicitacaoValidation, solicitacoesController.create);
solicitacaoRouter.put('/:id', updateSolicitacaoValidation, solicitacoesController.update);
solicitacaoRouter.delete('/:id', deleteSolicitacaoValidation, solicitacoesController.delete);

export default solicitacaoRouter;
