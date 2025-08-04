import AddHabit from "../../components/Habits/AddHabit"
import HabitList from "../../components/Habits/HabitList"
import useHabitStore from "../../store/store"


function Habits() {
  const store = useHabitStore()
  console.log(store)
  return (
    <div>
      <div>
        <h2 className="text-center text-3xl">Habit</h2>
        <AddHabit/>
      </div>

      <div>
        <HabitList/>
      </div>

    </div>

    
    
  )
}

export default Habits