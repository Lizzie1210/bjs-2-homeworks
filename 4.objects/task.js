function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
	this.isExpelled = false;
}

let student1 = new Student("Irina", "female", 21);
let student2 = new Student("Svetlana", "female", 25);
let student3 = new Student("Elizaveta", "female", 24);


Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.isExpelled) {
		console.log(`Студент ${this.name} отчислен и не может получить оценки.`);
		return;
	}

	if (!this.marks) {
		console.log("Оценки не могут быть добавлены, так как свойство marks отсутствует.");
		return;
	}

	this.marks.push(...marks);
	console.log(`Оценки для студента ${this.name} успешно добавлены: ${marks}`);
}

Student.prototype.getAverage = function() {
	if (!this.marks || this.marks.length === 0) {
		return 0;
	}

	let sum = this.marks.reduce((acc, mark) => acc + mark, 0);
	let average = sum / this.marks.length;
	return average;
}

Student.prototype.exclude = function(reason) {
	if (!reason) {
		console.log("Причина исключения не указана.");
		return;
	}

	if (this.marks) delete this.marks;
	if (this.subject) delete this.subject;


	this.excluded = reason;

	console.log(`Студент ${this.name} исключен из учебного процесса. Причина: ${reason}`);
}