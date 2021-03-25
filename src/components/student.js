function Student(props){
	return (
		// Works with method 2. in list.js
		// <div className="card">
		// 	<h1>{props.firstName} {props.lastName}</h1>
		// 	<h3>Course: {props.course}</h3>
		// 	<p><b>Email</b>: {props.email}</p>
		// 	<p>Age: {props.age}</p>
		// </div>

		// Works with method 3. in list
		<div className="card">
			<h1>{props.data.firstName} {props.data.lastName}</h1>
			<h3>Course: {props.data.course}</h3>
			<p><b>Email</b>: {props.data.email}</p>
			<p>Age: {props.age}</p>
		</div>
	)
}

export default Student;