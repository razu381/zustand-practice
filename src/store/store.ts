import { create } from "zustand";
import { persist } from "zustand/middleware"; // ✅ Import persist



export interface Habit{
    id: string,
    habitName: string,
    frequency: "daily" | "weekly",
    completedDays: string[],
    createdAt: string
}

interface HabitState{
    habits: Habit[]
    addHabit: (habitName: string, frequency: "daily" | "weekly") => void
    deleteHabit: (id: string) => void
    completeHabit: (id:string) => void
}



const useHabitStore = create<HabitState>()(
    persist(
        (set) => ({
            habits: [],
            addHabit: (habitName, frequency) => set((state) => ({
                habits: [
                    ...state.habits,
                    {
                        id: crypto.randomUUID(),
                        habitName,
                        frequency,
                        completedDays: [],
                        createdAt: new Date().toISOString(),
                    },
                ],
            })),
            deleteHabit: (id: string) =>
                set((state) => ({
                    habits: state.habits.filter((habit) => habit.id !== id),
                })),
            completeHabit: (id: string) =>
                set((state) => ({
                    habits: state.habits.map((habit) =>
                        habit.id === id
                            ? {
                                  ...habit,
                                  completedDays: [
                                      ...habit.completedDays,
                                      new Date().toISOString(),
                                  ],
                              }
                            : habit
                    ),
                })),
        }),
        {
            name: "habit-storage", // unique name for localStorage
        }
    )
)

export default useHabitStore