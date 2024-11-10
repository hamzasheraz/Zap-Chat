import { Checkbox } from "@/components/ui/checkbox"

const Eachtask = ({ task, toggleTask }) => {
    return (
        <div key={task.id} className="flex items-center space-x-2">
            <Checkbox
                id={`task-${task.id}`}
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)} />
            <label
                htmlFor={`task-${task.id}`}
                className={`flex-grow text-sm ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                {task.text}
            </label>
        </div>
    )
}

export default Eachtask;