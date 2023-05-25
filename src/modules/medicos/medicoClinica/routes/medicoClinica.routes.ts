import { Router } from 'express';
import MedicoClinicaController from '../controllers/MedicoClinicaController';
import {
  createMedicoClinicaValidation,
  updateMedicoClinicaValidation,
  showMedicoClinicaValidation,
  deleteMedicoClinicaValidation,
} from '../validators/MedicoClinicaValidator';

const medicoClinicaRouter = Router();
const medicoClinicaController = new MedicoClinicaController();

medicoClinicaRouter.get('/', medicoClinicaController.index);
medicoClinicaRouter.get('/:idMedicoClinica', showMedicoClinicaValidation, medicoClinicaController.show);
medicoClinicaRouter.post('/', createMedicoClinicaValidation, medicoClinicaController.create);
medicoClinicaRouter.put('/:idMedicoClinica', updateMedicoClinicaValidation, medicoClinicaController.update);
medicoClinicaRouter.delete('/:idMedicoClinica', deleteMedicoClinicaValidation, medicoClinicaController.delete);

export default medicoClinicaRouter;
