import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreatePacientePatologiaRiscoTable1631181382574 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pacientePatologiaRisco',
        columns: [
          {
            name: 'idPacientePatologiaRisco',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
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
            referencedTableName: 'paciente',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idPatologia'],
            referencedColumnNames: ['idPatologia'],
            referencedTableName: 'patologia',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['idRisco'],
            referencedColumnNames: ['idRisco'],
            referencedTableName: 'risco',
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
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('pacientePatologiaRisco', 'FK_pacientePatologiaRisco_idPaciente');
    await queryRunner.dropForeignKey('pacientePatologiaRisco', 'FK_pacientePatologiaRisco_idPatologia');
    await queryRunner.dropForeignKey('pacientePatologiaRisco', 'FK_pacientePatologiaRisco_idRisco');
    await queryRunner.dropTable('pacientePatologiaRisco');
  }
}
