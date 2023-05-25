import { Router } from 'express';
import AtendimentoProcedimentoController from '../controllers/AtendimentoProcedimentosController';
import {
  createAtendimentoProcedimentoValidation,
  updateAtendimentoProcedimentoValidation,
  showAtendimentoProcedimentoValidation,
  deleteAtendimentoProcedimentoValidation,
} from '../validators/AtendimentoProcedimentoValidator';

const AtendimentoProcedimentoRouter = Router();
const controller = new AtendimentoProcedimentoController();

AtendimentoProcedimentoRouter.get('/', controller.index);
AtendimentoProcedimentoRouter.get('/:idAtendimentoProcedimento', showAtendimentoProcedimentoValidation, controller.show);
AtendimentoProcedimentoRouter.post('/', createAtendimentoProcedimentoValidation, controller.create);
AtendimentoProcedimentoRouter.put('/:idAtendimentoProcedimento', updateAtendimentoProcedimentoValidation, controller.update);
AtendimentoProcedimentoRouter.delete('/:idAtendimentoProcedimento', deleteAtendimentoProcedimentoValidation, controller.delete);

export default AtendimentoProcedimentoRouter;
