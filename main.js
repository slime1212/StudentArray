// Declare an array here.

var nameofstudent = [];

// Function opening here.

function submit() {
    var name1 = document.getElementById("student1").value;
    var name2 = document.getElementById("student2").value;
    var name3 = document.getElementById("student3").value;
    var name4 = document.getElementById("student4").value;

    nameofstudent.push(name1);
    nameofstudent.push(name2);
    nameofstudent.push(name3);
    nameofstudent.push(name4);

    console.log(nameofstudent);

    document.getElementById("display-name").innerHTML = nameofstudent;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
};

// Sort function here.

function sort() {
    nameofstudent.sort();

    console.log(nameofstudent);

    document.getElementById("display-name").innerHTML = nameofstudent;
};