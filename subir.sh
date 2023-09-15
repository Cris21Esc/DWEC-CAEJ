#/bin/bash
echo "Actualizando repositorio de DWEC"

echo "Paso 1: Actualizar carpeta local"
git pull

echo "Paso 2: Añadimos archivos locales"
git add .

echo "Paso 3: Descripción de la subida"
read -p "Escribe el mensaje de subida: " mensaje
git commit -m "$mensaje" .

echo "Paso 4: Realizar subida"
echo "Recuerda tu token: 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"
git push

