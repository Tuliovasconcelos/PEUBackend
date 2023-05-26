import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRiscoTable1631181382573 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'risco',
        columns: [
          {
            name: 'idRisco',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'Descricao',
            type: 'varchar',
            length: '255',
            isNullable: true,
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
      true
    );
    await queryRunner.createPrimaryKey('risco', ['idRisco']);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('risco');
  }
}
