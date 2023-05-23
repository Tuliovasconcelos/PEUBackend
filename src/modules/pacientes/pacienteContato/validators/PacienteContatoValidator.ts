import { celebrate, Joi, Segments } from 'celebrate';

export const createPacienteContatoValidation = celebrate({
  [Segments.BODY]: {
    idPaciente: Joi.number().required(),
    tipoContato: Joi.string().valid('telefone', 'email', 'outro').required(),
    valorContato: Joi.string().required(),
  },
});

export const updatePacienteContatoValidation = celebrate({
  [Segments.PARAMS]: {
    idPacienteContato: Joi.number().required(),
  },
  [Segments.BODY]: {
    idPaciente: Joi.number(),
    tipoContato: Joi.string().valid('telefone', 'email', 'outro'),
    valorContato: Joi.string(),
  },
});

export const showPacienteContatoValidation = celebrate({
  [Segments.PARAMS]: {
    idPacienteContato: Joi.number().required(),
  },
});

export const deletePacienteContatoValidation = celebrate({
  [Segments.PARAMS]: {
    idPacienteContato: Joi.number().required(),
  },
});
