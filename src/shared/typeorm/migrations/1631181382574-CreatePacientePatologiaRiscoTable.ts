import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreatePacientePatologiaRiscoTable1631181382574 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'PacientePatologiaRisco',
        columns: [
          {
            name: 'idPaciente',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'idPatologia',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'idRisco',
            type: 'int',
            isNullable: false,
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['idPaciente'],
            referencedColumnNames: ['idPaciente'],
            referencedTableName: 'Paciente',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idPatologia'],
            referencedColumnNames: ['idPatologia'],
            referencedTableName: 'Patologia',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idRisco'],
            referencedColumnNames: ['idRisco'],
            referencedTableName: 'Risco',
            onDelete: 'CASCADE',
          }),
        ],
        indices: [
          {
            columnNames: ['idPaciente', 'idPatologia', 'idRisco'],
            isUnique: true,
          },
        ],
      }),
      true // Indica que a tabela deve ser criada com a opção "IF NOT EXISTS"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('PacientePatologiaRisco');
  }
}
