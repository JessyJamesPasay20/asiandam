<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
        <script src="./js/style.js"></script>
        <title>Home</title>
    </head> 
    <body>
        <header>
            <!-- Navbar 'pop-up' after interacting with the openslide button -->
            <button aria-label="button that opens the navbar upon interaction" onclick="openSlideMenu()">
                <svg viewBox="0 0 40.53 26.84">
                    <line  x1="4.33" y1="35.7" x2="4.75" y2="1.7"/>
                    <line  x1="15.58" y1="35.84" x2="16" y2="1.84"/>
                    <line  x1="26.83" y1="35.98" x2="27.25" y2="1.98"/>
                </svg>
            </button>
            <!-- navbar hidden until interacted with the openslide button -->
            <nav tabindex="0">
                <!-- button to close the nav bar after interacting with the openslidebutton-->
                <button aria-label="button that closes the navbar upon interaction" onclick="closeSlideMenu()">
                    <!-- Close icon navbar-->
                    <svg viewBox="0 0 30.53 36.84" >
                        <line class="st0" x1="28.53" y1="34.84" x2="2.6" y2="2.71"/>
                        <line class="st0" x1="2.4" y1="34.45" x2="27.95" y2="2.52"/>
                    </svg>
                </button>
                <img src="assets/logo/logo-v6-white.png" alt="Words of wis'dam logo">
                <ul>
                    <li>
                        <a href="./guides.html">guides</a>
                    </li>
                    <li>
                        <a href="./culture.html">culture</a>
                    </li>
                    <li>
                        <a href="./locations.html">locations</a>
                    </li>
                    <li>
                        <a href="./contact.html">contact</a>
                    </li>
                </ul>    
            </nav>
            <img alt="Words of wis'dam logo" src="assets/logo/logo-v7.png">
        </header>
        <main>
            <section>
                <?php 
                    echo '<h1 id="confirm">Thank you <span>'. $_POST['name'] . '</span> for sending your message! I will reply very soon.</h1>';
                ?>
            </section>
        </main>
        <footer>
            <img alt="Words of wisdam" src="assets/logo/logo-blue.png">
            <!--contact section-->
            <section>
                <h2>Return to the home page!</h2>
                <a href="./index.html">home</a>
            </section>
            <!-- footer navigation -->
            <section>
            <h3>Pages</h3>
            <ul>
                <li>
                    <a>guides</a>
                </li>
                <li>
                    <a>asian spots</a>
                </li>
                <li>
                    <a>contact</a>
                </li>
            </ul>
            <h3>futher information</h3>
            <ul>
                <li>
                    <a>terms & conditions</a>
                </li>
                <li>
                    <a>privacy policy</a>
                </li>
            </ul>
            </section>
            <!-- Copyright -->
            <small>copyright 2021 AsianDam. all rights reserved</small>
        </footer>
   </body> 
</html>