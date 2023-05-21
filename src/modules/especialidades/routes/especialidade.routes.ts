import { Router } from 'express';
import EspecialidadeController from '../controllers/EspecialidadesController';
import {
  createEspecialidadeValidation,
  updateEspecialidadeValidation,
  showEspecialidadeValidation,
  deleteEspecialidadeValidation,
} from '../validators/EspecialidadeValidator';

const especialidadeRoutes = Router();
const especialidadeController = new EspecialidadeController();

especialidadeRoutes.get('/', especialidadeController.index);
especialidadeRoutes.get('/:id', showEspecialidadeValidation, especialidadeController.show);
especialidadeRoutes.post('/', createEspecialidadeValidation, especialidadeController.create);
especialidadeRoutes.put('/:id', updateEspecialidadeValidation, especialidadeController.update);
especialidadeRoutes.delete('/:id', deleteEspecialidadeValidation, especialidadeController.delete);

export default especialidadeRoutes;
