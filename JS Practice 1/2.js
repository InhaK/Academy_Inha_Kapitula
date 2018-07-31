function string_check(str1) {
    if (str1 === null || str1 === undefined || str1.substring(0, 4) === "Test") 
    {
      return str1;
    }
    return "Test"+str1;
  }
  
  console.log(string_check("Testers"));
  console.log(string_check("ers"));
