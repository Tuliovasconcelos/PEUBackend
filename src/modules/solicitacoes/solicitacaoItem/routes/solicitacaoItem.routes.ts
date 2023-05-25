import { Router } from 'express';
import SolicitacaoItemController from '../controllers/SolicitacaoItemController';
import {
  createSolicitacaoItemValidation,
  updateSolicitacaoItemValidation,
  showSolicitacaoItemValidation,
  deleteSolicitacaoItemValidation,
} from '../validators/SolicitacaoItemValidator';

const solicitacaoItemRouter = Router();
const solicitacaoItemController = new SolicitacaoItemController();

solicitacaoItemRouter.get('/', solicitacaoItemController.index);
solicitacaoItemRouter.get('/:id', showSolicitacaoItemValidation, solicitacaoItemController.show);
solicitacaoItemRouter.post('/', createSolicitacaoItemValidation, solicitacaoItemController.create);
solicitacaoItemRouter.put('/:id', updateSolicitacaoItemValidation, solicitacaoItemController.update);
solicitacaoItemRouter.delete('/:id', deleteSolicitacaoItemValidation, solicitacaoItemController.delete);

export default solicitacaoItemRouter;
