import { celebrate, Joi, Segments } from 'celebrate';

export const createSolicitacaoItemValidation = celebrate({
  [Segments.BODY]: {
    idSolicitacao: Joi.number().required(),
    descricao: Joi.string().required(),
    status: Joi.string().valid('ativo', 'inativo').required(),
  },
});

export const updateSolicitacaoItemValidation = celebrate({
  [Segments.BODY]: {
    idSolicitacaoItem: Joi.number().required(),
    descricao: Joi.string().required(),
    status: Joi.string().valid('ativo', 'inativo').required(),
  },
});

export const showSolicitacaoItemValidation = celebrate({
  [Segments.PARAMS]: {
    idSolicitacaoItem: Joi.number().required(),
  },
});

export const deleteSolicitacaoItemValidation = celebrate({
  [Segments.PARAMS]: {
    idSolicitacaoItem: Joi.number().required(),
  },
});
