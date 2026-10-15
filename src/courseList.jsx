import car1 from './assets/car.jpg'
import car2 from './assets/car2.jpg'
import car3 from './assets/car3.jpg'
import Course from './Course'


function courseList() {
    const courses = [
        {
            name: "Lamborgini",
            price: 4000,
            image: car1
           
        },
        {
            name: "Defender",
            price: 5000,
            image: car2
            
        },
        {
            name: "Porsche",
            price: 2999,
            image: car3
            
        },
        {
            name: "Punch",
            price: 1999,
            image: car1
        }

    ]

    courses.sort( (x,y) => y.price-x.price)

    const filetred = courses.filter((course)=>course.price<=5000)
    
    const coursesList = filetred.map((course,index) => <Course key ={index} name={course.name} image={course.image} price={course.price} />)
    return (
        <>
            {coursesList}
        </>
    );
}
export default courseList;