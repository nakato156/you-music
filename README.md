# You-music
You-music es una aplicación de escritorio multiplataforma (aun solo disponible para windows) totalmente gratuita hecha en electron, la cual utiliza la api de YouTube para la búsqueda y muestra de videos, obviamente sin anuncios :D.

------------

## Características

Por defecto You-music implementa el modo oscuro y muy dificilmente se trabajará en un modo claro. Esta aplicación está pensada para personas con una PC de bajos recursos y que no pueda soporta muchas pestañas de algun navegador (como Google Chrome).

Para usar la aplicación no se necesita ningun tipo de registro ni nada parecido, solo descargalo y ya!
La aplicación utiliza como base de datos a firebase, esto por que es facil de integrar con sistemas operativos de los móviles (para futuras versiones). Los únicos datos que son guardados/almacenados son las búsquedas, esto se hace con el fin de poder recopilar las músicas más buscadas y así poder crear una Base de Datos propia de You-music, esto se hace con el fin de evitar demandas o mal entendidos con Youtube. 
You-music planea ser una simple aplicación de música (parecido a Spotify) totalmente gratuita, por ahora tambien se pueden ver videos pero en futuras versiones esta característica desaparecerá.

------------

## Configurar proyecto
Si clona el repositorio necesitará dos cosas para poder hacer funcionar la aplicación.

1. Un archivo JSON `serviceAccount.json` que es proporcionado por firebase, para esto tendrá que ir a su consola de firebase, seleccionar su proyecto e ir en configuración de proyecto, posteriormente se dirigirá a la seccion de *cuentas de servicio*, ahí podrá descargar su archivo JSON y luego lo renombrará a `serviceAccount.json`

2. A su vez se necesita la API de YouTube para poder realizar las peticiones y obtener los videos, necesitará crear una API Key de YouTube y ponerla en una variable de entorno, se puede guiar de cualquier video de YouTube para obtener su API Key.

Dentro de la carpeta `app` tendrá que crear un archivo `config.js`, en este archivo se establecen las variables de entorno. Se opta por esto dado que al momento de producción electro no puede leer las variables de entorno creadas por Node. Se establecen las siguientes variables.

- `process.env.API_KEY` : API Key de YouTube.
- `process.env.DBURL` : Url de la base de datos de firebase, se puede encontrar al momento de descargar su archivo `serviceAccount.json` en la consola de firebase.
- `process.env.COLLECTION` : Nombre de la colección de su Base de Datos de Firebase.

------------

## Descargar
### Para desarrolladores
Para descargar la aplicación se puede clonar el repositorio, installar todas las dependencias (incluidas las de desarrollo) y configurar su proyecto (especificado en la sección de *configurar proyecto*)  y luego ejecutar el comando `npm run dist`, con esto se creará una carpeta llamda `dist` en la cual se encontrará el instalador

### Para todos
En la raíz del proyecto se encuentra un archivo llamado `aplicacion.exe`, descarge tal archivo y ejecutelo, este es el instalador de la aplicación.

##### Otro método (aun en desarrollo)
Se esta trabajando en una aplicación para almacenar a todas las demás aplicaciones creadas por @Nakato156 (parecida a una Play Store) y cuando este disponible podra acceder al enlace disponible 

------------

## Contribuir
Eres más que bienvenido a contribuir, esta es una aplicación a la cual le falta mucho, si optimizas el código o mejoras cualquier aspecto sientete cómo de enviar un iusse y con mucho gusto lo revisaré 