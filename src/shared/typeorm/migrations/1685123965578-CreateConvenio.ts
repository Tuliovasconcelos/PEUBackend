import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateConvenio1685123965578 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'convenio',
        columns: [
          {
            name: 'idConvenio',
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
    await queryRunner.dropTable('convenio');
  }
}
