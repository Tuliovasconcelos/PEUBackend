import { Router } from 'express';
import ProgramaClinicaController from '../controllers/ProgramaClinicaController';
import {
  createProgramaClinicaValidation,
  updateProgramaClinicaValidation,
  showProgramaClinicaValidation,
  deleteProgramaClinicaValidation,
} from '../validators/ProgramaClinicaValidator';

const programaClinicaRouter = Router();
const programaClinicaController = new ProgramaClinicaController();

programaClinicaRouter.get('/', programaClinicaController.index);
programaClinicaRouter.get('/:idProgramaClinica', showProgramaClinicaValidation, programaClinicaController.show);
programaClinicaRouter.post('/', createProgramaClinicaValidation, programaClinicaController.create);
programaClinicaRouter.put('/:idProgramaClinica', updateProgramaClinicaValidation, programaClinicaController.update);
programaClinicaRouter.delete('/:idProgramaClinica', deleteProgramaClinicaValidation, programaClinicaController.delete);

export default programaClinicaRouter;
