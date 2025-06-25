# Ejecutar en desarrollo 

1. Clonar el repositorio 
2. Ejecutar 
```
npm install
```
3. Tener instalado Nest CLI 
```
npm install -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d

```
5. Clonar env.template y renombrarlo .env

6. Llenar las variables de entorno

7. Levantar datos semilla (solo desarrollo)
```
http://localhost:3001/api/seed
```
### Stack usado

* Mongo DB
* Nest
