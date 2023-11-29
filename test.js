import inquirer from 'inquirer';


const questions = [
  {
    type: "input",
    name: 'userName',
    message: "What is your name",

  }

]
console.log('----------------Rock () Paper [] Sisors X----------------')

inquirer
  .prompt(questions)
  .then(
    class userNames{
      constructor(userName){
        this.user1 = userName
      }
      display(){
        console.log(user1)
      }
    }
  )

  const baker = new userNames(userName)
  baker.display()


  