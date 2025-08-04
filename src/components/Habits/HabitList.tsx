import useHabitStore from "../../store/store"

function HabitList() {
    const {habits,deleteHabit,completeHabit} = useHabitStore()
    console.log(habits)

    if(habits.length <= 0){
        return <h2 className="text-center text-red-500 font-bold">There is no habit to display</h2>
    }
    return (
        <div className=" px-4 grid  grid-cols-1 md:grid-cols-2  gap-5 mt-10">
            {habits.map(habit => (
                    <div key={habit.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white shadow rounded-lg p-10 mb-4 gap-4">
                        <div className="flex-1">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 break-words">{habit.habitName}</h3>
                            <p className="text-gray-500 font-semibold text-sm sm:text-base">{habit.frequency}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                            <button 
                            className={`px-4 py-2 ${habit.completedDays.length < 1 ? "bg-blue-500": "bg-green-500"} text-white rounded hover:bg-blue-600 transition-colors w-full sm:w-auto`}
                            onClick={() => completeHabit(habit.id)}
                            >
                            
                                Mark as complete
                            </button>
                            <button onClick={()=> deleteHabit(habit.id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors w-full sm:w-auto">Delete</button>
                        </div>
                    </div>
            ))}
        </div>
    )
}

export default HabitList