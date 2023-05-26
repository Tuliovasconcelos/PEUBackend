import { celebrate, Joi, Segments } from 'celebrate';

export const createDocumentoTipoValidation = celebrate({
  [Segments.BODY]: {
    nome: Joi.string().required(),
    status: Joi.string().valid('A', 'I').required(),
  },
});

export const updateDocumentoTipoValidation = celebrate({
  [Segments.PARAMS]: {
    idDocumentoTipo: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    nome: Joi.string(),
    status: Joi.string().valid('A', 'I'),
  },
});

export const showDocumentoTipoValidation = celebrate({
  [Segments.PARAMS]: {
    idDocumentoTipo: Joi.number().integer().required(),
  },
});

export const deleteDocumentoTipoValidation = celebrate({
  [Segments.PARAMS]: {
    idDocumentoTipo: Joi.number().integer().required(),
  },
});
