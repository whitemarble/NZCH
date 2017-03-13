function showseach()
    {
        document.getElementById("main-menu").style.display="none";
        document.getElementById("search-button").style.display="none";
        document.getElementById("main-search").style.display="flex";
        document.getElementById("search-input").focus();

    }

    function hidesearch()
    {
        document.getElementById("main-menu").style.display="flex";
        document.getElementById("search-button").style.display="inline-block";
        document.getElementById("main-search").style.display="none";
    }