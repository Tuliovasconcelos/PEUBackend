import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import DocumentoTipoRepository from '../typeorm/repositories/DocumentoTipoRepository';

interface IRequest {
  idDocumentoTipo: number;
}

export default class DeleteDocumentoTipoService {
  public async execute({ idDocumentoTipo }: IRequest): Promise<void> {
    const documentoTipoRepository = getCustomRepository(DocumentoTipoRepository);
    const documentoTipo = await documentoTipoRepository.findById(idDocumentoTipo);

    if (!documentoTipo) {
      throw new AppError('DocumentoTipo not found');
    }

    await documentoTipoRepository.remove(documentoTipo);
  }
}
