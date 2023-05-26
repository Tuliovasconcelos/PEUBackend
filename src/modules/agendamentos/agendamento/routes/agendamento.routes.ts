import { Router } from 'express';
import AgendamentosController from '../controllers/AgendamentosController';
import {
  createAgendamentoValidation,
  updateAgendamentoValidation,
  showAgendamentoValidation,
  deleteAgendamentoValidation,
} from '../validators/AgendamentoValidator';

const agendamentoRouter = Router();
const agendamentosController = new AgendamentosController();

agendamentoRouter.get('/', agendamentosController.index);
agendamentoRouter.get('/:idAgendamento', showAgendamentoValidation, agendamentosController.show);
agendamentoRouter.post('/', createAgendamentoValidation, agendamentosController.create);
agendamentoRouter.put('/:idAgendamento', updateAgendamentoValidation, agendamentosController.update);
agendamentoRouter.delete('/:idAgendamento', deleteAgendamentoValidation, agendamentosController.delete);

export default agendamentoRouter;
