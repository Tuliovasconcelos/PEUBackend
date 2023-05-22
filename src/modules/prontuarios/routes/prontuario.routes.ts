import { Router } from 'express';
import ProntuarioController from '../controllers/ProntuariosController';
import {
  createProntuarioValidation,
  updateProntuarioValidation,
  showProntuarioValidation,
  deleteProntuarioValidation,
} from '../validators/ProntuarioValidator';

const prontuarioRoutes = Router();
const prontuarioController = new ProntuarioController();

prontuarioRoutes.get('/', prontuarioController.index);
prontuarioRoutes.get('/:id', showProntuarioValidation, prontuarioController.show);
prontuarioRoutes.post('/', createProntuarioValidation, prontuarioController.create);
prontuarioRoutes.put('/:id', updateProntuarioValidation, prontuarioController.update);
prontuarioRoutes.delete('/:id', deleteProntuarioValidation, prontuarioController.delete);

export default prontuarioRoutes;
