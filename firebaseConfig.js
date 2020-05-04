function setApplicant(name, email, phone) {
  const applicant = {
    name,
    email,
    phone
  };
  console.log("Question successfully written!", applicant);
}

function sendQuestion(name, email, questionText) {
  const question = {
    name,
    email,
    questionText
  };
  console.log("Question successfully written!", question);
}

export { setApplicant, sendQuestion };
