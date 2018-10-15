<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">

  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <meta charset="UTF-8"/>
      </head>
      <body>
        <hr/>

        <xsl:apply-templates/>
        <hr/>
      </body>
    </html>
  </xsl:template>

  <!-- I -->

  <xsl:template match="meta">
    <h1>META</h1>

    <xsl:apply-templates/>
    <hr/>
  </xsl:template>

  <xsl:template match="equipe">
    <h1>EQUIPE</h1>

    <xsl:apply-templates/>
    <hr/>
  </xsl:template>

  <xsl:template match="resumo">
    <h1>RESUMO</h1>

    <xsl:apply-templates/>
    <hr/>
  </xsl:template>

  <xsl:template match="resultados">
    <h1>RESULTADOS</h1>

    <xsl:apply-templates/>
  </xsl:template>

  <!-- META -->

  <xsl:template match="id">
    <p>
      <b>ID :
      </b>

      <xsl:value-of select="."/>
    </p>
  </xsl:template>

  <xsl:template match="título">
    <p>
      <b>TÍTULO :
      </b>

      <xsl:value-of select="."/>
    </p>
  </xsl:template>

  <xsl:template match="subtítulo">
    <p>
      <b>SUBTÍTULO :
      </b>

      <xsl:value-of select="."/>
    </p>
  </xsl:template>

  <xsl:template match="dinício">
    <p>
      <b>DATA DE INÍCIO :
      </b>

      <xsl:value-of select="."/>
    </p>
  </xsl:template>

  <xsl:template match="dfim">
    <p>
      <b>DATA DE FIM :
      </b>

      <xsl:value-of select="."/>
    </p>
  </xsl:template>

  <xsl:template match="supervisor">
    <p>
      <b>SUPERVISOR :
      </b>
      <a href="{website}">
        <xsl:value-of select="nome"/>
      </a>
      -
      <a href="mailto:{email}">
        EMAIL
      </a>
    </p>
  </xsl:template>

  <!-- EQUIPE -->

  <xsl:template match="elemento">
    <p>

      <xsl:value-of select="nome"/>
      -
      <a href="mailto:{email}">
        <xsl:value-of select="id"/>
      </a>
    </p>
  </xsl:template>

  <!-- RESUMO -->

  <xsl:template match="para">
    <p>
      <xsl:apply-templates/>
    </p>
  </xsl:template>

  <xsl:template match="b">
    <b>
      <xsl:apply-templates/>
    </b>
  </xsl:template>

  <xsl:template match="i">
    <i>
      <xsl:apply-templates/>
    </i>
  </xsl:template>

  <xsl:template match="s">
    <s>
      <xsl:apply-templates/>
    </s>
  </xsl:template>

  <!-- RESULTADO -->

  <xsl:template match="resultado">
    <p>
      <a href="{@path}">
        <xsl:value-of select="."/>
      </a>
    </p>
  </xsl:template>

  <!-- I -->

</xsl:stylesheet>
