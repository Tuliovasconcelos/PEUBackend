import { celebrate, Joi, Segments } from 'celebrate';

export const createPacientePatologiaRiscoValidation = celebrate({
  [Segments.BODY]: {
    idPaciente: Joi.number().integer().required(),
    idPatologia: Joi.number().integer().required(),
    idRisco: Joi.number().integer().required(),
  },
});

export const deletePacientePatologiaRiscoValidation = celebrate({
  [Segments.PARAMS]: {
    idPaciente: Joi.number().integer().required(),
    idPatologia: Joi.number().integer().required(),
    idRisco: Joi.number().integer().required(),
  },
});

export const showPacientePatologiaRiscoValidation = celebrate({
  [Segments.PARAMS]: {
    idPaciente: Joi.number().integer().required(),
    idPatologia: Joi.number().integer().required(),
    idRisco: Joi.number().integer().required(),
  },
});

export const updatePacientePatologiaRiscoValidation = celebrate({
  [Segments.PARAMS]: {
    idPaciente: Joi.number().integer().required(),
    idPatologia: Joi.number().integer().required(),
    idRisco: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    // Adicione aqui as validações para os campos que serão atualizados
  },
});
