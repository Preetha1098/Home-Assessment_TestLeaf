function Testing(testType)
{
     
    switch(true)
    {
        case testType == "smoke":
            console.log(testType + " testing started.")
            break
        case testType == "sanity":
            console.log(testType + " testing started")
            break
        case testType == "regression":
            console.log(testType + " testing started")
            break
        Default
            console.log("Smoke Testing started")
    }
}

Testing("smoke");

