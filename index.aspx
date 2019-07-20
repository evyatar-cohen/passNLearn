<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
        <style> @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');</style>
 
    <meta charset="utf-8" />
    <title>מחולל מסור ולמד | דף משחק</title>
    <meta name="description" content="עמוד המשחק של מסור ולמד." />
    <meta name="keywords" content="מחולל, מסור, למד, כדורגל, משחק לימודי" />
    <meta name="author" content=" אביתר כהן, אסף זיתוני" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <link rel="shortcut icon" type="image/png" href="images/favicon.png"/>

    <link href="styles/myStyle.css" rel="stylesheet" />
        <script src="jscripts/jquery-1.12.0.min.js"></script>
    <script src="jscripts/JavaScript.js"></script>
</head>
<body id="bodyGame" lang="he" dir="rtl">
        <div id="container">
    <form id="form1" runat="server">
        <div id="header">
     <a href="Default.aspx"><img id="logo" src="images/Logo.svg" /> </a>
     <nav id="GenNav">
                <ul>
                    <li><a href="Login.aspx" class="NavLi" id="ToTheGen">למחולל</a></li>
                    <li><a class="about" id="ToTheGame">אודות</a></li>
                    <li><a class="howToPlay" id="howToPlay">איך משחקים?</a></li>

                </ul>
            </nav>
</div>
        <div id="aboutDiv" class="popUp bounceInDown hide">
            <a class="closeAbout">X</a>
            <p> <img id="logo2" src="images/Logo.svg" /></p>
            <p>אפיון ופיתוח: <i>אסף זיתוני ואביתר כהן</i> </p>

            <p>
                פותח במסגרת פרויקט בקורסים: <br />
                סביבות לימוד אינטראקטיביות 1 & אנימציה, תשע"ט
            </p>
            <p>
                <a id="log" href="http://www.hit.ac.il/telem/overview">
                    הפקולטה לטכנולוגיות למידה
                </a>
                <br />

                המכון הטכנולוגי חולון
            </p>

            <img id="hit" src="images/hit.png" />
        </div>

        <div id="howToPlayDiv" class="popUp bounceInDown hide">
            <div id="closeabout">X</div>
            <p><iframe width="560" height="315" src="https://www.youtube.com/embed/VtUq_DKpkQw?playlist=VtUq_DKpkQw&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>      
            </div>
        <div id="gameArea" class="">
            <!--src = הקישור של דף המשחק שלכם (לא קובץ האנימייט)-->

            <iframe src="game.html" frameBorder="0" allowfullscreen="">Browser not compatible.</iframe>
        </div>
         </form>
    </div>
</body>
</html>
