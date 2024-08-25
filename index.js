import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';




inquirer.prompt([
    {
        type: 'input', 
        name:'user_answer', 
        message: 'Enter any URL?'
    }
]).then((answer) => {
    const value = answer['user_answer'];
    var qr_png = qr.image(value);
    qr_png.pipe(fs.createWriteStream('qr_img.png'));
    
    fs.writeFile('answer.txt', value, (err) => {
        if (err) throw err;
    })

}).catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



