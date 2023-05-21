import { Router } from 'express';
import usersRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import passwordRouter from '@modules/users/routes/password.routes';
import profileRouter from '@modules/users/routes/profile.routes';
import pacientesRouter from '@modules/pacientes/paciente/routes/pacientes.routes';
import enderecoPacienteRouter from '@modules/pacientes/enderecoPaciente/routes/enderecoPaciente.routes';
import contatoPacienteRouter from '@modules/pacientes/contatoPaciente/routes/contatoPaciente.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/pacientes', pacientesRouter);
routes.use('/enderecosPacientes', enderecoPacienteRouter);
routes.use('/contatosPacientes', contatoPacienteRouter);

export default routes;
