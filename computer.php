<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "portfolio";


// Connexion à la base
$conn = new mysqli($host, $user, $pass, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Erreur de connexion : " . $conn->connect_error);
}

// Ajouter une visite
$sql = "INSERT INTO visites () VALUES ()";
$conn->query($sql);

// Compter les visites
$result = $conn->query("SELECT COUNT(*) AS total FROM visites");
$row = $result->fetch_assoc();
echo "Nombre de visites : " . $row['total'];

$conn->close();
?>
<div id="compteur">
    <?php include("compteur.php"); ?>
</div>
