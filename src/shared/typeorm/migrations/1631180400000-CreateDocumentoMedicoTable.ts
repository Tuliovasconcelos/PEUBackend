import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateDocumentoMedicoTable1631180400000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'documentoMedico',
        columns: [
          {
            name: 'idDocumentoMedico',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'idAtendimento',
            type: 'int',
          },
          {
            name: 'idDocumentoTipo',
            type: 'int',
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['ativo', 'inativo'],
            default: "'ativo'",
            isNullable: false,
          },
          {
            name: 'dataAlteracao',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['idAtendimento'],
            referencedColumnNames: ['idAtendimento'],
            referencedTableName: 'atendimento',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idDocumentoTipo'],
            referencedColumnNames: ['idDocumentoTipo'],
            referencedTableName: 'documentoTipo',
            onDelete: 'CASCADE',
          })
        ],
      }),
      true
    );
    await queryRunner.createPrimaryKey('documentoMedico', ['idDocumentoMedico']);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('documentoMedico', 'FK_documentoMedico_idAtendimento');
    await queryRunner.dropForeignKey('documentoMedico', 'FK_documentoMedico_idDocumentoTipo');
    await queryRunner.dropTable('documentoMedico');
  }
}
