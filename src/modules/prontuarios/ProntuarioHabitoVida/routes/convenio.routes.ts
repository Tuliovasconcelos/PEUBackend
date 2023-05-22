import { Router } from 'express';
import ConveniosController from '../controllers/ConveniosController';
import {
  createConvenioValidation,
  updateConvenioValidation,
  showConvenioValidation,
  deleteConvenioValidation,
} from '../validators/ConvenioValidator';

const convenioRouter = Router();
const convenioController = new ConveniosController();

convenioRouter.get('/', convenioController.index);
convenioRouter.get('/:idConvenio', showConvenioValidation, convenioController.show);
convenioRouter.post('/', createConvenioValidation, convenioController.create);
convenioRouter.put('/:idConvenio', updateConvenioValidation, convenioController.update);
convenioRouter.delete('/:idConvenio', deleteConvenioValidation, convenioController.delete);

export default convenioRouter;
