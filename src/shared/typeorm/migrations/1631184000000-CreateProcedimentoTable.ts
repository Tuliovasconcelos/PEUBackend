import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProcedimentoTable1631184000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'procedimento',
        columns: [
          {
            name: 'idProcedimento',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nome',
            type: 'varchar',
            length: '100',
            isNullable: false,
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
      }),
      true // Indica que a tabela deve ser criada com a opção "IF NOT EXISTS"
    );
    await queryRunner.createPrimaryKey('procedimento', ['idProcedimento']);

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('procedimento');
  }
}
