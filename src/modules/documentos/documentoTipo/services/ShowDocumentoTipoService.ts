import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import DocumentoTipo from '../typeorm/entities/DocumentoTipo';
import DocumentoTipoRepository from '../typeorm/repositories/DocumentoTipoRepository';

interface IRequest {
  idDocumentoTipo: number;
}

export default class ShowDocumentoTipoService {
  public async execute({ idDocumentoTipo }: IRequest): Promise<DocumentoTipo> {
    const documentoTipoRepository = getCustomRepository(DocumentoTipoRepository);
    const documentoTipo = await documentoTipoRepository.findById(idDocumentoTipo);

    if (!documentoTipo) {
      throw new AppError('DocumentoTipo not found');
    }

    return documentoTipo;
  }
}
