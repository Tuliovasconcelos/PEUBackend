import { Router } from 'express';
import ProntuarioHabitoVidaController from '../controllers/ProntuarioHabitoVidaController';
import {
  createProntuarioHabitoVidaValidation,
  updateProntuarioHabitoVidaValidation,
  showProntuarioHabitoVidaValidation,
  deleteProntuarioHabitoVidaValidation,
} from '../validators/ProntuarioHabitoVidaValidator';

const prontuarioRoutes = Router();
const prontuarioHabitoVidaController = new ProntuarioHabitoVidaController();

prontuarioRoutes.get('/', prontuarioHabitoVidaController.index);
prontuarioRoutes.get('/:id', showProntuarioHabitoVidaValidation, prontuarioHabitoVidaController.show);
prontuarioRoutes.post('/', createProntuarioHabitoVidaValidation, prontuarioHabitoVidaController.create);
prontuarioRoutes.put('/:id', updateProntuarioHabitoVidaValidation, prontuarioHabitoVidaController.update);
prontuarioRoutes.delete('/:id', deleteProntuarioHabitoVidaValidation, prontuarioHabitoVidaController.delete);

export default prontuarioRoutes;
