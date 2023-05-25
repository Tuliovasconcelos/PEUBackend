import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateProgramaClinicaTable1631190000005 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ProgramaClinica',
        columns: [
          {
            name: 'idProgramaClinica',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'idPrograma',
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
      })
    );

    await queryRunner.createForeignKey(
      'ProgramaClinica',
      new TableForeignKey({
        columnNames: ['idPrograma'],
        referencedTableName: 'Programa',
        referencedColumnNames: ['idPrograma'],
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'ProgramaClinica',
      new TableForeignKey({
        columnNames: ['idClinica'],
        referencedTableName: 'Clinica',
        referencedColumnNames: ['idClinica'],
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('ProgramaClinica', 'FK_ProgramaClinica_idPrograma');
    await queryRunner.dropForeignKey('ProgramaClinica', 'FK_ProgramaClinica_idClinica');
    await queryRunner.dropTable('ProgramaClinica');
  }
}
