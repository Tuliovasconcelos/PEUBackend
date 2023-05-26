import { Router } from 'express';
import AgendamentoTipoController from '../controllers/AgendamentoTipoController';
import {
  createAgendamentoTipoValidation,
  updateAgendamentoTipoValidation,
  showAgendamentoTipoValidation,
  deleteAgendamentoTipoValidation,
} from '../validators/AgendamentoTipoValidator';

const agendamentoTipoRouter = Router();
const agendamentoTipoController = new AgendamentoTipoController();

agendamentoTipoRouter.get('/', agendamentoTipoController.index);
agendamentoTipoRouter.get('/:id', showAgendamentoTipoValidation, agendamentoTipoController.show);
agendamentoTipoRouter.post('/', createAgendamentoTipoValidation, agendamentoTipoController.create);
agendamentoTipoRouter.put('/:id', updateAgendamentoTipoValidation, agendamentoTipoController.update);
agendamentoTipoRouter.delete('/:id', deleteAgendamentoTipoValidation, agendamentoTipoController.delete);

export default agendamentoTipoRouter;
