export function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className="flex justify-center">
      <div className="bg-white border-inherit rounded-lg mx-16 my-10 w-fit lg:max-w-3xl">
        <div className="text-6xl font-thin p-4 flex justify-center">
          {title}
        </div>
        <ul className="list-disc px-16">
          <div className="text-3xl px-6 my-2 flex justify-center">
            Ingridents
          </div>
          {ingredients.map((ingredient) => (
            <li className="text-lg">{ingredient.text}</li>
          ))}
        </ul>
        <p className="flex justify-center p-4">
          Calories: {Math.floor(calories)}g
        </p>
        <div className="flex justify-center p-4">
          <img
            className="rounded-full h-44 w-44"
            src={image}
            alt="Cannot display :("
          />
        </div>
      </div>
    </div>
  );
}
