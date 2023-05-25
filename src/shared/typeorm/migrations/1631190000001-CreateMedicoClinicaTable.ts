import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateMedicoClinicaTable1631190000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'MedicoClinica',
        columns: [
          {
            name: 'idMedicoClinica',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'idMedico',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'idClinica',
            type: 'int',
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

    await queryRunner.createForeignKey(
      'MedicoClinica',
      new TableForeignKey({
        columnNames: ['idMedico'],
        referencedTableName: 'Medico',
        referencedColumnNames: ['idMedico'],
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'MedicoClinica',
      new TableForeignKey({
        columnNames: ['idClinica'],
        referencedTableName: 'Clinica',
        referencedColumnNames: ['idClinica'],
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('MedicoClinica');
  }
}
