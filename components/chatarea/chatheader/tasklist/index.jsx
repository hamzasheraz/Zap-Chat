import { X, PlusCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Eachtask from './eachtask'

const Tasklist = ({ tasks, isTaskListOpen, toggleTaskList, toggleTask, newTask, setNewTask, addTask }) => {
    return (
        <>
            {isTaskListOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div
                        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Collaborative Task List</h2>
                            <Button variant="ghost" size="icon" onClick={toggleTaskList}>
                                <X className="h-5 w-5" />
                            </Button>
                        </div>
                        <div className="space-y-2">
                            {tasks.map((task) => (
                               <Eachtask key={task.id} task={task} toggleTask={toggleTask} />
                            ))}
                        </div>
                        <div className="mt-4 flex space-x-2">
                            <Input
                                placeholder="Add a new task"
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && addTask()} />
                            <Button onClick={addTask}>
                                <PlusCircle className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Tasklist;