//Archivo genérico. Para usar borrar esta línea, cargar las credenciales correctas y mofificar la extensión por .js

module.exports = {
  "development": {
    "username": "root",
    "password": 'root',
    "database": "movies_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "8889"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
