import { RefObject } from 'react';

export const TodoAdd = ({
  buttonText,
  inputEl,
  handleAddTodoItem,
}: {
  buttonText: string;
  inputEl: RefObject<HTMLTextAreaElement>;
  handleAddTodoItem: () => void;
}) => {
  return (
    <div className="my-8 flex flex-row items-center justify-center">
      <textarea
        ref={inputEl}
        className="flex items-center justify-center text-center"
      />
      <button
        onClick={handleAddTodoItem}
        className="rounded border border-pink-500 bg-transparent py-2 px-4 font-semibold hover:border-transparent hover:bg-pink-500 hover:text-white"
      >
        {buttonText}
      </button>
    </div>
  );
};
