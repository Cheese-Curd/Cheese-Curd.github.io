// Mostly stolen from https://github.com/AngelDTF/AngelDTF.github.io/blob/main/docs/site.js
// just sayin'

document.addEventListener('DOMContentLoaded', () =>
{
	/* START: Cookie loading */
	if (getCookie('theme') == 'light')
	{
		document.querySelector('#theme').href = './Styles/theme/light.css';
	}
	/* END: Cookie loading */
});

function toggleTheme()
{
    const theme = document.querySelector('#theme');
    if (theme.href.endsWith('/dark.css'))
    {
        theme.href = './Styles/theme/light.css';
        setCookie('theme', 'light');
    }
    else
    {
        theme.href = './Styles/theme/dark.css';
        setCookie('theme', 'dark');
    }
}

// Thanks Grepper for these two functions
function setCookie(name,value,days)
{
    var expires = "";
    if (days)
    {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name)
{
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i=0; i < ca.length; i++)
    {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}