screen="123+0.0"
buttonValue="1"

if (
    screen.substring(screen.length - 1, screen.length) === "0" &&
    !isNaN(parseInt(buttonValue)) && screen.substring(screen.length - 2, screen.length)!=".0"
  ) 
  
  {
    screen = screen.substring(0, screen.length - 1);
  }

  console.log(screen.slice(-2,-1));