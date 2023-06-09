import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClinica1685123974335 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clinica',
        columns: [
          {
            name: 'idClinica',
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
            name: 'endereco',
            type: 'varchar(200)',
            isNullable: false,
          },
          {
            name: 'telefone',
            type: 'varchar(20)',
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
    await queryRunner.dropTable('clinica');
  }
}
