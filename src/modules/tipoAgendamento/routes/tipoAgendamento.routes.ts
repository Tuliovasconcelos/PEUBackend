import { Router } from 'express';
import TipoAgendamentoController from '../controllers/TipoAgendamentoController';
import {
  createTipoAgendamentoValidation,
  updateTipoAgendamentoValidation,
  showTipoAgendamentoValidation,
  deleteTipoAgendamentoValidation,
} from '../validators/TipoAgendamentoValidator';

const tipoAgendamentoRouter = Router();
const tipoAgendamentoController = new TipoAgendamentoController();

tipoAgendamentoRouter.get('/', tipoAgendamentoController.index);
tipoAgendamentoRouter.get('/:idTipoAgendamento', showTipoAgendamentoValidation, tipoAgendamentoController.show);
tipoAgendamentoRouter.post('/', createTipoAgendamentoValidation, tipoAgendamentoController.create);
tipoAgendamentoRouter.put('/:idTipoAgendamento', updateTipoAgendamentoValidation, tipoAgendamentoController.update);
tipoAgendamentoRouter.delete('/:idTipoAgendamento', deleteTipoAgendamentoValidation, tipoAgendamentoController.delete);

export default tipoAgendamentoRouter;
