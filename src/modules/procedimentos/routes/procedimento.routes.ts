import { Router } from 'express';
import ProcedimentosController from '../controllers/ProcedimentosController';
import {
  createProcedimentoValidation,
  updateProcedimentoValidation,
  showProcedimentoValidation,
  deleteProcedimentoValidation,
} from '../validators/ProcedimentoValidator';

const procedimentoRouter = Router();
const ProcedimentoController = new ProcedimentosController();

procedimentoRouter.get('/', ProcedimentoController.index);
procedimentoRouter.get('/:idProcedimento', showProcedimentoValidation, ProcedimentoController.show);
procedimentoRouter.post('/', createProcedimentoValidation, ProcedimentoController.create);
procedimentoRouter.put('/:idProcedimento', updateProcedimentoValidation, ProcedimentoController.update);
procedimentoRouter.delete('/:idProcedimento', deleteProcedimentoValidation, ProcedimentoController.delete);

export default procedimentoRouter;
