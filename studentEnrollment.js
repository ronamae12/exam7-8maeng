let DSA = [];
let PL = [];
let Networks = [];

let currentSubject = null;

function selectSubject() {
  let subjectChoice = prompt(
    'Select a subject:\n(A) DSA\n(B) PL\n(C) Networks\n(D) Exit'
  ).toUpperCase();

  switch (subjectChoice) {
    case 'A':
      currentSubject = DSA;
      console.log('DSA selected.');
      operationsMenu();
      break;
    case 'B':
      currentSubject = PL;
      console.log('PL selected.');
      operationsMenu();
      break;
    case 'C':
      currentSubject = Networks;
      console.log('Networks selected.');
      operationsMenu();
      break;
    case 'D':
      console.log('Exiting and displaying final enrollment:');
      displayEnrollment();
      break;
    default:
      console.log('Invalid choice. Please select again.');
      selectSubject();
  }
}

function operationsMenu() {
  let operationChoice = prompt(
    'Choose an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit'
  ).toUpperCase();

  switch (operationChoice) {
    case 'A':
      enrollStudent();
      break;
    case 'B':
      unenrollStudent();
      break;
    case 'C':
      selectSubject();
      break;
    case 'D':
      console.log('Exiting and displaying final enrollment:');
      displayEnrollment();
      break;
    default:
      console.log('Invalid choice. Please select again.');
      operationsMenu();
  }
}

function enrollStudent() {
  let studentName = prompt('Enter the name of the student to enroll:');
  currentSubject.push(studentName);
  console.log(`${studentName} has been enrolled.`);
  operationsMenu();
}

function unenrollStudent() {
  if (currentSubject.length === 0) {
    console.log('No students enrolled in this subject.');
    operationsMenu();
  } else {
    console.log('Currently enrolled students:', currentSubject.join(', '));
    let studentName = prompt('Enter the name of the student to unenroll:');

    let index = currentSubject.indexOf(studentName);
    if (index !== -1) {
      currentSubject.splice(index, 1);
      console.log(`${studentName} has been unenrolled.`);
    } else {
      console.log(`${studentName} is not enrolled in this subject.`);
    }
    operationsMenu();
  }
}

function displayEnrollment() {
  console.log(
    'DSA Students:',
    DSA.length > 0 ? DSA.join(', ') : 'No students enrolled'
  );
  console.log(
    'PL Students:',
    PL.length > 0 ? PL.join(', ') : 'No students enrolled'
  );
  console.log(
    'Networks Students:',
    Networks.length > 0 ? Networks.join(', ') : 'No students enrolled'
  );
}

selectSubject();