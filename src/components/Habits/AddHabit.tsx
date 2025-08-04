import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import useHabitStore from '../../store/store';





interface HabitFormData {
    habitName: string;
    frequency: "daily" | "weekly";
}

function AddHabit() {
    const {habits,addHabit} = useHabitStore()
   // console.log(habits,AddHabit)
    
    const form = useForm<HabitFormData>({
        defaultValues: {
            habitName: '',
            frequency: undefined
        }
    })

    function onSubmit(data: HabitFormData) {
        addHabit(data.habitName, data.frequency)
        console.log(data)
    }

    

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-10">
        <FormField
          control={form.control}
          name="habitName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Habit Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter habit name" {...field} />
              </FormControl>
              <FormDescription>
                Give your habit a descriptive name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="frequency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Frquency</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder="Select frequncy for your habit" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Please select how frequent would you want to do these habits
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit">Add Habit</Button>
      </form>
    </Form>
  )
}

export default AddHabit