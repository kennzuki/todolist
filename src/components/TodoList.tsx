import { FaTrashAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const TodoList = () => {
  return (
      <div className="flex place-items-center justify-between border p-4 shadow-xl rounded-xl">
          <h1 className="">todo</h1>
          <section className="flex place-items-center gap-3 [&_button]:px-3 [&_button]:border [&_button]:rounded-xl [&_button]:py-2 [&_button]:shadow-md [&_button]:text-white [&_button]:flex [&_button]:place-items-center [&_button]:gap-2">
              <button className="bg-green-500"><TiTick />finished</button>
              <button className="bg-red-500"><FaTrashAlt />delete</button>
          </section>
    </div>
  )
}

export default TodoList