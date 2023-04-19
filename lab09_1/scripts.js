function changeColor() {
    text = document.getElementById("dummy-text");
    pcolor_r = document.getElementById("pcolor_r").value;
    pcolor_g = document.getElementById("pcolor_g").value;
    pcolor_b = document.getElementById("pcolor_b").value;
    bcolor_r = document.getElementById("bcolor_r").value;
    bcolor_g = document.getElementById("bcolor_g").value;
    bcolor_b = document.getElementById("bcolor_b").value;
    bsize = document.getElementById("bsize").value;

    if (bsize != '')
    {
        text.style.border = bsize + "px solid black";
    }
    
    if (pcolor_r != "" || pcolor_g != "" || pcolor_b != "")
    {
        text.style.color = "rgb(" + pcolor_r + "," + pcolor_g + "," + pcolor_b + ")";
    }

    if (bcolor_r != "" || bcolor_g != "" || bcolor_b != "")
    {
        text.style.borderColor = "rgb(" + bcolor_r + ", " + bcolor_g + ", " + bcolor_b + ")";
    }
}

function checkPassword() {
    pw1 = document.getElementById("pw1").value;
    pw2 = document.getElementById("pw2").value;
    result = document.getElementById("result");

    if (pw1 === pw2)
    {
        if (pw1.length < 8) 
        {
            result.innerHTML = "ERROR: Password is too short!";
            result.style.color = "red";
        }
        else 
        {
            result.innerHTML = "The two passwords you have entered match and are of sufficient length!";
            result.style.color = "green";
        }
    }
    else
    {
        result.innerHTML = "ERROR: The passwords do not match!";
        result.style.color = "red";
    }
}