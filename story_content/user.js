function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6pFB5beqb3J":
        Script1();
        break;
      case "6dxnIOTva5Y":
        Script2();
        break;
  }
}

function Script1()
{
  var body = document.querySelector("body")
var style = document.createElement('style')
style.type = 'text/css';
style.appendChild(document.createTextNode(".caption p { background: rgba(73,80,87,0.7); color: white; text-decoration: none; text-shadow: none; font-size: 15px; font-weight: bold; }"));
body.appendChild(style);
}

function Script2()
{
  parent.document.body.style.backgroundColor = "#F5F5F5";
}

