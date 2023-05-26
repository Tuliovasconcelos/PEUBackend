import { Router } from 'express';
import DocumentoMedicoController from '../controllers/DocumentoMedicoController';
import {
  createDocumentoMedicoValidation,
  updateDocumentoMedicoValidation,
  showDocumentoMedicoValidation,
  deleteDocumentoMedicoValidation,
} from '../validators/DocumentoMedicoValidator';

const documentoMedicoRouter = Router();
const documentoMedicoController = new DocumentoMedicoController();

documentoMedicoRouter.get('/', documentoMedicoController.index);
documentoMedicoRouter.get('/:idDocumentoMedico', showDocumentoMedicoValidation, documentoMedicoController.show);
documentoMedicoRouter.post('/', createDocumentoMedicoValidation, documentoMedicoController.create);
documentoMedicoRouter.put('/:idDocumentoMedico', updateDocumentoMedicoValidation, documentoMedicoController.update);
documentoMedicoRouter.delete('/:idDocumentoMedico', deleteDocumentoMedicoValidation, documentoMedicoController.delete);

export default documentoMedicoRouter;
