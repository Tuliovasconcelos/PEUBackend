import { getCustomRepository } from 'typeorm';
import DocumentoTipo from '../typeorm/entities/DocumentoTipo';
import DocumentoTipoRepository from '../typeorm/repositories/DocumentoTipoRepository';

export default class ListDocumentoTipoService {
  public async execute(): Promise<DocumentoTipo[]> {
    const documentoTipoRepository = getCustomRepository(DocumentoTipoRepository);
    const documentoTipos = await documentoTipoRepository.find();

    return documentoTipos;
  }
}
