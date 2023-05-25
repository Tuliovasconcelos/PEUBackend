import { Router } from 'express';
import DocumentoMedicoController from '../controllers/DocumentoMedicoController';
import {
  createDocumentoMedicoValidation,
  updateDocumentoMedicoValidation,
  showDocumentoMedicoValidation,
  deleteDocumentoMedicoValidation,
} from '../validators/DocumentoMedicoValidator';

const DocumentoMedicoRouter = Router();
const documentoMedicoController = new DocumentoMedicoController();

DocumentoMedicoRouter.get('/', documentoMedicoController.index);
DocumentoMedicoRouter.get('/:idDocumentoMedico', showDocumentoMedicoValidation, documentoMedicoController.show);
DocumentoMedicoRouter.post('/', createDocumentoMedicoValidation, documentoMedicoController.create);
DocumentoMedicoRouter.put('/:idDocumentoMedico', updateDocumentoMedicoValidation, documentoMedicoController.update);
DocumentoMedicoRouter.delete('/:idDocumentoMedico', deleteDocumentoMedicoValidation, documentoMedicoController.delete);

export default DocumentoMedicoRouter;
