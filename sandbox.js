// query the dom to get the form
const forms= document.querySelector('.forming');
const correctAnswers= ['B', 'C', 'A', 'A', 'C'];
const results= document.querySelector('.container');
// add event listener
forms.addEventListener('submit', (e)=>{
e.preventDefault();
// compare user answers with correct answers.
let score= 0;
const userAnswer= [forms.q1.value,forms.q2.value,forms.q3.value,forms.q4.value,forms.q5.value]

userAnswer.forEach((answer, index)=>{
if(answer=== correctAnswers[index]){
    score += 20
}
})
scrollTo(0,0);
results.querySelector('span').textContent =`${score}%`
results.className= 'success'
});