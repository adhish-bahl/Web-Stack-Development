<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/products">
    <html lang="en">

        <head>
            <title>ShopSmart | Shop</title>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>

            <style>
                .card {
                    -webkit-box-shadow: 10px 10px 15px 0px rgba(0,0,0,0.75);
                    -moz-box-shadow: 10px 10px 15px 0px rgba(0,0,0,0.75);
                    box-shadow: 10px 10px 15px 0px rgba(0,0,0,0.75);
                }
            </style>
        </head>

        <body style="background-color: rgb(212, 213, 214);">
            <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #383052;">
                <div class="container-fluid">
                    <span class="navbar-brand" style="font-size: 2rem;">ShopSmart</span>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav float-end d-flex justify-content-end w-100">
                            <li class="nav-item mx-1">
                                <a class="nav-link active" href="3">
                                    <span style="padding-left: 5px;">Shop</span>
                                </a>
                            </li>
                            <li class="nav-item mx-1">
                                <a class="nav-link  " href="#">
                                    <span style="padding-left: 5px;">About</span>
                                </a>
                            </li>
                            <li class="nav-item mx-1">
                                <a class="nav-link  " href="#">
                                    <span style="padding-left: 5px;">My Account</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            
            <div class="container d-flex align-items-center justify-content-center flex-wrap flex-column my-5">
                <xsl:for-each select="product">

                <div class="card mt-5 p-1 d-flex justify-content-center align-items-center flex-row" style="width: 85vw; border-radius: 10px;">
                    <img alt="shoe Image" style="width:23vw;"><xsl:attribute name="src"><xsl:value-of select='image' /></xsl:attribute></img>
                    <div class="card-body">
                        <h4 class="card-title"><xsl:value-of select="name" /></h4>
                        <h5 class="card-text px-5">Rs. <xsl:value-of select="price" /></h5>
                        <div class="card-text" style="text-align: justify;"><xsl:value-of select="description" /></div>
                        <div class="btn btn-dark mt-3" style="position: relative; left: 44vw;">Add to Cart</div>
                        <div class="btn btn-dark mt-3" style="position: relative; left: 45vw;">Wishlist</div>
                    </div>
                </div>
                </xsl:for-each>

            </div>


            <footer class="text-center text-white py-3"  style="background-color: #383052;">
                <div class="container">
                    <section class="">
                        <div class="d-flex justify-content-between w-100">
                            <span> © 2023 Copyright: ShopSmart</span>
                            <span>All Rights for Pictures are reserved</span>
                        </div>
                    </section>
                </div>
            </footer>

        </body>

    </html>
</xsl:template>
</xsl:stylesheet>