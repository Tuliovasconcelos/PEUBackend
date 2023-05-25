import { Router } from 'express';
import AgendamentosController from '../controllers/AgendamentosController';
import {
  createAgendamentoValidation,
  updateAgendamentoValidation,
  showAgendamentoValidation,
  deleteAgendamentoValidation,
} from '../validators/AgendamentoValidator';

const AgendamentoRouter = Router();
const agendamentosController = new AgendamentosController();

AgendamentoRouter.get('/', agendamentosController.index);
AgendamentoRouter.get('/:idAgendamento', showAgendamentoValidation, agendamentosController.show);
AgendamentoRouter.post('/', createAgendamentoValidation, agendamentosController.create);
AgendamentoRouter.put('/:idAgendamento', updateAgendamentoValidation, agendamentosController.update);
AgendamentoRouter.delete('/:idAgendamento', deleteAgendamentoValidation, agendamentosController.delete);

export default AgendamentoRouter;
