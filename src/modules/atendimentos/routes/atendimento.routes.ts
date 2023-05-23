import { Router } from 'express';
import AtendimentosController from '../controllers/AtendimentosController';
import {
  createAtendimentoValidation,
  updateAtendimentoValidation,
  showAtendimentoValidation,
  deleteAtendimentoValidation,
} from '../validators/AtendimentoValidator';

const AtendimentoRouter = Router();
const AtendimentoController = new AtendimentosController();

AtendimentoRouter.get('/', AtendimentoController.index);
AtendimentoRouter.get('/:idAtendimento', showAtendimentoValidation, AtendimentoController.show);
AtendimentoRouter.post('/', createAtendimentoValidation, AtendimentoController.create);
AtendimentoRouter.put('/:idAtendimento', updateAtendimentoValidation, AtendimentoController.update);
AtendimentoRouter.delete('/:idAtendimento', deleteAtendimentoValidation, AtendimentoController.delete);

export default AtendimentoRouter;
