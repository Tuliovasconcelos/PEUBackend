import { Router } from 'express';
import EspecialidadeController from '../controllers/EspecialidadesController';
import {
  createEspecialidadeValidation,
  updateEspecialidadeValidation,
  showEspecialidadeValidation,
  deleteEspecialidadeValidation,
} from '../validators/EspecialidadeValidator';

const especialidadeRouter = Router();
const especialidadeController = new EspecialidadeController();

especialidadeRouter.get('/', especialidadeController.index);
especialidadeRouter.get('/:id', showEspecialidadeValidation, especialidadeController.show);
especialidadeRouter.post('/', createEspecialidadeValidation, especialidadeController.create);
especialidadeRouter.put('/:id', updateEspecialidadeValidation, especialidadeController.update);
especialidadeRouter.delete('/:id', deleteEspecialidadeValidation, especialidadeController.delete);

export default especialidadeRouter;
