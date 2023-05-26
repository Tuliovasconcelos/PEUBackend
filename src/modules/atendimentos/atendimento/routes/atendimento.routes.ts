import { Router } from 'express';
import AtendimentosController from '../controllers/AtendimentosController';
import {
  createAtendimentoValidation,
  updateAtendimentoValidation,
  showAtendimentoValidation,
  deleteAtendimentoValidation,
} from '../validators/AtendimentoValidator';

const atendimentoRouter = Router();
const AtendimentoController = new AtendimentosController();

atendimentoRouter.get('/', AtendimentoController.index);
atendimentoRouter.get('/:idAtendimento', showAtendimentoValidation, AtendimentoController.show);
atendimentoRouter.post('/', createAtendimentoValidation, AtendimentoController.create);
atendimentoRouter.put('/:idAtendimento', updateAtendimentoValidation, AtendimentoController.update);
atendimentoRouter.delete('/:idAtendimento', deleteAtendimentoValidation, AtendimentoController.delete);

export default atendimentoRouter;
