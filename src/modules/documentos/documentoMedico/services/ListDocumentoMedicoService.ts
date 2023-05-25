import { getCustomRepository } from 'typeorm';
import DocumentoMedico from '../typeorm/entities/DocumentoMedico';
import DocumentoMedicoRepository from '../typeorm/repositories/DocumentoMedicoRepository';

export default class ListDocumentoMedicoService {
  public async execute(): Promise<DocumentoMedico[]> {
    const documentoMedicoRepository = getCustomRepository(DocumentoMedicoRepository);
    const documentosMedicos = await documentoMedicoRepository.find();

    return documentosMedicos;
  }
}
