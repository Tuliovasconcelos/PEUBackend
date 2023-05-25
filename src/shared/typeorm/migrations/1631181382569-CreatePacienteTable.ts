import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class CreatePacienteTable1631181382569 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Paciente',
        columns: [
          {
            name: 'idPaciente',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'idUsuario',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'nome',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'dataNascimento',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'genero',
            type: 'enum',
            enum: ['masculino', 'feminino', 'outro'],
            isNullable: false,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['ativo', 'inativo'],
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

    await queryRunner.addColumn(
      'Paciente',
      new TableColumn({
        name: 'idUsuario',
        type: 'int',
        isNullable: false,
      })
    );

    await queryRunner.createForeignKey(
      'Paciente',
      new TableForeignKey({
        columnNames: ['idUsuario'],
        referencedColumnNames: ['idUsuario'],
        referencedTableName: 'Usuario',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('Paciente');
    const foreignKey = table?.foreignKeys.find((fk) => fk.columnNames.indexOf('idUsuario') !== -1);
    if (foreignKey) {
      await queryRunner.dropForeignKey('Paciente', foreignKey);
    }
    await queryRunner.dropColumn('Paciente', 'idUsuario');
    await queryRunner.dropTable('Paciente');
  }
}
