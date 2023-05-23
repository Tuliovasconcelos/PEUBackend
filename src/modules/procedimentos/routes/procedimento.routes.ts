import { Router } from 'express';
import ProcedimentosController from '../controllers/ProcedimentosController';
import {
  createProcedimentoValidation,
  updateProcedimentoValidation,
  showProcedimentoValidation,
  deleteProcedimentoValidation,
} from '../validators/ProcedimentoValidator';

const ProcedimentoRouter = Router();
const ProcedimentoController = new ProcedimentosController();

ProcedimentoRouter.get('/', ProcedimentoController.index);
ProcedimentoRouter.get('/:idProcedimento', showProcedimentoValidation, ProcedimentoController.show);
ProcedimentoRouter.post('/', createProcedimentoValidation, ProcedimentoController.create);
ProcedimentoRouter.put('/:idProcedimento', updateProcedimentoValidation, ProcedimentoController.update);
ProcedimentoRouter.delete('/:idProcedimento', deleteProcedimentoValidation, ProcedimentoController.delete);

export default ProcedimentoRouter;
