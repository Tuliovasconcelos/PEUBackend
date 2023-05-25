import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import DocumentoMedico from '../typeorm/entities/DocumentoMedico';
import DocumentoMedicoRepository from '../typeorm/repositories/DocumentoMedicoRepository';

interface IRequest {
  idDocumentoMedico: number;
  idAtendimento?: number;
  idTipoDocumento?: number;
}

export default class UpdateDocumentoMedicoService {
  public async execute({ idDocumentoMedico, idAtendimento, idTipoDocumento }: IRequest): Promise<DocumentoMedico> {
    const documentoMedicoRepository = getCustomRepository(DocumentoMedicoRepository);
    const documentoMedico = await documentoMedicoRepository.findById(idDocumentoMedico);

    if (!documentoMedico) {
      throw new AppError('DocumentoMedico not found.');
    }

    if (idAtendimento) {
      documentoMedico.idAtendimento = idAtendimento;
    }

    if (idTipoDocumento) {
      documentoMedico.idTipoDocumento = idTipoDocumento;
    }

    documentoMedico.dataAlteracao = new Date();

    await documentoMedicoRepository.save(documentoMedico);

    return documentoMedico;
  }
}
