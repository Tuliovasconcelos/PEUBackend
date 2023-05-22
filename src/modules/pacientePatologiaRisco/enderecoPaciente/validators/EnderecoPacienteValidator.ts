import { celebrate, Joi, Segments } from 'celebrate';

export const createEnderecoPacienteValidation = celebrate({
  [Segments.BODY]: {
    pacienteId: Joi.number().required(),
    endereco: Joi.string().required(),
    cidade: Joi.string().required(),
    estado: Joi.string().required(),
    cep: Joi.string().required(),
  },
});

export const updateEnderecoPacienteValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
  [Segments.BODY]: {
    pacienteId: Joi.number().required(),
    endereco: Joi.string().required(),
    cidade: Joi.string().required(),
    estado: Joi.string().required(),
    cep: Joi.string().required(),
  },
});

export const deleteEnderecoPacienteValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});

export const showEnderecoPacienteValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});
