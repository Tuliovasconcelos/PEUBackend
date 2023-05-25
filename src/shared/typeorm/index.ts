import { createConnections } from 'typeorm';

createConnections().then(connections => {

  const mysqlConnection = connections.find(connection => connection.name === 'mysql');

}).catch(error => console.log(error));
