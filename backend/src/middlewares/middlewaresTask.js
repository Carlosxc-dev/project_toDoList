// valida se o campo do nome da tarefa tem alguns texto
const validateFieldTitle = (request, response, next) => {
    const { body } = request;
  
    if (body.title === undefined) {
      return response.status(400).json({ message: 'The field "title" is required' });
    }
  
    if (body.title === '') {
      return response.status(400).json({ message: 'title cannot be empty' });
    }
  
    next();
  };
  
  // valida de o campo de status da tarefa nao esta vazia ou indefinida
  const validateFieldStatus = (request, response, next) => {
    const { body } = request;
  
    if (body.status === undefined) {
      return response.status(400).json({ message: 'The field "status" is required' });
    }
  
    if (body.status === '') {
      return response.status(400).json({ message: 'status cannot be empty' });
    }
  
    next();
  };
  
  // exporta as funcoes para outros aquivos
  module.exports = {
    validateFieldStatus,
    validateFieldTitle,
  };