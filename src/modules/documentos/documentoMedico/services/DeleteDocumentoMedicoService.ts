import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import DocumentoMedicoRepository from '../typeorm/repositories/DocumentoMedicoRepository';

interface IRequest {
  idDocumentoMedico: number;
}

export default class DeleteDocumentoMedicoService {
  public async execute({ idDocumentoMedico }: IRequest): Promise<void> {
    const documentoMedicoRepository = getCustomRepository(DocumentoMedicoRepository);
    const documentoMedico = await documentoMedicoRepository.findById(idDocumentoMedico);

    if (!documentoMedico) {
      throw new AppError('DocumentoMedico not found.');
    }

    await documentoMedicoRepository.remove(documentoMedico);
  }
}
