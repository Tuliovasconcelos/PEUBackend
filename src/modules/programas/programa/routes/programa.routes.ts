import { Router } from 'express';
import ProgramasController from '../controllers/ProgramasController';
import {
  createProgramaValidation,
  updateProgramaValidation,
  showProgramaValidation,
  deleteProgramaValidation,
} from '../validators/ProgramaValidator';

const programaRouter = Router();
const programaController = new ProgramasController();

programaRouter.get('/', programaController.index);
programaRouter.get('/:idPrograma', showProgramaValidation, programaController.show);
programaRouter.post('/', createProgramaValidation, programaController.create);
programaRouter.put('/:idPrograma', updateProgramaValidation, programaController.update);
programaRouter.delete('/:idPrograma', deleteProgramaValidation, programaController.delete);

export default programaRouter;
