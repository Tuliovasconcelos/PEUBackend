import { Router } from 'express';
import AtendimentoProcedimentoController from '../controllers/AtendimentoProcedimentosController';
import {
  createAtendimentoProcedimentoValidation,
  updateAtendimentoProcedimentoValidation,
  showAtendimentoProcedimentoValidation,
  deleteAtendimentoProcedimentoValidation,
} from '../validators/AtendimentoProcedimentoValidator';

const atendimentoProcedimentoRouter = Router();
const controller = new AtendimentoProcedimentoController();

atendimentoProcedimentoRouter.get('/', controller.index);
atendimentoProcedimentoRouter.get('/:idAtendimentoProcedimento', showAtendimentoProcedimentoValidation, controller.show);
atendimentoProcedimentoRouter.post('/', createAtendimentoProcedimentoValidation, controller.create);
atendimentoProcedimentoRouter.put('/:idAtendimentoProcedimento', updateAtendimentoProcedimentoValidation, controller.update);
atendimentoProcedimentoRouter.delete('/:idAtendimentoProcedimento', deleteAtendimentoProcedimentoValidation, controller.delete);

export default atendimentoProcedimentoRouter;
