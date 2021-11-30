let spinner = function(num, char)  {
    setTimeout(() => {
        process.stdout.write(`\r${char}   `);
      }, num);
}

spinner(100, "|" );
spinner(300, "/");
spinner(500,"-")
spinner(700,"\\");
spinner(900,"\\");
