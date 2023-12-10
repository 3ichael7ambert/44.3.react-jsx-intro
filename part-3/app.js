function App() {
    const person1 = {
      name: 'Mikey Lambert',
      age: 33,
      hobbies: ['Art', 'Music', 'Programming'],
    };
  
    const person2 = {
      name: 'Akita Emmanual',
      age: 27,
      hobbies: ['Basketball', 'Paris'],
    };
  
    const person3 = {
      name: 'Colt Steele',
      age: 30,
      hobbies: ['Chickens', 'Red Woods', 'Teaching'],
    };
  
    return (
      <div>
        <Person {...person1} />
        <Person {...person2} />
        <Person {...person3} />
      </div>
    );

}