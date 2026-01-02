//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".potentia_header").innerHTML = `
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />

    <header align="center">
        <a href="index.html"> <img src="/assets/img/potentia_cover_title.png" alt="Handwritten title for the webcomic POTENTIA, by Bells White/Skelebells" / width="700" > </a> 

        <div id="nav">
            <a href="index.html">home</a> |
            <a href="archive.html">archive</a> |
  
            <a href="characters.html">characters</a>
        </div>
    </header>
`;
