import { Router } from 'express';
import ClinicasController from '../controllers/ClinicasController';
import {
  createClinicaValidation,
  updateClinicaValidation,
  showClinicaValidation,
  deleteClinicaValidation,
} from '../validators/ClinicaValidator';

const clinicaRouter = Router();
const ClinicaController = new ClinicasController();

clinicaRouter.get('/', ClinicaController.index);
clinicaRouter.get('/:idClinica', showClinicaValidation, ClinicaController.show);
clinicaRouter.post('/', createClinicaValidation, ClinicaController.create);
clinicaRouter.put('/:idClinica', updateClinicaValidation, ClinicaController.update);
clinicaRouter.delete('/:idClinica', deleteClinicaValidation, ClinicaController.delete);

export default clinicaRouter;
