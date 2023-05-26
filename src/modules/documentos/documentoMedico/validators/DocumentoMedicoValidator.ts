import { celebrate, Joi, Segments } from 'celebrate';

export const createDocumentoMedicoValidation = celebrate({
  [Segments.BODY]: {
    idAtendimento: Joi.number().integer().required(),
    idTipoDocumento: Joi.number().integer().required(),
    status: Joi.string().valid('A', 'I').required(),
  },
});

export const updateDocumentoMedicoValidation = celebrate({
  [Segments.PARAMS]: {
    idDocumentoMedico: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    idAtendimento: Joi.number().integer(),
    idTipoDocumento: Joi.number().integer(),
    status: Joi.string().valid('A', 'I'),
  },
});

export const showDocumentoMedicoValidation = celebrate({
  [Segments.PARAMS]: {
    idDocumentoMedico: Joi.number().integer().required(),
  },
});

export const deleteDocumentoMedicoValidation = celebrate({
  [Segments.PARAMS]: {
    idDocumentoMedico: Joi.number().integer().required(),
  },
});
