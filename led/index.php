

<html>
<head>
<?php

 
if (isset($_POST['ron'])) // Red on
{

exec('sudo python /var/www/cpin3l.py');
}
if (isset($_POST['roff']))  //  Red Off
{
exec('sudo python /var/www/cpin3h.py');
}
if (isset($_POST['gon']))  // Green On
{
exec('sudo python /var/www/cpin5l.py');
}
if (isset($_POST['goff']))  // Green Off
{
exec('sudo python /var/www/cpin5h.py');
}
if (isset($_POST['bon']))  // Blue On
{
exec('sudo python /var/www/cpin7l.py');
}
if (isset($_POST['boff']))  // Blue Off
{
exec('sudo python /var/www/cpin7h.py');

}
?>

  <title>SMlab8_APACHE server for Web of Things </title>
</head>
<body background="FX3.png">
<center>
<table witdh="400" border="1" bgcolor="silver">
<td>

<Font color='blue'><b>
<center>
Universitatea Tehnica 'Gh.Asachi' Iasi - Fac. Automatica si Calculatoare<br> 
<br>
<img src="mar.jpg" width="200" height="200"> </center>
</Font><b>
<center> <h1> <Font color='navy'>
SMlab 8 -  APACHE Server  for<br> Web of Things <br>

</h1></font>
<center>

<form method="post">
  <table
 style="width: 50%; text-align: left; margin-left: auto; margin-right: auto;"
 border="1" cellpadding="2" cellspacing="2">
      <tr>
        <td style="text-align: center;"><button name="ron"><font color="red"><b>RED ON</button></td>
        <td style="text-align: center;"><button name="roff"><font color="red"><b>RED OFF </button></td>
      </tr></font>
      <tr><font color="green">
        <td style="text-align: center;"><button name="gon"><font color="green"><b>GREEN ON</button></td>
        <td style="text-align: center;"><button name="goff"><font color="green"><b>GREEN OFF</button></td>
      </tr></font>
      <tr><font color="blue">
        <td style="text-align: center;"><button name="bon"><font color="blue"><b>BLUE ON</button></td>
        <td style="text-align: center;"><button name="boff"><font color="blue"><b>BLUE OFF</button></td>
      </tr></font>
    </tbody>
  </table>

</form>
<font color="navy">
<br>
&copy 2021 Fac. Automatica si Calculatoare
 
</td>
</table>

</body>
</html>

