# control-stock
App que cree para un trabajo anterior ante la falta de un programa para gestionar el stock.

Se trata de un programa simple conectado a una DB (MongoDB), el cual permite gestionar el stock y ubicacion de la mercaderia en 3 depositos distintos.

Cuenta con un CRUD completo para agregar, modificar, editar o borrar los datos cargados, y distintos filtros para manipular la información proveniente de la DB junto a una paginación que permite modificar la cantidad de elementos mostrados en pantalla.

## Pasos a seguir para poder utilizar la app:
* Clonar el repo e instalar los paquetes de npm utilizando el comando `npm install` en la carpeta del proyecto.

* Crear un archivo `.env` en la raiz del proyecto y agregar las siguientes lineas:
```
REACT_APP_APIDEV_MANGAS=http://localhost:5000/api/mangas
REACT_APP_APIDEV_LOGIN=http://localhost:5000/api/auth
 ```
* Utilizar el comando `npm run build` para crear un build del proyecto.

* Ejecutar el archivo `App.bat` para correr la aplicacion Frontend. 

---

### Frontend:
- React
- MaterialUI
- Redux
- Axios
- SweetAlert

### Backend: 
- NodeJs
- Express
- MongoDB
- Mongoose

---

### [Repo Backend](https://github.com/lucasmoauro/control-stock-backend)
