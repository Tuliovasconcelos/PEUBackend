import { Router } from 'express';
import MedicoEspecialidadeController from '../controllers/MedicoEspecialidadeController';
import {
  createMedicoEspecialidadeValidation,
  updateMedicoEspecialidadeValidation,
  showMedicoEspecialidadeValidation,
  deleteMedicoEspecialidadeValidation,
} from '../validators/MedicoEspecialidadeValidator';

const medicoEspecialidadeRouter = Router();
const medicoEspecialidadeController = new MedicoEspecialidadeController();

medicoEspecialidadeRouter.get('/', medicoEspecialidadeController.index);
medicoEspecialidadeRouter.get('/:id', showMedicoEspecialidadeValidation, medicoEspecialidadeController.show);
medicoEspecialidadeRouter.post('/', createMedicoEspecialidadeValidation, medicoEspecialidadeController.create);
medicoEspecialidadeRouter.put('/:id', updateMedicoEspecialidadeValidation, medicoEspecialidadeController.update);
medicoEspecialidadeRouter.delete('/:id', deleteMedicoEspecialidadeValidation, medicoEspecialidadeController.delete);

export default medicoEspecialidadeRouter;
