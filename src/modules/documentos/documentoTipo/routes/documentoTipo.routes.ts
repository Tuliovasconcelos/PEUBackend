import { Router } from 'express';
import DocumentoTipoController from '../controllers/DocumentoTipoController';
import {
  createDocumentoTipoValidation,
  updateDocumentoTipoValidation,
  showDocumentoTipoValidation,
  deleteDocumentoTipoValidation,
} from '../validators/DocumentoTipoValidator';

const documentoTipoRouter = Router();
const documentoTipoController = new DocumentoTipoController();

documentoTipoRouter.get('/', documentoTipoController.index);
documentoTipoRouter.get('/:id', showDocumentoTipoValidation, documentoTipoController.show);
documentoTipoRouter.post('/', createDocumentoTipoValidation, documentoTipoController.create);
documentoTipoRouter.put('/:id', updateDocumentoTipoValidation, documentoTipoController.update);
documentoTipoRouter.delete('/:id', deleteDocumentoTipoValidation, documentoTipoController.delete);

export default documentoTipoRouter;
