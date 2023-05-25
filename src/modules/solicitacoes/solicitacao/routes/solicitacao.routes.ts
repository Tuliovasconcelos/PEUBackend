import { Router } from 'express';
import SolicitacoesController from '../controllers/SolicitacoesController';
import {
  createSolicitacaoValidation,
  updateSolicitacaoValidation,
  showSolicitacaoValidation,
  deleteSolicitacaoValidation,
} from '../validators/SolicitacaoValidator';

const solicitacoesRouter = Router();
const solicitacoesController = new SolicitacoesController();

solicitacoesRouter.get('/', solicitacoesController.index);
solicitacoesRouter.get('/:id', showSolicitacaoValidation, solicitacoesController.show);
solicitacoesRouter.post('/', createSolicitacaoValidation, solicitacoesController.create);
solicitacoesRouter.put('/:id', updateSolicitacaoValidation, solicitacoesController.update);
solicitacoesRouter.delete('/:id', deleteSolicitacaoValidation, solicitacoesController.delete);

export default solicitacoesRouter;
