#/bin/bash
echo "Actualizando repositorio de DWEC"

echo "Paso 1: Actualizar carpeta local"
git pull

echo "Paso 2: Añadimos archivos locales"
git add .

echo "Paso 3: Descripción de la subida"
read -p "Escibe el mensaje de subida" mensaje
git commit -m "$mensaje" .

echo "Paso 4: Realizar subida"
git push

