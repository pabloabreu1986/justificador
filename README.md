# Servidor REST Express / Express REST Server

[![N|Solid](https://www.idqweb.com/wp-content/uploads/2016/08/cabecera-nodejs-express.png)](https://nodesource.com/products/nsolid)

Implementación de un serividor REST con Express+NodeJS tiene un endpoint único que recibe en el body un campo "text" con un texto a justificar y un campo "long" con el largo de la linea. Devuelve un arreglo con cada una de las lineas justifiadas a longitud pasada como "long".


# Endpont!


### getJustified

- GET: getJustified

### Instalar paquetes / Install dependencies

Se requiere / Required:

[Node.js](https://nodejs.org/) v8+ to run.

Instalar las dependencias y correr el servidor / Install the dependencies and run the server.

```sh
$ cd path/to/project
$ npm install
$ npm run start
```

En desarrollo para instalar dependencias y dependencias de desarrollo (devDependencies) y correr el servidor.

For non production environments...

```sh
$ npm install
$ npm install --dev
$ npm run dev
```

### Por hacer / TO DO..!!

- Pruebas Unitarias / Unitary Test
- Dockerizar / Dockerize

### Probar en localhost / Try at localhost

- http://localhost:3000/getJustified

```
body: {
    "text": "Este es el texto que necesito justificar con este endpoint",
    "long":15
}
```

## License

MIT

**No reinventar la rueda!**
