function sudentScore(Grade)
{
     
    switch(true)
    {
        case Grade >= 80:
            console.log("Grade is A")
            break
        case Grade<80 && Grade >= 60:
            console.log("Grade is B")
            break
        case Grade<60 && Grade >=40:
            console.log("Grade is C")
            break
        case Grade<40 && Grade >=20:
            console.log("Grade is D")
            break
        case Grade<20 && Grade >=10:
            console.log("Grade is F")
            break    
        Default
            console.log("Grade is F")
    }
}

sudentScore("5");
