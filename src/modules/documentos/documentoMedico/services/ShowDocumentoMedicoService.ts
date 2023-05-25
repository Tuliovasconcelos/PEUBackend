import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import DocumentoMedico from '../typeorm/entities/DocumentoMedico';
import DocumentoMedicoRepository from '../typeorm/repositories/DocumentoMedicoRepository';

interface IRequest {
  idDocumentoMedico: number;
}

export default class ShowDocumentoMedicoService {
  public async execute({ idDocumentoMedico }: IRequest): Promise<DocumentoMedico> {
    const documentoMedicoRepository = getCustomRepository(DocumentoMedicoRepository);
    const documentoMedico = await documentoMedicoRepository.findById(idDocumentoMedico);

    if (!documentoMedico) {
      throw new AppError('DocumentoMedico not found.');
    }

    return documentoMedico;
  }
}
