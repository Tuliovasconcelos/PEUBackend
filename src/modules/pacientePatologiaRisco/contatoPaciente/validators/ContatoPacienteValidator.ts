import { celebrate, Joi, Segments } from 'celebrate';

export const createContatoPacienteValidation = celebrate({
  [Segments.BODY]: {
    idPaciente: Joi.number().required(),
    tipoContato: Joi.string().valid('telefone', 'email', 'outro').required(),
    valorContato: Joi.string().required(),
  },
});

export const updateContatoPacienteValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required(),
  },
  [Segments.BODY]: {
    idPaciente: Joi.number(),
    tipoContato: Joi.string().valid('telefone', 'email', 'outro'),
    valorContato: Joi.string(),
  },
});

export const showContatoPacienteValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required(),
  },
});

export const deleteContatoPacienteValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required(),
  },
});
