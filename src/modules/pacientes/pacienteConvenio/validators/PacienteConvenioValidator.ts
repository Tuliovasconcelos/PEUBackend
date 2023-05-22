import { celebrate, Joi, Segments } from 'celebrate';

export const createPacienteConvenioValidation = celebrate({
  [Segments.BODY]: {
    idPaciente: Joi.number().integer().required(),
    idConvenio: Joi.number().integer().required(),
    numeroCarteira: Joi.string().required(),
  },
});

export const updatePacienteConvenioValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    numeroCarteira: Joi.string().required(),
  },
});

export const showPacienteConvenioValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().integer().required(),
  },
});

export const deletePacienteConvenioValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().integer().required(),
  },
});
