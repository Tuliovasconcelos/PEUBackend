import { Router } from 'express';
import AtendimentoController from '../controllers/AtendimentosController';
import {
  createAtendimentoValidation,
  updateAtendimentoValidation,
  showAtendimentoValidation,
  deleteAtendimentoValidation,
} from '../validators/AtendimentoValidator';

const atendimentoRouter = Router();
const atendimentoController = new AtendimentoController();

atendimentoRouter.get('/', atendimentoController.index);
atendimentoRouter.get('/:idAtendimento', showAtendimentoValidation, atendimentoController.show);
atendimentoRouter.post('/', createAtendimentoValidation, atendimentoController.create);
atendimentoRouter.put('/:idAtendimento', updateAtendimentoValidation, atendimentoController.update);
atendimentoRouter.delete('/:idAtendimento', deleteAtendimentoValidation, atendimentoController.delete);

export default atendimentoRouter;
