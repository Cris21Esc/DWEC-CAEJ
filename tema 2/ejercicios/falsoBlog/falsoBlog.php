<head>
    <title>Blog de Cris</title>
</head>

<body>
<?php 
 if(! isset($_REQUEST["enviar"])){
?>
        <form action="falsoBlog.php" method="post">
            <input type="text" name="texto"/>   
            <input type="submit" name="enviar" value="Enviar"/>
        </form>
        <?php
        }
        else{
            echo "<p>Gracias por rellenar el formulario</p>";
            echo "<p>Texto: " . $_REQUEST["texto"];
            if($_REQUEST["texto"]==""){
                echo "Texto Vacío";
            }
            echo "</p>";
        }
        ?>
</body>
</html>
</body>
</html>