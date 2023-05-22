import { celebrate, Joi, Segments } from 'celebrate';

export const createPacienteEnderecoValidation = celebrate({
  [Segments.BODY]: {
    pacienteId: Joi.number().required(),
    endereco: Joi.string().required(),
    cidade: Joi.string().required(),
    estado: Joi.string().required(),
    cep: Joi.string().required(),
  },
});

export const updatePacienteEnderecoValidation = celebrate({
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

export const deletePacienteEnderecoValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});

export const showPacienteEnderecoValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});
