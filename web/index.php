<?php
    error_reporting(E_ALL);
    require_once "./App/ARS_SHELL_CRYPT/cryptage/Encryption.php";
    $post = $_POST;
    $encrypted = "";
    $decrypted = "";

    if (isset($post["encrypt-submit"])){
        if (!empty($post["input-crypt"])){
            $encrypted = (new Encryption($post["input-crypt"], (int)$post["sec-lvl"]))->str_encrypt();
        }
    } elseif (isset($post["decrypt-submit"])){
        if (!empty($post["input-decrypt"])){
            $decrypted = (new Encryption($post["input-decrypt"], (int)$post["sec-lvl"], [
                "encrypted" => $post["input-decrypt"],
                "decrypted" => ""
            ]))->str_decrypt();
        }
    }
?>

<html>
    <head>
        <title> ARS | Home </title>
        <link rel="icon" href="images/logo_small_icon_only.png">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">

        <!-- Head Meta -->
        <meta charset="utf-8">
        <meta name="creator" content="Neptune">
        <meta name="Official website for ARS_SHELL_CRYPT encryption system">

        <!-- CSS Style -->
        <link href="style/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="style/css/index.css" rel="stylesheet" >
    </head>

    <body>
        <nav id="navbar" class="base-nav navbar navbar-default navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="">
                        <img src="images/logo_white_large.png">
                    </a>
                </div>

                <div id="navbar">
                    <span>
                        <span class="pre"><br>&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;&#9;</span>
                        <span class="pre"><a href="#"> Home </a>&#9;&#9;</span>
                        <span class="pre"><a href="#crypter"> Crypter </a>&#9;&#9;</span>
                        <span class="pre"><a href="#decrypter"> Decrypter </a>&#9;&#9;</span>
                        <span class="pre"><a href="login.php"> Login </a></span><br><br>
                    </span>
                </div>
            </div>
        </nav>

        <header id="header">
            <div class="header-content">
                <div class="header-content-inner">
                    <h1> ARS Crypter </h1>
                    <p> New encryption/decryption system out ! </p>
                    <a href="#crypter" class="btn btn-primary btn-lg"> Try now </a>
                    <a href="buy-premium.php" class="btn btn-primary btn-lg"> Buy Premium </a>
                </div>
            </div>
        </header>

        <div id="crypter" class="select-content">
            <div class="container">
                <div class="select-menu">
                    <h1> Crypter </h1>

                    <form action="index.php#crypter" method="post">
                        <label>
                            <?php if (!empty($post["input-crypt"])) : ?>
                                <textarea rows="7" cols="75" placeholder="" spellcheck="false" name="input-crypt"><?php echo $post["input-crypt"] ?></textarea>
                            <?php else : ?>
                                <textarea rows="7" cols="75" placeholder="   Your text..." spellcheck="false" name="input-crypt"></textarea>
                            <?php endif; ?>
                            <textarea style="text-align: center" rows="7" cols="45" spellcheck="false" readonly="readonly"><?php echo $encrypted ?></textarea>
                        </label>
                        <select name="sec-lvl" id="sec-select">
                            <option value="1"> Level 1 </option>
                            <option value="2"> Level 2 </option>
                            <option value="3"> Level 3 </option>
                            <option value="4"> Level 4 </option>
                        </select>
                        <button type="submit" name="encrypt-submit"> Encrypt </button>
                    </form>
                </div>
            </div>
        </div>

        <div id="decrypter" class="select-content">
            <div class="container">
                <div class="select-menu">
                    <h1> Decrypter </h1>

                    <form action="index.php#decrypter" method="post">
                        <label>
                            <?php if (!empty($post["input-decrypt"])) : ?>
                                <textarea rows="7" cols="75" placeholder="" spellcheck="false" name="input-decrypt"><?php echo $post["input-decrypt"] ?></textarea>
                            <?php else : ?>
                                <textarea rows="7" cols="75" placeholder="   Your encrypted text..." spellcheck="false" name="input-decrypt"></textarea>
                            <?php endif; ?>
                            <textarea style="text-align: center" rows="7" cols="45" spellcheck="false" readonly="readonly"><?php echo $decrypted ?></textarea>
                        </label>
                        <select name="sec-lvl" id="sec-select">
                            <option value="1"> Level 1 </option>
                            <option value="2"> Level 2 </option>
                            <option value="3"> Level 3 </option>
                            <option value="4"> Level 4 </option>
                        </select>
                        <button type="submit" name="decrypt-submit"> Decrypt </button>
                    </form>
                </div>
            </div>
        </div>

        <footer class="page-footer">
            <div id="contact" class="contact-content">
                <div class="container">
                    <h2 class="section-heading"> Contact Us : </h2>
                    <p>
                        <span class="glyphicon glyphicon-envelope"></span><br> ars-crypter@gmail.com
                    </p>
                </div>
            </div>

            <div class="copyright">
                <div class="container">
                    <p> Copyright &copy; ARS Crypter 2021 <br> Fully developper by Neptune :) </p>
                </div>
            </div>
        </footer>
    </body>
</html>