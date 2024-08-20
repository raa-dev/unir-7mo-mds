<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="index.aspx.vb" Inherits="Calculadora.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
  <link href="../css/style.css" rel="stylesheet">

  <title>Programa de Ejemplo de una Calculadora</title>
</head>
<body>
  <form id="calculadora" runat="server">
    <div>
      <table>
        <tr>
          <td colspan="5">
             <input type="text" readonly id="resultado"></td>
        </tr>
        <tr>
          <td>
            <button type="button" id="clear" class="operacion">C</button></td>
          <td>
            <button type="button" id="dividir" class="operacion">/</button></td>
          <td>
            <button type="button" id="multiplicar" class="operacion">X</button></td>
          <td rowspan="2">
            <button type="button" id="restar" class="operacion">-</button>
          </td>
          <td rowspan="2">
            <button type="button" id="raizcuadrada" class="operacion">√</button>
          </td>
        </tr>
        <tr>
          <td>
            <button type="button">1</button></td>
          <td>
            <button type="button">2</button></td>
          <td>
            <button type="button">3</button></td>
        </tr>
        <tr>
          <td>
            <button type="button">4</button></td>
          <td>
            <button type="button">5</button></td>
          <td>
            <button type="button">6</button></td>
          <td rowspan="2">
            <button type="button" id="sumar" class="operacion">+</button>
          </td>
          <td rowspan="2">
            <button type="button" id="exponencial" class="operacion">Ʌ</button>
          </td>
        </tr>
        <tr>
          <td>
            <button type="button">7</button></td>
          <td>
            <button type="button">8</button></td>
          <td>
            <button type="button">9</button></td>
        </tr>
        <tr>
          <td colspan="2">
            <button type="button">0</button></td>
          <td colspan="3">
            <button type="button" id="igual" class="operacion">=</button></td>
        </tr>
      </table>
    </div>
  </form>
  <script src="../js/functions.js" type="text/javascript"></script>
</body>
</html>
