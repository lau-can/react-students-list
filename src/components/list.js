import Student from './student';
// import studentsListData from '../data/student-list';

const studentsListData = [
    {
        id: 1,
        firstName: 'Martin',
        lastName: 'Randolph',
        course: 'Frontend',
        email: 'martin.randolph@gmail.com',
        color: 'black'
    },
    {
        id: 2,
        firstName: 'Kieron',
        lastName: 'Dotson',
        course: 'Frontend',
        email: 'Kieron.Dotson@gmail.com',
        color: 'red'
    },
    {
        id: 3,
        firstName: 'Martin',
        lastName: 'Randolph',
        course: 'Frontend',
        email: 'martin.randolph@gmail.com',
        color: 'green'
    },
    {
        id: 4,
        firstName: 'Zack',
        lastName: 'John',
        course: 'Backend',
        email: 'Zack.John@gmail.com',
        color: 'yellow'
    },
    {
        id: 5,
        firstName: 'Maximillian',
        lastName: 'Jacobson',
        course: 'Backend',
        email: 'Maximillian.Jacobson@gmail.com',
        color: 'purple'
    },
    {
        id: 6,
        firstName: 'Popescu',
        lastName: 'Gheorghe',
        course: 'Backend',
        email: 'gheorghe@yahoo.com',
        color: 'black'
    }
];

function List(){
	return (
		<div>
			{/* 1. Hardcoded */}
			{/* <Student firstName = 'Luca' lastName = 'Toma' course = 'HTML' email = 'nume@gmail.com' age='23'/>
			<Student firstName = 'Andrei' lastName = 'Popescu' course = 'CSS' email = 'nume@gmail.com' age='25'/> */}
			
			{/* 2. Loop on students - pass each field of object*/}
			{/* {
				studentsListData.map( (dateStudent) => 
					(
						<Student firstName = {dateStudent.firstName} lastName = {dateStudent.lastName} course = {dateStudent.course} email = {dateStudent.email} age='23'/>
					)
					)
			} */}

			{/* 3. Pass whole object */}
			{
				studentsListData.map( (dateStudent) => 
				(
					<Student data={dateStudent} age='23'/>
				)
				)
			}
		</div>
	)
}

export default List;