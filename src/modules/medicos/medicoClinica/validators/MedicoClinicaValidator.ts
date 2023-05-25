import { celebrate, Segments, Joi } from 'celebrate';

export const createMedicoClinicaValidation = celebrate({
  [Segments.BODY]: {
    idMedico: Joi.number().required(),
    idClinica: Joi.number().required(),
    status: Joi.string().valid('ativo', 'inativo').required(),
  },
});

export const updateMedicoClinicaValidation = celebrate({
  [Segments.BODY]: {
    status: Joi.string().valid('ativo', 'inativo').required(),
  },
});

export const showMedicoClinicaValidation = celebrate({
  [Segments.PARAMS]: {
    idMedicoClinica: Joi.number().required(),
  },
});

export const deleteMedicoClinicaValidation = celebrate({
  [Segments.PARAMS]: {
    idMedicoClinica: Joi.number().required(),
  },
});
