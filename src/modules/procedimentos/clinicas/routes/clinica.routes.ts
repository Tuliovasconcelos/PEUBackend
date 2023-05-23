import { Router } from 'express';
import ClinicasController from '../controllers/ClinicasController';
import {
  createClinicaValidation,
  updateClinicaValidation,
  showClinicaValidation,
  deleteClinicaValidation,
} from '../validators/ClinicaValidator';

const ClinicaRouter = Router();
const ClinicaController = new ClinicasController();

ClinicaRouter.get('/', ClinicaController.index);
ClinicaRouter.get('/:idClinica', showClinicaValidation, ClinicaController.show);
ClinicaRouter.post('/', createClinicaValidation, ClinicaController.create);
ClinicaRouter.put('/:idClinica', updateClinicaValidation, ClinicaController.update);
ClinicaRouter.delete('/:idClinica', deleteClinicaValidation, ClinicaController.delete);

export default ClinicaRouter;
