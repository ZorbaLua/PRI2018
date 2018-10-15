<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">
  
  <xsl:output method="html" indent="yes"/>
  
  <xsl:template match="/">
    
    <xsl:result-document href="quran/index.html">
      <html>
        <head>
          <meta charset="UTF-8"/>
        </head>
        <body>
          <xsl:apply-templates/>
        </body>
      </html>
    </xsl:result-document>
    
    <xsl:apply-templates/>
    <!--Geração de páginas individuais-->
  </xsl:template>
  
  <xsl:template match="sura" mode="indice">⁠
    <li>
      <a href="sura{count(preceding-sibling::*)+1}.html">
        <xsl:value-of select="bktlong"/>
      </a>
    </li>
  </xsl:template>
  
  <xsl:template match="sura">
    
    <xsl:result-document href="quran/sura{count(preceding-sibling::*)+1}.html">
      <html>
        <head>
          <meta charset="UTF-8"/>
        </head>
        <body>
          
          <xsl:apply-templates/>
          <p>
            [<a href="index.html">Voltar ao indice</a>]
          </p>
        </body>
      </html>
    </xsl:result-document>
    
  </xsl:template>
  
  <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
  
  <xsl:template match="suracoll">
    <hr/>
    <h2>Índice</h2 >
    
    <xsl:apply-templates select="sura" mode="indice">
      <!-- <xsl:sort select="bktlong"/>-->
    </xsl:apply-templates>
    <hr/>
  </xsl:template>
  
  <xsl:template match="title">
    <h1>
      <xsl:value-of select="."/>
    </h1>
  </xsl:template>
  
  <xsl:template match="title2">
    <h2>
      <xsl:value-of select="."/>
    </h2>
  </xsl:template>
  
  <xsl:template match="subtitle">
    <h4>
      <xsl:apply-templates/>
    </h4>
  </xsl:template>
  
  <xsl:template match="subtitle">
    
    <xsl:apply-templates/>
    <hr/>
  </xsl:template>
  
  <!-- WWWWWWWWWWWW-->
  
  <xsl:template match="p">
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
  
  <!-- wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww -->
  
  <xsl:template match="bktlong">
    <h1>
      <xsl:value-of select="."/>
    </h1>
  </xsl:template>
  
  <xsl:template match="bktshort">
    <h2>
      <xsl:value-of select="."/>
    </h2>
  </xsl:template>
  
  <xsl:template match="epigraph">
    <h3>
      <xsl:value-of select="."/>
    </h3>
  </xsl:template>
  <xsl:template match="ptitle">
    <h4>
      <xsl:value-of select="."/>
    </h4>
  </xsl:template>
  
  <xsl:template match="v">
    <p>
      <xsl:value-of select="."/>
    </p>
  </xsl:template>
  
</xsl:stylesheet>
