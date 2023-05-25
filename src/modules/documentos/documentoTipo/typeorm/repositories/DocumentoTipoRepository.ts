import { EntityRepository, Repository } from 'typeorm';
import DocumentoTipo from '../entities/DocumentoTipo';
@EntityRepository(DocumentoTipo)
export default class DocumentoTipoRepository extends Repository<DocumentoTipo> {
  public async findByName(nome: string): Promise<DocumentoTipo | null> {
    const documentoTipo = await this.findOne({
      where: {
        nome,
      },
    });

    return documentoTipo || null;
  }

  public async findById(id: number): Promise<DocumentoTipo | null> {
    const documentoTipo = await this.findOne({
      where: {
        idDocumentoTipo: id,
      },
    });

    return documentoTipo || null;
  }
}
