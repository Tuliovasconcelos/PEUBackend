import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDocumentoTipo1685123990735 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'documentoTipo',
        columns: [
          {
            name: 'idDocumentoTipo',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nome',
            type: 'varchar(100)',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['A', 'I'],
            default: "'A'",
            isNullable: false,
          },
          {
            name: 'dataAlteracao',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('documentoTipo');
  }
}
