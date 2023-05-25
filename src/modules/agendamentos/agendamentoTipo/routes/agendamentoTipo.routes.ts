import { Router } from 'express';
import AgendamentoTipoController from '../controllers/AgendamentoTipoController';
import {
  createAgendamentoTipoValidation,
  updateAgendamentoTipoValidation,
  showAgendamentoTipoValidation,
  deleteAgendamentoTipoValidation,
} from '../validators/AgendamentoTipoValidator';

const AgendamentoTipoRouter = Router();
const agendamentoTipoController = new AgendamentoTipoController();

AgendamentoTipoRouter.get('/', agendamentoTipoController.index);
AgendamentoTipoRouter.get('/:id', showAgendamentoTipoValidation, agendamentoTipoController.show);
AgendamentoTipoRouter.post('/', createAgendamentoTipoValidation, agendamentoTipoController.create);
AgendamentoTipoRouter.put('/:id', updateAgendamentoTipoValidation, agendamentoTipoController.update);
AgendamentoTipoRouter.delete('/:id', deleteAgendamentoTipoValidation, agendamentoTipoController.delete);

export default AgendamentoTipoRouter;
