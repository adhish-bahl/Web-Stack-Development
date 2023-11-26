<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/dogs">
    <html lang="en">

        <head>
            <title>Dogs</title>
            <style>
                .card {
                    -webkit-box-shadow: 10px 10px 15px 0px rgba(0,0,0,0.75);
                    -moz-box-shadow: 10px 10px 15px 0px rgba(0,0,0,0.75);
                    box-shadow: 10px 10px 15px 0px rgba(0,0,0,0.75);
                }
            </style>
        </head>

        <body style="background-color: aquamarine;">

            
            <div style="display: flex;justify-content: center; align-items: center;flex-direction: column;">
                <table border="1">
                    <tr>
                        <th>Breed</th>
                        <th>Color</th>
                        <th>Country</th>
                    </tr>
                    <xsl:for-each select="dog">
                    <tr>
                        <td><xsl:value-of select="breed" /></td>
                        <td><xsl:value-of select="color" /></td>
                        <td><xsl:value-of select="country" /></td>
                    </tr>
                    </xsl:for-each>
                </table>
            </div>

        </body>

    </html>
</xsl:template>
</xsl:stylesheet>