<html>

<head>
    <title>EECS 348 Lab Seven</title>
    <link rel="stylesheet" href="styles.css">
    <script src="scripts.js"></script>
</head>

<body id="problem02">
    <header class="flex-container">
        <div class="flex-element" style="text-align: center;">
            <h1 style="margin-bottom: 5px; text-align: center;"> Problem 04: PHP Multiplication Table</h1>
            <a href="../~p114p932/">Return to homepage</a>
        </div>
    </header>

    <hr>

    <div class="container flex-container">
        <div class="flex-element">
            <form method="post" action="problem04.php">
                <label for="input">Table Size:</label>
                <input type="text" name="input">
                <button type="submit">Click to create table!</button>
            </form>
        </div> 
    </div>

    <div class="container flex-container">
        <div class="flex-element">
            <?php
                $input = $_POST["input"];

                echo "<table>";
                    
                echo "<tr><th></th>";
                for ($i = 1; $i <= $input; $i++) 
                {
                    echo "<th>".$i."</th>";
                }
                echo "</tr>";

                for ($i = 1; $i <= $input; $i++) 
                {
                    echo "<tr><th>".$i."</th>";
                    for ($j = 1; $j <= $input; $j++) 
                    {
                        echo "<td>".($i * $j)."</td>";
                    }
                    echo "</tr>";
                }

                echo "</table>";
            ?>
        </div>
</div>

</body>

</html>