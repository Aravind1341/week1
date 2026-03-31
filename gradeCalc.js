let grade = ""
function studentMarkcalc(name, studentMark){
    switch(true){
        case(studentMark >= 90):
            grade = "A"
            break
        case(studentMark >= 80):
            grade = "B"
            break
        case(studentMark >= 60):
            grade = "C"
            break
        case(studentMark >= 50):
            grade = "D"
            break
        case(studentMark >= 35):
            grade = "E"
            break
        default:
            grade = "F"
            break
    }
    console.log(name + " mark - " + studentMark + " and " + " grade is - " +grade)
}

studentMarkcalc("Test", 25)